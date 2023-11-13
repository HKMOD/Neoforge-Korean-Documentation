"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2413],{6531:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var s=o(5893),a=o(1151);const i={},r="ForgeGradle Configurations",t={id:"docs/configuration/index",title:"ForgeGradle Configurations",description:"ForgeGradle has numerous configurations that can change how the development environment is configured. Most configurations are set using the minecraft block; however, some others can be specified within the dependencies block or modify the built jar, such as reobfJar.",source:"@site/neogradle_versioned_docs/version-5.x/docs/configuration/index.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/",permalink:"/Neoforge-Korean-Documentation/en/neogradle/5.x/docs/configuration/",draft:!1,unlisted:!1,tags:[],version:"5.x",frontMatter:{},sidebar:"ngSidebar",previous:{title:"ForgeGradle Documentation",permalink:"/Neoforge-Korean-Documentation/en/neogradle/5.x/docs/"},next:{title:"Run Configurations",permalink:"/Neoforge-Korean-Documentation/en/neogradle/5.x/docs/configuration/runs"}},c={},d=[{value:"Enabling Access Transformers",id:"enabling-access-transformers",level:2},{value:"Human-Readable Mappings",id:"human-readable-mappings",level:2},{value:"Parchment",id:"parchment",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"forgegradle-configurations",children:"ForgeGradle Configurations"}),"\n",(0,s.jsxs)(n.p,{children:["ForgeGradle has numerous configurations that can change how the development environment is configured. Most configurations are set using the ",(0,s.jsx)(n.code,{children:"minecraft"})," block; however, some others can be specified within the ",(0,s.jsx)(n.code,{children:"dependencies"})," block or modify the built ",(0,s.jsx)(n.code,{children:"jar"}),", such as ",(0,s.jsx)(n.code,{children:"reobfJar"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"enabling-access-transformers",children:"Enabling Access Transformers"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.minecraftforge.net/en/latest/advanced/accesstransformers/",children:"Access Transformers"})," can widen the visibility or modify the ",(0,s.jsx)(n.code,{children:"final"})," flag of Minecraft classes, methods, and fields. To enable access transformers in the production environment, you can set ",(0,s.jsx)(n.code,{children:"accessTransformer"})," to configuration file in question:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gradle",children:"minecraft {\n    // ...\n\n    // Add an access transformer file relative to the project's directory\n    accessTransformer = project.file('src/main/resources/META-INF/accesstransformer.cfg')\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["While the access transformer in the development environment can be read from anywhere the user specifies, in production, the file will only be read from ",(0,s.jsx)(n.code,{children:"META-INF/accesstransformer.cfg"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"human-readable-mappings",children:"Human-Readable Mappings"}),"\n",(0,s.jsxs)(n.p,{children:["Minecraft's source code is obfuscated. As such, all classes, methods, and fields have machine-generated names with no package structures. Function-local variable names, meanwhile, are turned into a snowman (",(0,s.jsx)(n.code,{children:"\u2603"}),") due to how the Local Variable Table is stored. It is difficult to create mods using obfuscated names as reverse engineering them is tedious, may change between versions, and may be invalid in the language itself but not in the bytecode."]}),"\n",(0,s.jsxs)(n.p,{children:["To address the last two issues, Forge fuzzily maps each class, method, field, and parameter to a unique identifier, known as the SRG name, via the ",(0,s.jsx)(n.a,{href:"https://github.com/MinecraftForge/ForgeAutoRenamingTool",children:"ForgeAutoRenamingTool"}),". SRG mappings are used in production when the game is being run by the user client."]}),"\n",(0,s.jsxs)(n.p,{children:["To allow easier development, ForgeGradle allows the user to choose a mapping set to apply on top of SRG mappings, which we will refer to as human-readable mappings. ForgeGradle knows how to convert the mod jar to SRG mappings for use in production via the ",(0,s.jsx)(n.code,{children:"reobf*"})," task."]}),"\n",(0,s.jsxs)(n.p,{children:["The mapping set used can be specified by setting the ",(0,s.jsx)(n.code,{children:"mappings"})," field in the ",(0,s.jsx)(n.code,{children:"minecraft"})," block. The ",(0,s.jsx)(n.code,{children:"mappings"})," field takes in two arguments: ",(0,s.jsx)(n.code,{children:"channel"})," which is the type of the mapping set, and ",(0,s.jsx)(n.code,{children:"version"})," which is the version of the mapping set to apply."]}),"\n",(0,s.jsx)(n.p,{children:"Currently, there are three default mapping sets built into ForgeGradle:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"official"})," - This uses the mapping set provided by Mojang. These mappings do not have parameter names and only exist from 1.14 onward."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stable"})," - This uses a mapping set generated by MCP. These are typically incomplete and no longer exist as of 1.17."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snapshot"})," - This also is a mapping set generated by MCP, similar to a nightly build of a program. These are also typically incomplete and no longer exist as of 1.17."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The class names used in production are from ",(0,s.jsx)(n.code,{children:"stable"})," prior to 1.17 and from ",(0,s.jsx)(n.code,{children:"official"})," from 1.17 onwards."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gradle",children:"mappings {\n    // Sets the mappings to use those from Mojang for Minecraft 1.19.4.\n    mappings channel: 'official', version: '1.19.4'\n\n    // ...\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parchment",children:"Parchment"}),"\n",(0,s.jsxs)(n.p,{children:["Parchment is an official project maintained by ParchmentMC which provides open, community-sourced parameter names and javadocs on top of the ",(0,s.jsx)(n.code,{children:"official"})," mapping set. You can learn how setup and use the parchment mapping set on ",(0,s.jsx)(n.a,{href:"https://parchmentmc.org/docs/getting-started",children:"their website"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>t,a:()=>r});var s=o(7294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);