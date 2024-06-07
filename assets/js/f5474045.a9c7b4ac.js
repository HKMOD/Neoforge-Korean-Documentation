"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1957],{9265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(5893),r=t(1151);const i={},o="Forge Update Checker",d={id:"misc/updatechecker",title:"Forge Update Checker",description:'\ub124\uc624 \ud3ec\uc9c0\ub294 \uac00\ubcbc\uc6b4 \uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc5c5\ub370\uc774\ud2b8\uac00 \uac00\ub2a5\ud55c \ubaa8\ub4dc\uac00 \uc788\ub2e4\uba74, \uba54\uc778 \uba54\ub274\uc758 "\ubaa8\ub4dc" \ubc84\ud2bc\uacfc \ubaa8\ub4dc \ubaa9\ub85d\uc5d0 \uc544\uc774\ucf58\uc774 \ud45c\uc2dc\ub418\uace0, \ubcc0\uacbd \uc0ac\ud56d\ub3c4 \uadf8 \uc606\uc5d0 \uac19\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc5c5\ub370\uc774\ud2b8\ub97c \uc790\ub3d9\uc73c\ub85c \uc124\uce58\ud558\uc9c4 \uc54a\uc2b5\ub2c8\ub2e4.',source:"@site/docs/misc/updatechecker.md",sourceDirName:"misc",slug:"/misc/updatechecker",permalink:"/Neoforge-Korean-Documentation/docs/misc/updatechecker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Resource Locations",permalink:"/Neoforge-Korean-Documentation/docs/misc/resourcelocation"},next:{title:"\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0",permalink:"/Neoforge-Korean-Documentation/docs/networking/"}},c={},l=[{value:"\uae30\ucd08 \uc124\uc815",id:"\uae30\ucd08-\uc124\uc815",level:2},{value:"\uc5c5\ub370\uc774\ud2b8 JSON \ud615\uc2dd",id:"\uc5c5\ub370\uc774\ud2b8-json-\ud615\uc2dd",level:2},{value:"\uc5c5\ub370\uc774\ud2b8 \ud655\uc778 \uacb0\uacfc \uc774\uc6a9\ud558\uae30",id:"\uc5c5\ub370\uc774\ud2b8-\ud655\uc778-\uacb0\uacfc-\uc774\uc6a9\ud558\uae30",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"forge-update-checker",children:"Forge Update Checker"}),"\n",(0,s.jsxs)(n.p,{children:['\ub124\uc624 \ud3ec\uc9c0\ub294 \uac00\ubcbc\uc6b4 \uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc5c5\ub370\uc774\ud2b8\uac00 \uac00\ub2a5\ud55c \ubaa8\ub4dc\uac00 \uc788\ub2e4\uba74, \uba54\uc778 \uba54\ub274\uc758 "\ubaa8\ub4dc" \ubc84\ud2bc\uacfc \ubaa8\ub4dc \ubaa9\ub85d\uc5d0 \uc544\uc774\ucf58\uc774 \ud45c\uc2dc\ub418\uace0, \ubcc0\uacbd \uc0ac\ud56d\ub3c4 \uadf8 \uc606\uc5d0 \uac19\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc5c5\ub370\uc774\ud2b8\ub97c ',(0,s.jsx)(n.em,{children:"\uc790\ub3d9\uc73c\ub85c \uc124\uce58\ud558\uc9c4 \uc54a\uc2b5\ub2c8\ub2e4"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\uae30\ucd08-\uc124\uc815",children:"\uae30\ucd08 \uc124\uc815"}),"\n",(0,s.jsxs)(n.p,{children:["\uc77c\ub2e8, ",(0,s.jsx)(n.code,{children:"mods.toml"}),"\uc758 ",(0,s.jsx)(n.code,{children:"updateJSONURL"}),"\uc744 \ubcc0\uacbd\ud558\uc154\uc57c \ud569\ub2c8\ub2e4. \uc774 \uac12\uc740 \uc5c5\ub370\uc774\ud2b8 \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\ub294 JSON \ud30c\uc77c\uc744 \uc81c\uacf5\ud558\ub294 \uc62c\ubc14\ub978 URL\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc744 \uc5b8\uc81c\ub4e0\uc9c0 \uc81c\uacf5\ud560 \uc218\ub9cc \uc788\ub2e4\uba74, \uc9c1\uc811 \uad6c\ucd95\ud558\uc2e0 \uc6f9 \uc11c\ubc84, Github \ub4f1, \uc544\ubb34 \ub370\ub098 \uc62c\ub9ac\uc154\ub3c4 \uc0c1\uad00\uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\uc5c5\ub370\uc774\ud2b8-json-\ud615\uc2dd",children:"\uc5c5\ub370\uc774\ud2b8 JSON \ud615\uc2dd"}),"\n",(0,s.jsx)(n.p,{children:"\uc5c5\ub370\uc774\ud2b8 JSON\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uac04\ub2e8\ud55c \ud615\uc2dd\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json5",children:'{\n  "homepage": "<\ubaa8\ub4dc \ud648\ud398\uc774\uc9c0>",\n  "<mcversion>": {\n    "<modversion>": "<\ubcc0\uacbd \ub0b4\uc5ed>", \n    // List all versions of your mod for the given Minecraft version, along with their changelogs\n    // ...\n  },\n  "promos": {\n    "<mcversion>-latest": "<modversion>",\n    // \ud574\ub2f9 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8 \ubc84\uc804\uc5d0\uc11c \uac00\uc7a5 \ucd5c\uc2e0 \ubaa8\ub4dc \ubc84\uc804\uc744 \uc120\uc5b8\ud569\ub2c8\ub2e4.\n    "<mcversion>-recommended": "<modversion>",\n    // \ud574\ub2f9 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8 \ubc84\uc804\uc5d0\uc11c \uc548\uc815\ub41c \ubaa8\ub4dc \ubc84\uc804\uc744 \uc120\uc5b8\ud569\ub2c8\ub2e4.\n    // ...\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This is fairly self-explanatory, but some notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The link under ",(0,s.jsx)(n.code,{children:"homepage"})," is the link the user will be shown when the mod is outdated."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['NeoForge uses an internal algorithm to determine whether one version string of your mod is "newer" than another. Most versioning schemes should be compatible, but see the ',(0,s.jsx)(n.code,{children:"ComparableVersion"})," class if you are concerned about whether your scheme is supported. Adherence to ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/gettingstarted/versioning",children:"Maven versioning"})," is highly recommended."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The changelog string can be separated into lines using ",(0,s.jsx)(n.code,{children:"\\n"}),". Some prefer to include a abbreviated changelog, then link to an external site that provides a full listing of changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Manually inputting data can be chore. You can configure your ",(0,s.jsx)(n.code,{children:"build.gradle"})," to automatically update this file when building a release as Groovy has native JSON parsing support. Doing this is left as an exercise to the reader."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Some examples can be found here for ",(0,s.jsx)(n.a,{href:"https://cadiboo.github.io/projects/nocubes/update.json",children:"nocubes"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/Corail31/tombstone_lite/blob/master/update.json",children:"Corail Tombstone"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/Aeltumn/Chisels-and-Bits-2/blob/master/update.json",children:"Chisels & Bits 2"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\uc5c5\ub370\uc774\ud2b8-\ud655\uc778-\uacb0\uacfc-\uc774\uc6a9\ud558\uae30",children:"\uc5c5\ub370\uc774\ud2b8 \ud655\uc778 \uacb0\uacfc \uc774\uc6a9\ud558\uae30"}),"\n",(0,s.jsxs)(n.p,{children:["You can retrieve the results of the NeoForge Update Checker using ",(0,s.jsx)(n.code,{children:"VersionChecker#getResult(IModInfo)"}),". You can obtain your ",(0,s.jsx)(n.code,{children:"IModInfo"})," via ",(0,s.jsx)(n.code,{children:"ModContainer#getModInfo"}),", where ",(0,s.jsx)(n.code,{children:"ModContainer"})," can be added as a parameter to your mod constructor. You can obtain any other mod's ",(0,s.jsx)(n.code,{children:"ModContainer"})," using ",(0,s.jsx)(n.code,{children:"ModList.get().getModContainerById(<modId>)"}),". The returned object has a method ",(0,s.jsx)(n.code,{children:"#status"})," which indicates the status of the version check."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Status"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.code,{children:"FAILED"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\ubc84\uc804 \uc5c5\ub370\uc774\ud2b8 \uc2dc\uc2a4\ud15c\uc774 \uc81c\uacf5\ub41c URL\uc5d0 \uc811\uc18d\ud560 \uc218 \uc5c6\uc74c."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.code,{children:"UP_TO_DATE"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\ud604\uc7ac \ubc84\uc804\uc774 \ucd5c\uc2e0 \uc548\uc815 \ubc84\uc804\uacfc \ub3d9\uc77c."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.code,{children:"AHEAD"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\ud604\uc7ac \ubc84\uc804\uc774 \ucd5c\uc2e0 \uc548\uc815 \ubc84\uc804\ubcf4\ub2e4 \ub192\uc74c."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.code,{children:"OUTDATED"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\ucd5c\uc2e0 \uc548\uc815 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\uac00 \uac00\ub2a5\ud568."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.code,{children:"BETA_OUTDATED"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\ucd5c\uc2e0 \ubca0\ud0c0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\uac00 \uac00\ub2a5\ud568."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.code,{children:"BETA"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\ud604\uc7ac \ubc84\uc804\uc774 \ucd5c\uc2e0 \ubca0\ud0c0 \ubc84\uc804 \uc774\uc0c1\uc784."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.code,{children:"PENDING"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\uc544\uc9c1 \uc5c5\ub370\uc774\ud2b8 \ud655\uc778\uc774 \ub05d\ub098\uc9c0 \uc54a\uc558\uc74c."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VersionChecker#getResult"}),"\ub294 \uc5c5\ub370\uc774\ud2b8 \uac00\ub2a5 \ubc84\uc804 \ubc0f \ubcc0\uacbd \ub0b4\uc5ed \ub610\ud55c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var s=t(7294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);