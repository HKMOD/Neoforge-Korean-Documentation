"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[9542],{783:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=c(5893),i=c(1151);const t={},d="\uc0c1\ud638\uc791\uc6a9 \ud30c\uc774\ud504\ub77c\uc778",l={id:"items/interactionpipeline",title:"\uc0c1\ud638\uc791\uc6a9 \ud30c\uc774\ud504\ub77c\uc778",description:"\uc774 \ud398\uc774\uc9c0\ub294 \uc6b0\ud074\ub9ad\uc744 \ud1b5\ud55c \uc0c1\ud638\uc791\uc6a9 \uacfc\uc815, \uadf8\ub9ac\uace0 \uacb0\uacfc(Result)\uac00 \ubb34\uc5c7\uc778\uc9c0, \uc5b4\ub514\uc5d0 \uc4f0\ub294\uc9c0\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4.",source:"@site/docs/items/interactionpipeline.md",sourceDirName:"items",slug:"/items/interactionpipeline",permalink:"/Neoforge-Korean-Documentation/en/docs/items/interactionpipeline",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"BlockEntityWithoutLevelRenderer",permalink:"/Neoforge-Korean-Documentation/en/docs/items/bewlr"},next:{title:"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8 1.20\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc \ud558\uae30",permalink:"/Neoforge-Korean-Documentation/en/docs/legacy/porting"}},r={},o=[{value:"\uc6b0\ud074\ub9ad\uc744 \ud558\uba74 \ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uac00?",id:"\uc6b0\ud074\ub9ad\uc744-\ud558\uba74-\ubb34\uc2a8-\uc77c\uc774-\uc77c\uc5b4\ub098\ub294\uac00",level:2},{value:"\uacb0\uacfc\uc758 \uc885\ub958",id:"\uacb0\uacfc\uc758-\uc885\ub958",level:2},{value:"<code>IItemExtension#onItemUseFirst</code>",id:"iitemextensiononitemusefirst",level:2},{value:"<code>Item#useOn</code>",id:"itemuseon",level:2},{value:"<code>Item#use</code>",id:"itemuse",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\uc0c1\ud638\uc791\uc6a9-\ud30c\uc774\ud504\ub77c\uc778",children:"\uc0c1\ud638\uc791\uc6a9 \ud30c\uc774\ud504\ub77c\uc778"}),"\n",(0,s.jsxs)(n.p,{children:["\uc774 \ud398\uc774\uc9c0\ub294 \uc6b0\ud074\ub9ad\uc744 \ud1b5\ud55c \uc0c1\ud638\uc791\uc6a9 \uacfc\uc815, \uadf8\ub9ac\uace0 \uacb0\uacfc(",(0,s.jsx)(n.code,{children:"Result"}),")\uac00 \ubb34\uc5c7\uc778\uc9c0, \uc5b4\ub514\uc5d0 \uc4f0\ub294\uc9c0\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\uc6b0\ud074\ub9ad\uc744-\ud558\uba74-\ubb34\uc2a8-\uc77c\uc774-\uc77c\uc5b4\ub098\ub294\uac00",children:"\uc6b0\ud074\ub9ad\uc744 \ud558\uba74 \ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uac00?"}),"\n",(0,s.jsxs)(n.p,{children:["\uc6d4\ub4dc\uc5d0\uc11c \uc6b0\ud074\ub9ad\ud560 \uc2dc, \ubc14\ub77c\ubcf4\ub358 \ub300\uc0c1, \uc190\uc5d0 \ub4e4\ub358 ",(0,s.jsx)(n.code,{children:"ItemStack"}),'\uc5d0 \ub530\ub77c \uc5ec\ub7ec \uc791\uc5c5\uc774 \uc218\ud589\ub429\ub2c8\ub2e4. \ub9ce\uc740 \uc0c1\ud638\uc791\uc6a9 \uad00\ub828 \uba54\uc11c\ub4dc\ub4e4\uc740 \ub450 \uac1c\uc758 \uacb0\uacfc(\uc544\ub798 \ucc38\uace0)\uc911 \ud558\ub098\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub4e4\uc740 \uba85\uc2dc\uc801\uc73c\ub85c \uc131\uacf5 \ub610\ub294 \uc2e4\ud328 \uc2dc \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc911\ub2e8\ud569\ub2c8\ub2e4. \uac00\ub3c5\uc131\uc744 \uc704\ud574 "\uba85\uc2dc\uc801 \uc131\uacf5 \ub610\ub294 \uc2e4\ud328"\ub294 "\ud655\uc2e4\ud55c \uacb0\uacfc"\ub85c \ud45c\ud604\ud558\uaca0\uc2b5\ub2c8\ub2e4.']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InputEvent.InteractionKeyMappingTriggered"}),"\uac00 \ub9c8\uc6b0\uc2a4 \uc6b0\ud074\ub9ad, \uc8fc \uc0c1\ud638\uc791\uc6a9 \uc190\uc744 \uac00\uc9c0\uace0 \ubc29\uc1a1\ub428. \uc774\ubca4\ud2b8 \ucde8\uc18c \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."]}),"\n",(0,s.jsxs)(n.li,{children:["\uc5ec\ub7ec \uc0ac\uc804 \uac80\uc0ac \uc218\ud589. \uad00\uc804\uc790 \ubaa8\ub4dc\uc774\uac70\ub098 \uc190\uc5d0 \ub4e0 ",(0,s.jsx)(n.code,{children:"ItemStack"}),"\uc758 feature flag\uac00 \ube44\ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub2e4\uba74 \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."]}),"\n",(0,s.jsxs)(n.li,{children:["\ubc14\ub77c\ubcf4\ub294 \ub300\uc0c1\uc5d0 \ub530\ub77c \ub2e4\ub978 \uc791\uc5c5 \uc218\ud589:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc6d4\ub4dc \uacbd\uacc4 \uc548\uc5d0 \uc788\ub294, \uc0c1\ud638\uc791\uc6a9 \uac70\ub9ac \ub0b4\uc758 \uc5d4\ud2f0\ud2f0:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PlayerInteractEvent.EntityInteractSpecific"}),"\uc774 \ubc29\uc1a1\ub428. \uc774\ubca4\ud2b8 \ucde8\uc18c \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ubc14\ub77c\ubcf8 \uc5d4\ud2f0\ud2f0\uc5d0"})," ",(0,s.jsx)(n.code,{children:"Entity#interactAt"}),"\uc774 \ud638\ucd9c\ub428. \ud655\uc2e4\ud55c \uacb0\uacfc\uac00 \ubc18\ud658\ub420 \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc790\uccb4 \uc81c\uc791\ud55c \uc5d4\ud2f0\ud2f0\uc5d0 \uc0c1\ud638\uc791\uc6a9 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub824\uba74 \uc774 \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758 \ud558\uc138\uc694. \ubc14\ub2d0\ub77c \uc5d4\ud2f0\ud2f0\uc5d0 \uc0c1\ud638\uc791\uc6a9 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub824\uba74 \uc774\ubca4\ud2b8\ub97c \ub300\uc2e0 \uc0ac\uc6a9\ud558\uc138\uc694."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\uc5d4\ud2f0\ud2f0\uac00 GUI\ub97c \uc5f4 \uacbd\uc6b0(\uc608: \uc8fc\ubbfc \uac70\ub798 GUI, \uc0c1\uc790 \uad11\uc0b0 \uc218\ub808 GUI), \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PlayerInteractEvent.EntityInteract"}),"\uac00 \ubc29\uc1a1\ub428. \uc774\ubca4\ud2b8 \ucde8\uc18c \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ubc14\ub77c\ubcf8 \uc5d4\ud2f0\ud2f0\uc5d0"})," ",(0,s.jsx)(n.code,{children:"Entity#interact"}),"\uac00 \ud638\ucd9c\ub428. \ud655\uc2e4\ud55c \uacb0\uacfc\uac00 \ubc18\ud658\ub420 \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc790\uccb4 \uc81c\uc791\ud55c \uc5d4\ud2f0\ud2f0\uc5d0 \uc0c1\ud638\uc791\uc6a9 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub824\uba74 \uc774 \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758 \ud558\uc138\uc694. \ubc14\ub2d0\ub77c \uc5d4\ud2f0\ud2f0\uc5d0 \uc0c1\ud638\uc791\uc6a9 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub824\uba74 \uc774\ubca4\ud2b8\ub97c \ub300\uc2e0 \uc0ac\uc6a9\ud558\uc138\uc694."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Mob"}),"\uc758 \uacbd\uc6b0, ",(0,s.jsx)(n.code,{children:"Entity#interact"}),"\ub97c \ub048\uc73c\ub85c \ub04c\uae30 \ub610\ub294 \uc2a4\ud3f0\uc54c\ub85c \uc544\uae30\ub97c \uc18c\ud658\ud558\ub294 \ub370 \uc0ac\uc6a9\ud569\ub2c8\ub2e4, \uadf8\ub9ac\uace0 \ubab9 \uc804\uc6a9 \uc0c1\ud638\uc791\uc6a9 \uae30\ub2a5\uc740 ",(0,s.jsx)(n.code,{children:"Mob#mobInteract"}),"\ub85c \uad6c\ud604\ud569\ub2c8\ub2e4. \uba54\uc11c\ub4dc\uc758 \uacb0\uacfc\ub294 ",(0,s.jsx)(n.code,{children:"Entity#interact"}),"\uc640 \ub611\uac19\uc774 \ucc98\ub9ac\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\ub9cc\uc57d \ubc14\ub77c\ubcf8 \uc5d4\ud2f0\ud2f0\uac00 ",(0,s.jsx)(n.code,{children:"LivingEntity"}),"\ub77c\uba74, \uc8fc \uc0c1\ud638\uc791\uc6a9 \uc190\uc758 \uc544\uc774\ud15c\uc5d0 \ub300\ud574 ",(0,s.jsx)(n.code,{children:"Item#interactLivingEntity"}),"\uac00 \ud638\ucd9c\ub428. \ud655\uc2e4\ud55c \uacb0\uacfc\uac00 \ubc18\ud658\ub420 \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\uc6d4\ub4dc \uacbd\uacc4 \uc548\uc5d0 \uc788\ub294, \uc0c1\ud638\uc791\uc6a9 \uac70\ub9ac \ub0b4\uc758 \ube14\ub85d:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PlayerInteractEvent.RightClickBlock"}),"\uc774 \ubc29\uc1a1\ub428. \uc774\ubca4\ud2b8 \ucde8\uc18c \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8. \ud574\ub2f9 \uc774\ubca4\ud2b8\ub294 \ube14\ub85d \ub610\ub294 \uc544\uc774\ud15c \ucc98\ub9ac\ub9cc \ucc28\ub2e8\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IItemExtension#onItemUseFirst"}),"\uac00 \ud638\ucd9c\ub428. \ud655\uc2e4\ud55c \uacb0\uacfc\uac00 \ubc18\ud658\ub420 \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud50c\ub808\uc774\uc5b4\uac00 \uc6c5\ud06c\ub9ac\uc9c0 \uc54a\uc558\uace0 \uc774\ubca4\ud2b8\uac00 \ube14\ub85d \ucc98\ub9ac\ub97c \ucc28\ub2e8\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 ",(0,s.jsx)(n.code,{children:"Block#use"}),"\uac00 \ud638\ucd9c\ub428. \ud655\uc2e4\ud55c \uacb0\uacfc\uac00 \ubc18\ud658\ub420 \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8. definitive result, the pipeline ends."]}),"\n",(0,s.jsxs)(n.li,{children:["\uc774\ubca4\ud2b8\uac00 \uc544\uc774\ud15c \ucc98\ub9ac\ub97c \ucc28\ub2e8\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74, ",(0,s.jsx)(n.code,{children:"Item#useOn"}),"\uc774 \ud638\ucd9c\ub429\ub2c8\ub2e4. \ud655\uc2e4\ud55c \uacb0\uacfc\uac00 \ubc18\ud658\ub420 \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Item#use"}),"\uac00 \ud638\ucd9c\ub428. \ud655\uc2e4\ud55c \uacb0\uacfc\uac00 \ubc18\ud658\ub420 \uc2dc \ud30c\uc774\ud504\ub77c\uc778 \uc911\ub2e8."]}),"\n",(0,s.jsx)(n.li,{children:"\uc704 \uacfc\uc815\uc744 \ubd80 \uc0c1\ud638\uc791\uc6a9 \uc190\uc73c\ub85c \ud55c\ubc88 \ub354 \uc218\ud589\ud568."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\uacb0\uacfc\uc758-\uc885\ub958",children:"\uacb0\uacfc\uc758 \uc885\ub958"}),"\n",(0,s.jsxs)(n.p,{children:["\uacb0\uacfc\uc5d0\ub294 \ub450 \uac1c\uc758 \uc885\ub958\ub85c \ub098\ub269\ub2c8\ub2e4: ",(0,s.jsx)(n.code,{children:"InteractionResult"}),", \uadf8\ub9ac\uace0 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder<T>"}),". \uc77c\ubc18\uc801\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"InteractionResult"}),"\ub97c \uc0ac\uc6a9\ud558\uba70 \uc624\uc9c1 ",(0,s.jsx)(n.code,{children:"Item#use"}),"\ub9cc ",(0,s.jsx)(n.code,{children:"InteractionResultHolder<ItemStack>"}),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"InteractionResult"}),"\ub294 \ub2e4\uc12f \uac1c\uc758 \uacbd\uc6b0\uc758 \uc218\ub97c \uac00\uc9c4 \uc5f4\uac70\ud615\uc785\ub2c8\ub2e4: ",(0,s.jsx)(n.code,{children:"SUCCESS"}),", ",(0,s.jsx)(n.code,{children:"CONSUME"}),", ",(0,s.jsx)(n.code,{children:"CONSUME_PARTIAL"}),", ",(0,s.jsx)(n.code,{children:"PASS"}),"\uadf8\ub9ac\uace0 ",(0,s.jsx)(n.code,{children:"FAIL"}),". \ucd94\uac00\uc801\uc73c\ub85c, ",(0,s.jsx)(n.code,{children:"InteractionResult#sidedSuccess"}),"\ub294 \uc11c\ubc84\uc5d0\uc120 ",(0,s.jsx)(n.code,{children:"SUCCESS"}),", \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc120 ",(0,s.jsx)(n.code,{children:"CONSUME"}),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"InteractionResultHolder<T>"}),"\ub294 ",(0,s.jsx)(n.code,{children:"InteractionResult"}),"\uc640 ",(0,s.jsx)(n.code,{children:"T"}),"\ub97c \ub2f4\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"T"}),"\ub294 \uc544\ubb34\uac70\ub098 \ub420 \uc218 \uc788\uc9c0\ub9cc \uac70\uc758 ",(0,s.jsx)(n.code,{children:"ItemStack"}),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"InteractionResultHolder<T>"}),"\ub294 \uac01 \uc5f4\uac70\ud615 \uac12\uc744 \uc704\ud55c \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud558\uba70(",(0,s.jsx)(n.code,{children:"#success"}),", ",(0,s.jsx)(n.code,{children:"#consume"}),", ",(0,s.jsx)(n.code,{children:"#pass"})," \uadf8\ub9ac\uace0 ",(0,s.jsx)(n.code,{children:"#fail"}),"), \uc704\ucc98\ub7fc ",(0,s.jsx)(n.code,{children:"#sidedSuccess"})," \ub610\ud55c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc120 ",(0,s.jsx)(n.code,{children:"#success"}),"\ub97c, \uc11c\ubc84\uc5d0\uc120 ",(0,s.jsx)(n.code,{children:"#consume"}),"\uc744 \ud638\ucd9c\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\uc704 \uac12\ub4e4\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InteractionResult#sidedSuccess"})," (\ub610\ub294 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#sidedSuccess"}),")\ub294 \uc791\uc5c5\uc774 \uc131\uacf5\ud588\uace0 \ud314\uc774 \uc6c0\uc9c1\uc5ec\uc57c \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud30c\uc774\ud504\ub77c\uc778\uc740 \ubc14\ub85c \uc885\ub8cc\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InteractionResult.SUCCESS"})," (\ub610\ub294 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#success"}),")\ub294 \uc791\uc5c5\uc774 \uc131\uacf5\ud588\uace0, \ud314\uc774 \ud55c\ucabd \uc0ac\uc774\ub4dc\uc5d0\uc11c\ub9cc \uc6c0\uc9c1\uc5ec\uc57c \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ubc18\ub300 \uc0ac\uc774\ub4dc\uc5d0 \ub2e4\ub978 \uac12\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c \uc4f0\uc138\uc694. \ud30c\uc774\ud504\ub77c\uc778\uc740 \ubc14\ub85c \uc885\ub8cc\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InteractionResult.CONSUME"})," (\ub610\ub294 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#consume"}),")\uc740 \uc791\uc5c5\uc774 \uc131\uacf5\ud588\uc9c0\ub9cc \ud314\uc740 \uc6c0\uc9c1\uc774\uc9c0 \uc54a\uc544\uc57c \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud30c\uc774\ud504\ub77c\uc778\uc740 \ubc14\ub85c \uc885\ub8cc\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InteractionResult.CONSUME_PARTIAL"}),"\uc740 ",(0,s.jsx)(n.code,{children:"InteractionResult.CONSUME"}),"\uacfc \uac70\uc758 \ube44\uc2b7\ud558\uba70, \uc720\uc77c\ud55c \ucc28\uc774\uc810\uc740 ",(0,s.jsx)(n.a,{href:"#itemuseon",children:(0,s.jsx)(n.code,{children:"Item#useOn"})}),"\uc774 \uc774\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InteractionResult.FAIL"})," (\ub610\ub294 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#fail"}),")\uc740 \uc544\uc774\ud15c\uc758 \uae30\ub2a5 \uc218\ud589\uc774 \uc2e4\ud328\ud588\uace0 \ucd94\uac00 \uc791\uc5c5\uc744 \ud560 \ud544\uc694\uac00 \uc5c6\uc744 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud30c\uc774\ud504\ub77c\uc778\uc740 \ubc14\ub85c \uc885\ub8cc\ub429\ub2c8\ub2e4. \uc544\ubb34 \ub54c\ub098 \uc0ac\uc6a9\ud560 \uc21c \uc788\uc9c0\ub9cc, \ub2e4\ub978 \uc791\uc5c5 \uc218\ud589\uc744 \ucc28\ub2e8\ud558\uae30\uc5d0 ",(0,s.jsx)(n.code,{children:"Item#useOn"})," \ubc0f ",(0,s.jsx)(n.code,{children:"Item#use"})," \ubc16\uc5d0\uc120 \uc8fc\uc758\ub97c \uae30\uc6b8\uc5ec\uc57c \ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"InteractionResult.PASS"}),"\ub97c \uc4f0\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InteractionResult.PASS"})," (\ub610\ub294 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#pass"}),")\ub294 \uc791\uc5c5\uc774 \uc131\uacf5 \ub610\ub294 \uc2e4\ud328\ud558\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud30c\uc774\ud504\ub77c\uc778\uc758 \uc5ec\ub7ec \uba54\uc11c\ub4dc\ub4e4\uc740 ",(0,s.jsx)(n.code,{children:"PASS"}),"\ub97c \uae30\ubcf8\uac12\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\uba87\uba87 \uba54\uc11c\ub4dc\ub294 \uc0ac\uc6a9 \ubc29\ubc95 \ub610\ub294 \uae30\ub2a5\uc774 \ud2b9\ubcc4\ud558\uae30\uc5d0 \uc544\ub798\uc5d0\uc11c \ub354 \uc790\uc138\ud788 \ub2e4\ub8f9\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"iitemextensiononitemusefirst",children:(0,s.jsx)(n.code,{children:"IItemExtension#onItemUseFirst"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"InteractionResult#sidedSuccess"}),"\uc640 ",(0,s.jsx)(n.code,{children:"InteractionResult.CONSUME"}),"\uc740 \uc5ec\uae30\uc120 \uc544\ubb34 \ud6a8\uacfc\ub3c4 \uc5c6\uc73c\uba70, \uc624\uc9c1 ",(0,s.jsx)(n.code,{children:"InteractionResult.SUCCESS"}),", ",(0,s.jsx)(n.code,{children:"InteractionResult.FAIL"}),", \ub610\ub294 ",(0,s.jsx)(n.code,{children:"InteractionResult.PASS"}),"\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"itemuseon",children:(0,s.jsx)(n.code,{children:"Item#useOn"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc791\uc5c5\uc744 \uc131\uacf5\uc73c\ub85c \ud45c\uae30\ud558\uace0 \uc2f6\uc9c0\ub9cc \ud314\uc740 \uac00\ub9cc\ud788 \ub450\uace0 \uc2f6\ub2e4\uba74, \ub610\ub294 ",(0,s.jsx)(n.code,{children:"ITEM_USED"})," \ud1b5\uacc4\uc5d0 \uac12\uc744 \uae30\ub85d\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,s.jsx)(n.code,{children:"InteractionResult.CONSUME_PARTIAL"}),"\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."]}),"\n",(0,s.jsx)(n.h2,{id:"itemuse",children:(0,s.jsx)(n.code,{children:"Item#use"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc774 \uba54\uc11c\ub4dc\ub294 \uc720\uc77c\ud558\uac8c ",(0,s.jsx)(n.code,{children:"InteractionResultHolder<ItemStack>"}),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"InteractionResultHolder<ItemStack>"}),"\uc5d0 \uc800\uc7a5\ub41c ",(0,s.jsx)(n.code,{children:"ItemStack"}),"\uc740 \uc544\uc774\ud15c \uc0c1\ud638\uc791\uc6a9\uc744 \uc2dc\uc791\ud55c \uc544\uc774\ud15c\uc744 \ub300\uccb4\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Item#use"}),"\uc758 \uae30\ubcf8 \uad6c\ud604\uc740 \uc544\uc774\ud15c\uc774 \uc74c\uc2dd\uc774\uace0, \ud50c\ub808\uc774\uc5b4\uac00 \uc12d\ucde8 \uac00\ub2a5\ud560 \uacbd\uc6b0 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#consume"}),"\uc744, \uc544\uc774\ud15c\uc774 \uc74c\uc2dd\uc774\ub098 \ud50c\ub808\uc774\uc5b4\uac00 \uc12d\ucde8\ud560 \uc218 \uc5c6\uc744 \uacbd\uc6b0 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#fail"}),"\uc744, \uc544\uc774\ud15c\uc774 \uc74c\uc2dd\uc774 \uc544\ub2d0 \uacbd\uc6b0 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#pass"}),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc8fc \uc0c1\ud638\uc791\uc6a9 \uc190\uc73c\ub85c \ud30c\uc774\ud504\ub77c\uc778 \ucc98\ub9ac \uc911 \uc5ec\uae30\uc11c ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#fail"}),"\uc744 \ubc18\ud658\ud558\uba74 \ubd80 \uc0c1\ud638\uc791\uc6a9 \uc190 \ucc98\ub9ac\ub97c \ucc28\ub2e8\ud569\ub2c8\ub2e4. \ubd80 \uc0c1\ud638\uc791\uc6a9 \uc190 \ucc98\ub9ac\ub3c4 \uc218\ud589\ud558\ub824\uba74 ",(0,s.jsx)(n.code,{children:"InteractionResultHolder#pass"}),"\ub97c \ub300\uc2e0 \ubc18\ud658\ud558\uc138\uc694."]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,c)=>{c.d(n,{Z:()=>l,a:()=>d});var s=c(7294);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);