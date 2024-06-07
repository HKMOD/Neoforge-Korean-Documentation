"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[6049],{5301:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=r(5893),c=r(1151),l=r(4866),a=r(5162);const i={},t="Access Transformer",o={id:"advanced/accesstransformers",title:"Access Transformer",description:"Access Transformer(\uc904\uc5ec\uc11c AT)\ub294 \ud074\ub798\uc2a4, \uba54\uc11c\ub4dc, \ud544\ub4dc\uc758 \uac00\uc2dc\uc131 \ubc0f \ubd88\ubcc0 \uc5ec\ubd80\ub97c \ubcc0\uacbd\ud558\ub294 \uc2dc\uc2a4\ud15c \uc785\ub2c8\ub2e4. \ubaa8\ub4dc\uac00 \uc811\uadfc \ubd88\uac00\ub2a5\ud55c \uba64\ubc84\ub97c \uc0ac\uc6a9 \ubc0f \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud574 \uc90d\ub2c8\ub2e4.",source:"@site/versioned_docs/version-1.20.4/advanced/accesstransformers.mdx",sourceDirName:"advanced",slug:"/advanced/accesstransformers",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/advanced/accesstransformers",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Versioning",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/gettingstarted/versioning"},next:{title:"Block Entities",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/blockentities/"}},d={},u=[{value:"AT \ucd94\uac00\ud558\uae30",id:"at-\ucd94\uac00\ud558\uae30",level:2},{value:"AT \uc124\uc815 \ud30c\uc77c \ubb38\ubc95",id:"at-\uc124\uc815-\ud30c\uc77c-\ubb38\ubc95",level:2},{value:"\uc8fc\uc11d",id:"\uc8fc\uc11d",level:3},{value:"\uc811\uadfc \uc218\uc815\uc790",id:"\uc811\uadfc-\uc218\uc815\uc790",level:3},{value:"\ubcc0\ud658 \ud0c0\uae43",id:"\ubcc0\ud658-\ud0c0\uae43",level:3},{value:"\ud074\ub798\uc2a4",id:"\ud074\ub798\uc2a4",level:4},{value:"\ud544\ub4dc",id:"\ud544\ub4dc",level:4},{value:"\uba54\uc11c\ub4dc",id:"\uba54\uc11c\ub4dc",level:4},{value:"\uba54\uc11c\ub4dc \ud0c0\uc785",id:"\uba54\uc11c\ub4dc-\ud0c0\uc785",level:5},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"access-transformer",children:"Access Transformer"}),"\n",(0,s.jsx)(n.p,{children:"Access Transformer(\uc904\uc5ec\uc11c AT)\ub294 \ud074\ub798\uc2a4, \uba54\uc11c\ub4dc, \ud544\ub4dc\uc758 \uac00\uc2dc\uc131 \ubc0f \ubd88\ubcc0 \uc5ec\ubd80\ub97c \ubcc0\uacbd\ud558\ub294 \uc2dc\uc2a4\ud15c \uc785\ub2c8\ub2e4. \ubaa8\ub4dc\uac00 \uc811\uadfc \ubd88\uac00\ub2a5\ud55c \uba64\ubc84\ub97c \uc0ac\uc6a9 \ubc0f \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud574 \uc90d\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\ubb34\uc5c7\uc758 \uac00\uc2dc\uc131\uc744 \ubcc0\uacbd\ud560\uc9c0 \uc9c0\uc815\ud558\ub294 AT \uc124\uc815 \ud30c\uc77c \uaddc\uaca9\uc740 ",(0,s.jsx)(n.a,{href:"https://github.com/NeoForged/AccessTransformers/blob/main/FMLAT.md",children:"\uc774\uacf3"}),"\uc5d0 \ub098\uc640\uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"at-\ucd94\uac00\ud558\uae30",children:"AT \ucd94\uac00\ud558\uae30"}),"\n",(0,s.jsxs)(l.Z,{defaultValue:"latest",children:[(0,s.jsxs)(a.Z,{value:"latest",label:"\ucd5c\uc2e0",children:[(0,s.jsxs)(n.p,{children:["AT\ub294 ",(0,s.jsx)(n.code,{children:"build.gradle"}),"\uacfc ",(0,s.jsx)(n.code,{children:"mods.toml"})," \ub458 \ub2e4\uc5d0 \uc120\uc5b8\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:"// build.gradle\n// \uc5ec\uae30\uc11c \ub9e4\ud551 \ucc44\ub110\uacfc \ubc84\uc804\ub3c4 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nminecraft {\naccessTransformers {\nfile('src/main/resources/META-INF/accesstransformer.cfg')\n}\n}\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'# mods.toml\uc5d0\uc11c:\n[[accessTransformers]]\nfile="META-INF/accesstransformer.cfg"\n'})}),(0,s.jsxs)(n.p,{children:["\ub124\uc624 \ud3ec\uc9c0\ub294 \uae30\ubcf8\uc801\uc73c\ub85c AT \uc124\uc815 \ud30c\uc77c\uc744 ",(0,s.jsx)(n.code,{children:"META-INF/accesstransformer.cfg"}),"\uc5d0\uc11c \ucc3e\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \ub2e4\ub978 \uacf3\uc5d0 \uc124\uc815 \ud30c\uc77c\uc744 \uc800\uc7a5\ud558\uc168\ub2e4\uba74 \uc704\uc640 \uac19\uc774 ",(0,s.jsx)(n.code,{children:"mods.toml"}),"\uc5d0\uc11c \uc704\uce58\ub97c \uc9c0\uc815\ud574 \uc8fc\uc138\uc694:"]}),(0,s.jsx)(n.p,{children:"AT \uc124\uc815 \ud30c\uc77c\uc744 \uc5ec\ub7ec\uac1c \uc9c0\uc815\ud558\uba74 \uc21c\uc11c\ub300\ub85c \uc801\uc6a9\ub429\ub2c8\ub2e4. \ubaa8\ub4dc\uac00 \uac70\ub300\ud574 \uc5ec\ub7ec \ud328\ud0a4\uc9c0\ub85c \ub098\ub20c \ub54c \uc6a9\uc774\ud569\ub2c8\ub2e4."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:"// build.gradle\uc5d0\uc11c:\nminecraft {\naccessTransformers {\nfile('src/main/resources/accesstransformer_main.cfg')\nfile('src/additions/resources/accesstransformer_additions.cfg')\n}\n}\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'# mods.toml\uc5d0\uc11c:\n[[accessTransformers]]\nfile="accesstransformer_main.cfg"\n\n[[accessTransformers]]\nfile="accesstransformer_additions.cfg"\n'})}),(0,s.jsx)(n.p,{children:"AT \uc124\uc815 \ud30c\uc77c\uc744 \uc218\uc815\ud558\uac70\ub098 \ucd94\uac00\ud55c \uc774\ud6c4, Gradle \ud504\ub85c\uc81d\ud2b8\ub97c \ub2e4\uc2dc \ubd88\ub7ec\uc640\uc57c\ub9cc \uc801\uc6a9\ub429\ub2c8\ub2e4."})]}),(0,s.jsxs)(a.Z,{value:"1.20.1",label:"1.20.1-47.1 \ubc0f \uc774\uc804 \ubc84\uc804",children:[(0,s.jsxs)(n.p,{children:["AT\ub97c \ud65c\uc131\ud654 \ud558\ub824\uba74 \uc544\ub798\uc640 \uac19\uc774 ",(0,s.jsx)(n.code,{children:"build.gradle"}),"\uc5d0 \uc124\uc815 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uc138\uc694:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:"// \uc5ec\uae30\uc11c \ub9e4\ud551 \ucc44\ub110\uacfc \ubc84\uc804\ub3c4 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nminecraft {\naccessTransformer = file('src/main/resources/META-INF/accesstransformer.cfg')\n}\n"})}),(0,s.jsxs)(n.p,{children:["\uac1c\ubc1c \ud658\uacbd\uc5d0\uc11c\ub294 AT \uc124\uc815 \ud30c\uc77c\uc774 \uc544\ubb34 \uacf3\uc5d0\ub098 \uc788\uc5b4\ub3c4 \ub418\uc9c0\ub9cc, \uc2e4\uc81c \uac8c\uc784\uc5d0\uc11c\ub294 ",(0,s.jsx)(n.code,{children:"META-INF/accesstransformer.cfg"})," \uacbd\ub85c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."]}),(0,s.jsx)(n.p,{children:"AT \uc124\uc815 \ud30c\uc77c\uc744 \uc218\uc815\ud558\uac70\ub098 \ucd94\uac00\ud55c \uc774\ud6c4, Gradle \ud504\ub85c\uc81d\ud2b8\ub97c \ub2e4\uc2dc \ubd88\ub7ec\uc640\uc57c\ub9cc \uc801\uc6a9\ub429\ub2c8\ub2e4."})]})]}),"\n",(0,s.jsx)(n.h2,{id:"at-\uc124\uc815-\ud30c\uc77c-\ubb38\ubc95",children:"AT \uc124\uc815 \ud30c\uc77c \ubb38\ubc95"}),"\n",(0,s.jsx)(n.h3,{id:"\uc8fc\uc11d",children:"\uc8fc\uc11d"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"#"}),"\ub85c \uc2dc\uc791\ud558\ub294 \uc904\uc740 \uc8fc\uc11d\uc73c\ub85c \ucc98\ub9ac\ub418\uba70 \ubb34\uc2dc\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"\uc811\uadfc-\uc218\uc815\uc790",children:"\uc811\uadfc \uc218\uc815\uc790"}),"\n",(0,s.jsx)(n.p,{children:"\uc811\uadfc \uc218\uc815\uc790(Access Modifier)\ub294 \uba64\ubc84\uc758 \uc0c8\ub85c\uc6b4 \uac00\uc2dc\uc131\uc744 \uc9c0\uc815\ud558\ub294 \ud0a4\uc6cc\ub4dc\ub97c \ub73b\ud569\ub2c8\ub2e4. Java\uc640 \ub611\uac19\uc774 \uc544\ub798 \ub124 \uac1c\uc758 \ud0a4\uc6cc\ub4dc\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"public"})," - \ud328\ud0a4\uc9c0 \uc548, \ub610\ub294 \ubc16\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud074\ub798\uc2a4\uc5d0\uc11c \uc811\uadfc\ud560 \uc218 \uc788\uc74c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"protected"})," - \ud328\ud0a4\uc9c0 \uc548\uc5d0 \uc788\ub294 \ud074\ub798\uc2a4, \ub610\ub294 \uc790\uc2dd \ud074\ub798\uc2a4\uc5d0\uc11c\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc74c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"default"})," - \ud328\ud0a4\uc9c0 \ub0b4\ubd80\uc5d0 \uc788\ub294 \ud074\ub798\uc2a4\uc5d0\uc11c\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc74c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"private"})," - \ud074\ub798\uc2a4 \ub0b4\ubd80\uc5d0\uc11c\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc74c"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\uc704 \ud0a4\uc6cc\ub4dc\uc5d0 ",(0,s.jsx)(n.code,{children:"+f"})," \ub610\ub294 ",(0,s.jsx)(n.code,{children:"-f"}),"\ub97c \ucd94\uac00\ud558\uc5ec \uac00\uc2dc\uc131 \ubfd0 \uc544\ub2c8\ub77c ",(0,s.jsx)(n.code,{children:"final"})," \ud0a4\uc6cc\ub4dc\ub3c4 \ucd94\uac00 \ubc0f \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\uc874\uc5d0\ub294 \ubd88\uac00\ub2a5\ud558\ub358 \uc790\uc2dd \ud074\ub798\uc2a4 \uc0dd\uc131\uc774\ub098, \uba54\uc11c\ub4dc \uc7ac\uc815\uc758, \ub610\ub294 \ud544\ub4dc \uac12 \ubcc0\uacbd \ub4f1\uc744 \uac00\ub2a5\ud558\uac8c \ud574 \uc90d\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.p,{children:"\uba54\uc11c\ub4dc\uc758 \uac00\uc2dc\uc131\uc744 \ubcc0\uacbd\ud560 \ub54c, \uc9c0\uc815\ub41c \uba54\uc11c\ub4dc\ub9cc \ubcc0\uacbd\ub429\ub2c8\ub2e4; \ub9cc\uc57d \uc790\uc2dd \ud074\ub798\uc2a4\uc5d0\uc11c \ud574\ub2f9 \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758\ud55c\ub2e4\uba74 \ub611\uac19\uc740 \uac00\uc2dc\uc131 \uc218\uc815\uc774 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc544, \uc790\uc2dd \uba54\uc11c\ub4dc\uac00 \ubd80\ubaa8 \uba54\uc11c\ub4dc\ubcf4\ub2e4 \ub354 \ub0ae\uc740 \uac00\uc2dc\uc131\uc744 \uac00\uc838 JVM \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\ub2c8, \uac00\uc2dc\uc131\uc744 \ubcc0\uacbd\ud558\uace0\uc790 \ud558\ub294 \uba54\uc11c\ub4dc\uac00 \ub2e4\ub978 \uacf3\uc5d0\uc11c \uc7ac\uc815\uc758\ub418\uba74 \uc548 \ub429\ub2c8\ub2e4!"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"private"})," \uba54\uc11c\ub4dc\ub098 ",(0,s.jsx)(n.code,{children:"final"})," \uba54\uc11c\ub4dc(\ub610\ub294 ",(0,s.jsx)(n.code,{children:"final"})," \ud074\ub798\uc2a4\uc5d0 \uc815\uc758\ub41c \uba54\uc11c\ub4dc), \uadf8\ub9ac\uace0 ",(0,s.jsx)(n.code,{children:"static"})," (\uc815\uc801) \uba54\uc11c\ub4dc\ub4e4\uc740 \uc7ac\uc815\uc758\uac00 \ubd88\uac00\ub2a5\ud558\uae30\uc5d0 \uc548\uc804\ud558\uac8c \uac00\uc2dc\uc131\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),"\n",(0,s.jsx)(n.h3,{id:"\ubcc0\ud658-\ud0c0\uae43",children:"\ubcc0\ud658 \ud0c0\uae43"}),"\n",(0,s.jsx)(n.h4,{id:"\ud074\ub798\uc2a4",children:"\ud074\ub798\uc2a4"}),"\n",(0,s.jsx)(n.p,{children:"\ud074\ub798\uc2a4\uc758 \uac00\uc2dc\uc131\uc744 \ubc14\uafbc\ub2e4\uba74:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<\uc811\uadfc \uc218\uc815\uc790> <\uc644\uc804\ud55c \ud074\ub798\uc2a4 \uc774\ub984>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ub0b4\ubd80 \ud074\ub798\uc2a4\ub4e4\uc740, \uc678\ubd80 \ud074\ub798\uc2a4\uc758 \uc804\uccb4 \uc774\ub984\uacfc \ub0b4\ubd80 \ud074\ub798\uc2a4\uc758 \uc774\ub984\uc744 ",(0,s.jsx)(n.code,{children:"$"}),"\ub85c \ubd84\ub9ac\ud558\uc5ec \ud45c\uc2dc\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h4,{id:"\ud544\ub4dc",children:"\ud544\ub4dc"}),"\n",(0,s.jsx)(n.p,{children:"\ud544\ub4dc\uc758 \uac00\uc2dc\uc131\uc744 \ubc14\uafbc\ub2e4\uba74:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<\uc811\uadfc \uc218\uc815\uc790> <\uc644\uc804\ud55c \ud074\ub798\uc2a4 \uc774\ub984> <\ud544\ub4dc \uc774\ub984>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\uba54\uc11c\ub4dc",children:"\uba54\uc11c\ub4dc"}),"\n",(0,s.jsx)(n.p,{children:"\uba54\uc11c\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc774 \uac00\uc2dc\uc131 \ubfd0 \uc544\ub2c8\ub77c \uc778\uc790\ub4e4\uacfc \ubc18\ud658\uac12\uc758 \ud0c0\uc785\uae4c\uc9c0 \ud45c\uc2dc\ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<\uc811\uadfc \uc218\uc815\uc790> <\uc644\uc804\ud55c \ud074\ub798\uc2a4 \uc774\ub984> <\uba54\uc11c\ub4dc \uc774\ub984>(<\uc778\uc790\uc758 \ud0c0\uc785\ub4e4>)<\ubc18\ud658 \ud0c0\uc785>\n"})}),"\n",(0,s.jsx)(n.h5,{id:"\uba54\uc11c\ub4dc-\ud0c0\uc785",children:"\uba54\uc11c\ub4dc \ud0c0\uc785"}),"\n",(0,s.jsxs)(n.p,{children:['\uba54\uc11c\ub4dc\uc758 \uc778\uc790 \ubc0f \ubc18\ud658\uac12\uc758 \ud0c0\uc785\uc740 "descriptor"\ub77c\uace0 \ubd88\ub9ac\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \uc0ac\ud56d\uc740  ',(0,s.jsx)(n.a,{href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.3.2",children:"Oracle \uae30\uc220 \ubb38\uc11c\uc5d0\uc11c \ud655\uc778\ud558\uc138\uc694(Java Virtual Machine Specification, SE 8, sections 4.3.2 and 4.3.3)"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"B"})," - ",(0,s.jsx)(n.code,{children:"byte"}),", \ubd80\ud638\uac00 \uc788\ub294 \ubc14\uc774\ud2b8"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"C"})," - ",(0,s.jsx)(n.code,{children:"char"}),", UTF-16 \uc720\ub2c8\ucf54\ub4dc \ubb38\uc790 \ubc88\ud638"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"D"})," - ",(0,s.jsx)(n.code,{children:"double"}),", \ubc30\uc815\ubc00\ub3c4 \ubd80\ub3d9 \uc18c\uc218\uc810"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F"})," - ",(0,s.jsx)(n.code,{children:"float"}),", \ub2e8\uc815\ubc00\ub3c4 \ubd80\ub3d9 \uc18c\uc218\uc810"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"I"})," - ",(0,s.jsx)(n.code,{children:"integer"}),", 32\ube44\ud2b8 \uc815\uc218"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"J"})," - ",(0,s.jsx)(n.code,{children:"long"}),", 64\ube44\ud2b8 \uc815\uc218"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"S"})," - ",(0,s.jsx)(n.code,{children:"short"}),", \ubd80\ud638\uac00 \uc788\ub294 16\ube44\ud2b8 \uc815\uc218"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Z"})," - ",(0,s.jsx)(n.code,{children:"boolean"}),", ",(0,s.jsx)(n.code,{children:"true"})," \ub610\ub294 ",(0,s.jsx)(n.code,{children:"false"})," \uc778 \uac12"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"["})," - \ubc30\uc5f4\uc758 \ucc28\uc6d0 1\uac1c\ub97c \ud45c\uc2dc\ud568","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc608: ",(0,s.jsx)(n.code,{children:"[[S"})," \ub294 ",(0,s.jsx)(n.code,{children:"short[][]"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L<class name>;"})," - \ucc38\uc870 \ud0c0\uc785, \ubaa8\ub4e0 \ud074\ub798\uc2a4\uac00 \ud574\ub2f9\ub428","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc608: ",(0,s.jsx)(n.code,{children:"Ljava/lang/String;"}),"\ub294 \ucc38\uc870 \ud0c0\uc785 ",(0,s.jsx)(n.code,{children:"java.lang.String"}),"\ub97c \uac00\ub9ac\ud0b4 ",(0,s.jsx)(n.em,{children:"(\ube57\uae08 \ub300\uc2e0 \ub9c8\uce68\ud45c\ub85c \ud328\ud0a4\uc9c0 \uad6c\ubd84)"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"("})," - \uba54\uc11c\ub4dc \ub514\uc2a4\ud06c\ub9bd\ud130, \uba54\uc11c\ub4dc\uc758 \uc778\uc790\ub4e4\uc740 \uad04\ud638 \uc548\uc5d0 \uc801\uc74c, \ubc18\ud658 \ud0c0\uc785\uc740 \uad04\ud638 \ub4a4\uc5d0 \uc801\uc74c","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc608: ",(0,s.jsx)(n.code,{children:"<method>(I)Z"}),"\ub294 ",(0,s.jsx)(n.code,{children:"int"}),"\ub97c \ubc1b\uace0 ",(0,s.jsx)(n.code,{children:"boolean"}),"\uc744 \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"V"})," - \uba54\uc11c\ub4dc \ubc18\ud658 \ud0c0\uc785\uc774 ",(0,s.jsx)(n.code,{children:"void"}),"\uc77c \ub54c \uc0ac\uc6a9","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc608: ",(0,s.jsx)(n.code,{children:"<method>()V"}),"\ub294 \uc778\uc790 \ubc0f \ubc18\ud658 \uac12\uc774 \uc5c6\ub294 \uba54\uc11c\ub4dc"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Crypt \ud074\ub798\uc2a4\uc758 ByteArrayToKeyFunction\uc758 \uac00\uc2dc\uc131\uc744 public\uc73c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.\npublic net.minecraft.util.Crypt$ByteArrayToKeyFunction\n\n# MinecraftServer\uc758 'random' \ud544\ub4dc\ub97c protected\ub85c \ub9cc\ub4e4\uace0 final \ud0a4\uc6cc\ub4dc\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4\nprotected-f net.minecraft.server.MinecraftServer random\n\n# String\uc744 \uc778\uc790\ub85c \ubc1b\uace0 ExecutorService\ub97c \ubc18\ud658\ud558\ub294 'Util#makeExecutor' \uba54\uc11c\ub4dc\ub97c public\uc73c\ub85c \ub9cc\ub4ed\ub2c8\ub2e4\npublic net.minecraft.Util makeExecutor(Ljava/lang/String;)Ljava/util/concurrent/ExecutorService;\n\n# 2\uac1c\uc758 long\uc744 \uc778\uc790\ub85c \ubc1b\uace0 int[]\ub97c \ubc18\ud658\ud558\ub294 'UUIDUtil#leastMostToIntArray' \uba54\uc11c\ub4dc\ub97c public\uc73c\ub85c \ub9cc\ub4ed\ub2c8\ub2e4\npublic net.minecraft.core.UUIDUtil leastMostToIntArray(JJ)[I\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var s=r(6010);const c={tabItem:"tabItem_Ymn6"};var l=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(c.tabItem,a),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>y});var s=r(7294),c=r(6010),l=r(2466),a=r(6550),i=r(469),t=r(1980),o=r(7392),d=r(12);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:c}}=e;return{value:n,label:r,attributes:s,default:c}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const c=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,t._X)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(c.location.search);n.set(l,e),c.replace({...c.location,search:n.toString()})}),[l,c])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:c}=e,l=h(e),[a,t]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[o,u]=j({queryString:r,groupId:c}),[f,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,l]=(0,d.Nk)(r);return[c,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:c}),p=(()=>{const e=o??f;return x({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{p&&t(p)}),[p]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=r(2389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function b(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:i}=e;const t=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),d=e=>{const n=e.currentTarget,r=t.indexOf(n),c=i[r].value;c!==s&&(o(n),a(c))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=t.indexOf(e.currentTarget)+1;n=t[r]??t[0];break}case"ArrowLeft":{const r=t.indexOf(e.currentTarget)-1;n=t[r]??t[t.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>t.push(e),onKeyDown:u,onClick:d,...l,className:(0,c.Z)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:c}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===c));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function T(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,c.Z)("tabs-container",p.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(g,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,v.jsx)(T,{...e,children:u(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var s=r(7294);const c={},l=s.createContext(c);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);