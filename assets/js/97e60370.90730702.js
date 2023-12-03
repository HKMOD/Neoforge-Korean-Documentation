"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[6702],{5691:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=i(5893),o=i(1151);const c={},s="\ud0a4 \ub9e4\ud551",d={id:"misc/keymappings",title:"\ud0a4 \ub9e4\ud551",description:"\ud0a4 \ub9e4\ud551(\ub610\ub294 \ud0a4 \ubc14\uc778\ub529)\uc740 \uc785\ub825\uc5d0 \ub530\ub77c \ud2b9\uc815 \ub3d9\uc791\uc744 \uc218\ud589\ud558\ub294 \uac83\uc744 \ub73b\ud569\ub2c8\ub2e4. \uac01 \ub3d9\uc791\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc785\ub825\uc744 \ucc98\ub9ac\ud560 \ub54c \uc218\ud589\ub418\uba70 \uc870\uc791 \uba54\ub274\uc5d0\uc11c \uc544\ubb34 \ud0a4\uc5d0\ub098 \ud560\ub2f9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/misc/keymappings.md",sourceDirName:"misc",slug:"/misc/keymappings",permalink:"/Neoforge-Korean-Documentation/docs/misc/keymappings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\uac8c\uc784 \ud14c\uc2a4\ud2b8",permalink:"/Neoforge-Korean-Documentation/docs/misc/gametest"},next:{title:"\ud3ec\uc9c0 \uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8 \uc2dc\uc2a4\ud15c",permalink:"/Neoforge-Korean-Documentation/docs/misc/updatechecker"}},r={},a=[{value:"\ub4f1\ub85d\ud558\uae30 <code>KeyMapping</code>",id:"\ub4f1\ub85d\ud558\uae30-keymapping",level:2},{value:"<code>KeyMapping</code> \ub9cc\ub4e4\uae30",id:"keymapping-\ub9cc\ub4e4\uae30",level:2},{value:"\uae30\ubcf8 \uc785\ub825\ud0a4",id:"\uae30\ubcf8-\uc785\ub825\ud0a4",level:3},{value:"<code>IKeyConflictContext</code>",id:"ikeyconflictcontext",level:3},{value:"<code>KeyModifier</code>",id:"keymodifier",level:3},{value:"Checking a <code>KeyMapping</code>",id:"checking-a-keymapping",level:2},{value:"Within the Game",id:"within-the-game",level:3},{value:"Inside a GUI",id:"inside-a-gui",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\ud0a4-\ub9e4\ud551",children:"\ud0a4 \ub9e4\ud551"}),"\n",(0,t.jsxs)(n.p,{children:["\ud0a4 \ub9e4\ud551(\ub610\ub294 \ud0a4 \ubc14\uc778\ub529)\uc740 \uc785\ub825\uc5d0 \ub530\ub77c \ud2b9\uc815 \ub3d9\uc791\uc744 \uc218\ud589\ud558\ub294 \uac83\uc744 \ub73b\ud569\ub2c8\ub2e4. \uac01 \ub3d9\uc791\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc785\ub825\uc744 \ucc98\ub9ac\ud560 \ub54c \uc218\ud589\ub418\uba70 ",(0,t.jsx)(n.a,{href:"https://minecraft.wiki/w/Options#Controls",children:"\uc870\uc791 \uba54\ub274"}),"\uc5d0\uc11c \uc544\ubb34 \ud0a4\uc5d0\ub098 \ud560\ub2f9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.h2,{id:"\ub4f1\ub85d\ud558\uae30-keymapping",children:["\ub4f1\ub85d\ud558\uae30 ",(0,t.jsx)(n.code,{children:"KeyMapping"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"KeyMapping"}),"\uc740 \ubb3c\ub9ac \ud074\ub77c\uc774\uc5b8\ud2b8 ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/events#mod-event-bus",children:(0,t.jsx)(n.strong,{children:"\ubaa8\ub4dc \uc774\ubca4\ud2b8 \ubc84\uc2a4"})}),"\uc5d0 ",(0,t.jsx)(n.code,{children:"RegisterKeyMappingsEvent"})," \ubc29\uc1a1\uc2dc ",(0,t.jsx)(n.code,{children:"#register"}),"\ub97c \ud638\ucd9c\ud574 \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// \ubb3c\ub9ac \ud074\ub77c\uc774\uc5b8\ud2b8 \uc804\uc6a9 \ud074\ub798\uc2a4\ub77c \uac00\uc815\n\n// \ud0a4 \ub9e4\ud551\uc740 \ud544\uc694\ud560 \ub54c \uae4c\uc9c0 \ucd08\uae30\ud654\uac00 \uc9c0\uc5f0\ub428\npublic static final Lazy<KeyMapping> EXAMPLE_MAPPING = Lazy.of(() -> /*...*/);\n\n// \uc544\ub798 \uc774\ubca4\ud2b8\ub294 \ubb3c\ub9ac \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ubaa8\ub4dc \uc774\ubca4\ud2b8 \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub428\n@SubscribeEvent\npublic void registerBindings(RegisterKeyMappingsEvent event) {\n  event.register(EXAMPLE_MAPPING.get());\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"keymapping-\ub9cc\ub4e4\uae30",children:[(0,t.jsx)(n.code,{children:"KeyMapping"})," \ub9cc\ub4e4\uae30"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"KeyMapping"}),"\uc758 \uc0dd\uc131\uc790\ub294 \ud0a4 \ub9e4\ud551\uc758 \uc774\ub984\uc758 ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/internationalization#translatablecontents",children:"\ubc88\uc5ed \ud0a4"}),", \uae30\ubcf8 \uc785\ub825 \ud0a4, \uadf8\ub9ac\uace0 ",(0,t.jsx)(n.a,{href:"https://minecraft.wiki/w/Options#Controls",children:"\uc124\uc815"}),"\uc5d0\uc11c \ud0a4 \ub9e4\ud551\uc744 \ubd84\ub958\ud560 \uce74\ud14c\uace0\ub9ac \uc774\ub984\uc758 ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/internationalization#translatablecontents",children:"\ubc88\uc5ed \ud0a4"}),"\ub97c \uc778\uc790\ub85c \ubc1b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\uae30\ubcf8 \uce74\ud14c\uace0\ub9ac \uc774\uc678\uc758 \uce74\ud14c\uace0\ub9ac ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/internationalization#translatablecontents",children:"\ubc88\uc5ed \ud0a4"}),"\ub97c \uc0ac\uc6a9\ud574 \uc0c8 \uce74\ud14c\uace0\ub9ac\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ubc88\uc5ed \ud0a4\ub294 \ubaa8\ub4dc \uc544\uc774\ub514\ub97c \ud3ec\ud568\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4(\uc608: ",(0,t.jsx)(n.code,{children:"key.categories.examplemod.examplecategory"}),")."]})}),"\n",(0,t.jsx)(n.h3,{id:"\uae30\ubcf8-\uc785\ub825\ud0a4",children:"\uae30\ubcf8 \uc785\ub825\ud0a4"}),"\n",(0,t.jsxs)(n.p,{children:["\ud0a4 \ub9e4\ud551\uc740 \uae30\ubcf8 \uc785\ub825 \ud0a4\ub97c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc785\ub825 \ud0a4\ub294 ",(0,t.jsx)(n.code,{children:"InputConstants$Key"}),"\ub85c \ud45c\ud604\ub418\uace0, \uc785\ub825 \uae30\uae30\uc758 \uc885\ub958\ub97c \uc2dd\ubcc4\ud558\ub294 ",(0,t.jsx)(n.code,{children:"InputConstants$Type"}),"\uacfc \uc785\ub825 \ucf54\ub4dc\ub97c \ub300\ud45c\ud558\ub294 \uc815\uc218\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4.\n\ubc14\ub2d0\ub77c \ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub294 \uc138 \uc885\ub958\uc758 \uc785\ub825 \uae30\uae30\ub97c \uc9c0\uc6d0\ud558\ub294\ub370: ",(0,t.jsx)(n.code,{children:"GLFW"}),"\ub97c \ud1b5\ud574 \ud0a4\ubcf4\ub4dc \ud1a0\ud070\uc744 \uc804\ub2ec \ubc1b\ub294 ",(0,t.jsx)(n.code,{children:"KEYSYM"}),", \ud50c\ub7ab\ud3fc \uc804\uc6a9 \uc2a4\uce94 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 ",(0,t.jsx)(n.code,{children:"SCANCODE"}),", \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub9c8\uc6b0\uc2a4\ub97c \ub300\ud45c\ud558\ub294 ",(0,t.jsx)(n.code,{children:"MOUSE"})," \uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GLFW"})," \ud0a4\ubcf4\ub4dc \ud1a0\ud070\uc740 \ud2b9\uc815 \ud50c\ub7ab\ud3fc\uc5d0 \uc885\uc18d\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 ",(0,t.jsx)(n.code,{children:"SCANCODE"}),"\ub300\uc2e0 ",(0,t.jsx)(n.code,{children:"KEYSYM"}),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uac15\ub825\ud788 \uad8c\uc7a5\ub4dc\ub9bd\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,t.jsx)(n.a,{href:"https://www.glfw.org/docs/3.3/input_guide.html#input_key",children:"GLFW \ubb38\uc11c"}),"\uc5d0\uc11c \ucc3e\uc544\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,t.jsxs)(n.p,{children:["\uc785\ub825 \ucf54\ub4dc\ub294 \ubb34\uc2a8 \uc785\ub825\uc774\ub0d0\uc5d0 \ub530\ub77c \ub2e4\ub978 \uac83\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"KEYSYM"}),"\uc758 ",(0,t.jsx)(n.code,{children:"GLFW"})," \ud0a4\ubcf4\ub4dc \ud1a0\ud070\uc740 ",(0,t.jsx)(n.code,{children:"GLFW_KEY_*"})," \uc811\ubbf8\uc0ac\uac00 \ubd99\uc73c\ub098 ",(0,t.jsx)(n.code,{children:"MOUSE"})," \ucf54\ub4dc\ub4e4\uc740 ",(0,t.jsx)(n.code,{children:"GLFW_MOUSE_*"}),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'new KeyMapping(\n  "key.examplemod.example1", // \ud0a4 \uc774\ub984 \ubc88\uc5ed\uc744 \uc704\ud55c \ud0a4\n  InputConstants.Type.KEYSYM, // \uc785\ub825 \uae30\uae30 \uc885\ub958\n  GLFW.GLFW_KEY_P, // \uae30\ubcf8 \uc785\ub825 \ud0a4\n  "key.categories.misc" // \uc774 \ud0a4 \ub9e4\ud551\uc740 \uae30\ud0c0 \uce74\ud14c\uace0\ub9ac\uc5d0 \ub4e4\uc5b4\uac10\n)\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\ub9cc\uc57d \uae30\ubcf8 \uc785\ub825 \ud0a4\ub97c \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\ub824\uba74 ",(0,t.jsx)(n.code,{children:"InputConstants#UNKNOWN"}),"\uc744 \ub300\uc2e0 \uc0ac\uc6a9\ud558\uc138\uc694. \uae30\ubcf8 \uc0dd\uc131\uc790\ub294 \uc785\ub825 \ucf54\ub4dc\ub97c ",(0,t.jsx)(n.code,{children:"InputConstants.UNKNOWN.getValue()"}),"\ub85c \uc81c\uacf5\ud574\uc57c \ud558\ub098 \ud3ec\uc9c0\uc5d0\uc11c \ucd94\uac00\ud55c \uc0dd\uc131\uc790\ub294 \ubc14\ub85c \uc804\ub2ec\ud574\ub3c4 \ub429\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(n.h3,{id:"ikeyconflictcontext",children:(0,t.jsx)(n.code,{children:"IKeyConflictContext"})}),"\n",(0,t.jsxs)(n.p,{children:["\ubaa8\ub4e0 \ud0a4 \ub9e4\ud551\uc774 \uc5b8\uc81c\ub098 \uc4f0\uc774\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. \uba87\uba87 \ub9e4\ud551\uc740 GUI\uc5d0\uc11c\ub9cc \uc4f0\uc774\uae30\ub3c4 \ud558\uace0, \uc5b4\ub5a4 \uac83\uc740 \uc778 \uac8c\uc784\uc5d0\uc11c\ub9cc \uc4f0\uc785\ub2c8\ub2e4. \ub9e4\ud551\uc774 \uc0ac\uc6a9\ub418\ub294 \uc0c1\ud669\uc758 \ucc28\uc774\uac00 \uc788\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \uc11c\ub85c \uacb9\uce58\ub294 \uac83\uc744 \ub9c9\uae30 \uc704\ud574, \ub9e4\ud551\uc758 \ub9e5\ub77d\uc744 \uc815\uc758\ud558\ub294 ",(0,t.jsx)(n.code,{children:"IKeyConflictContext"}),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uac01 \ub9e5\ub77d\uc740 \ub450 \uac1c\uc758 \uba54\uc18c\ub4dc\ub97c \uc815\uc758\ud569\ub2c8\ub2e4: \ud0a4 \ub9e4\ud551\uc774 \ud604\uc7ac \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \ubc18\ud658\ud558\ub294 ",(0,t.jsx)(n.code,{children:"#isActive"}),", \uadf8\ub9ac\uace0 \ub2e4\ub978 ",(0,t.jsx)(n.code,{children:"IKeyConflictContext"}),"\uc640 \ucda9\ub3cc\ud558\ub294\uc9c0\ub97c \ubc18\ud658\ud558\ub294 ",(0,t.jsx)(n.code,{children:"#conflicts"})," \uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud604\uc7ac \ud3ec\uc9c0\ub294 \uc138 \uac1c\uc758 \ub9e5\ub77d\uc744 ",(0,t.jsx)(n.code,{children:"KeyConflictContext"}),"\uc5d0 \uc815\uc758\ud569\ub2c8\ub2e4: \ud0a4 \ub9e4\ud551\uc774 \uc5b8\uc81c\ub098 \ud65c\uc131\ud654 \ub418\ub294 ",(0,t.jsx)(n.code,{children:"UNIVERSAL"}),", ",(0,t.jsx)(n.code,{children:"Screen"}),"\uc774 \uc5f4\ub824 \uc788\uc5b4\uc57c\ub9cc \uc791\ub3d9\ud558\ub294 ",(0,t.jsx)(n.code,{children:"GUI"}),", \ub9c8\uc9c0\ub9c9\uc73c\ub85c ",(0,t.jsx)(n.code,{children:"Screen"}),"\uc774 \uc5c6\uc744 \ub54c\ub9cc \uc791\ub3d9\ud558\ub294 ",(0,t.jsx)(n.code,{children:"IN_GAME"}),"\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc0c8 \ub9e5\ub77d\uc740 ",(0,t.jsx)(n.code,{children:"IKeyConflictContext"}),"\ub97c \uad6c\ud604\ud574 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'new KeyMapping(\n  "key.examplemod.example2",\n  KeyConflictContext.GUI, // GUI\uac00 \uc5f4\ub824 \uc788\uc744 \ub54c\ub9cc \ub9e4\ud551 \ud65c\uc131\ud654\n  InputConstants.Type.MOUSE, // \ub9c8\uc6b0\uc2a4\ub85c \ubd80\ud130 \uc785\ub825 \ubc1b\uc74c\n  GLFW.GLFW_MOUSE_BUTTON_LEFT, // \uc67c\ucabd \ud074\ub9ad\uc744 \uc785\ub825 \ubc1b\uc74c\n  "key.categories.examplemod.examplecategory" // \ub9e4\ud551\uc740 \uc0c8\ub85c\uc6b4 example \uce74\ud14c\uace0\ub9ac\uc5d0 \ubd84\ub958\ud568\n)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"keymodifier",children:(0,t.jsx)(n.code,{children:"KeyModifier"})}),"\n",(0,t.jsxs)(n.p,{children:["Modders may not want mappings to have the same behavior if a modifier key is held at the same (e.g. ",(0,t.jsx)(n.code,{children:"G"})," vs ",(0,t.jsx)(n.code,{children:"CTRL + G"}),"). To remedy this, Forge adds an additional parameter to the constructor to take in a ",(0,t.jsx)(n.code,{children:"KeyModifier"})," which can apply control (",(0,t.jsx)(n.code,{children:"KeyModifier#CONTROL"}),"), shift (",(0,t.jsx)(n.code,{children:"KeyModifier#SHIFT"}),"), or alt (",(0,t.jsx)(n.code,{children:"KeyModifier#ALT"}),") to any input. ",(0,t.jsx)(n.code,{children:"KeyModifier#NONE"})," is the default and will apply no modifier."]}),"\n",(0,t.jsxs)(n.p,{children:["A modifier can be added in the ",(0,t.jsx)(n.a,{href:"https://minecraft.wiki/w/Options#Controls",children:"controls option menu"})," by holding down the modifier key and the associated input."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'new KeyMapping(\n  "key.examplemod.example3",\n  KeyConflictContext.UNIVERSAL,\n  KeyModifier.SHIFT, // Default mapping requires shift to be held down\n  InputConstants.Type.KEYSYM, // Default mapping is on the keyboard\n  GLFW.GLFW_KEY_G, // Default key is G\n  "key.categories.misc"\n)\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"checking-a-keymapping",children:["Checking a ",(0,t.jsx)(n.code,{children:"KeyMapping"})]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"KeyMapping"})," can be checked to see whether it has been clicked. Depending on when, the mapping can be used in a conditional to apply the associated logic."]}),"\n",(0,t.jsx)(n.h3,{id:"within-the-game",children:"Within the Game"}),"\n",(0,t.jsxs)(n.p,{children:["Within the game, a mapping should be checked by listening to ",(0,t.jsx)(n.code,{children:"ClientTickEvent"})," on the ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/events#creating-an-event-handler",children:(0,t.jsx)(n.strong,{children:"Forge event bus"})})," and checking ",(0,t.jsx)(n.code,{children:"KeyMapping#consumeClick"})," within a while loop. ",(0,t.jsx)(n.code,{children:"#consumeClick"})," will return ",(0,t.jsx)(n.code,{children:"true"})," only the number of times the input was performed and not already previously handled, so it won't infinitely stall the game."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// Event is on the Forge event bus only on the physical client\npublic void onClientTick(ClientTickEvent event) {\n  if (event.phase == TickEvent.Phase.END) { // Only call code once as the tick event is called twice every tick\n    while (EXAMPLE_MAPPING.get().consumeClick()) {\n      // Execute logic to perform on click here\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Do not use the ",(0,t.jsx)(n.code,{children:"InputEvent"}),"s as an alternative to ",(0,t.jsx)(n.code,{children:"ClientTickEvent"}),". There are separate events for keyboard and mouse inputs only, so they wouldn't handle any additional inputs."]})}),"\n",(0,t.jsx)(n.h3,{id:"inside-a-gui",children:"Inside a GUI"}),"\n",(0,t.jsxs)(n.p,{children:["Within a GUI, a mapping can be checked within one of the ",(0,t.jsx)(n.code,{children:"GuiEventListener"})," methods using ",(0,t.jsx)(n.code,{children:"IForgeKeyMapping#isActiveAndMatches"}),". The most common methods which can be checked are ",(0,t.jsx)(n.code,{children:"#keyPressed"})," and ",(0,t.jsx)(n.code,{children:"#mouseClicked"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#keyPressed"})," takes in the ",(0,t.jsx)(n.code,{children:"GLFW"})," key token, the platform-specific scan code, and a bitfield of the held down modifiers. A key can be checked against a mapping by creating the input using ",(0,t.jsx)(n.code,{children:"InputConstants#getKey"}),". The modifiers are already checked within the mapping methods itself."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// In some Screen subclass\n@Override\npublic boolean keyPressed(int key, int scancode, int mods) {\n  if (EXAMPLE_MAPPING.get().isActiveAndMatches(InputConstants.getKey(key, scancode))) {\n    // Execute logic to perform on key press here\n    return true;\n  }\n  return super.keyPressed(x, y, button);\n} \n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you do not own the screen which you are trying to check a ",(0,t.jsx)(n.strong,{children:"key"})," for, you can listen to the ",(0,t.jsx)(n.code,{children:"Pre"})," or ",(0,t.jsx)(n.code,{children:"Post"})," events of ",(0,t.jsx)(n.code,{children:"ScreenEvent$KeyPressed"})," on the ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/events#creating-an-event-handler",children:(0,t.jsx)(n.strong,{children:"Forge event bus"})})," instead."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#mouseClicked"})," takes in the mouse's x position, y position, and the button clicked. A mouse button can be checked against a mapping by creating the input using ",(0,t.jsx)(n.code,{children:"InputConstants$Type#getOrCreate"})," with the ",(0,t.jsx)(n.code,{children:"MOUSE"})," input."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// In some Screen subclass\n@Override\npublic boolean mouseClicked(double x, double y, int button) {\n  if (EXAMPLE_MAPPING.get().isActiveAndMatches(InputConstants.TYPE.MOUSE.getOrCreate(button))) {\n    // Execute logic to perform on mouse click here\n    return true;\n  }\n  return super.mouseClicked(x, y, button);\n} \n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you do not own the screen which you are trying to check a ",(0,t.jsx)(n.strong,{children:"mouse"})," for, you can listen to the ",(0,t.jsx)(n.code,{children:"Pre"})," or ",(0,t.jsx)(n.code,{children:"Post"})," events of ",(0,t.jsx)(n.code,{children:"ScreenEvent$MouseButtonPressed"})," on the ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/events#creating-an-event-handler",children:(0,t.jsx)(n.strong,{children:"Forge event bus"})})," instead."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>s});var t=i(7294);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);