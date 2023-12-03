"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[9283],{2106:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var s=r(5893),o=r(1151);const i={},a="ForgeGradle Configurations",t={id:"docs/configuration/index",title:"ForgeGradle Configurations",description:"ForgeGradle has numerous configurations that can change how the development environment is configured. Most configurations are set using the minecraft block; however, some others can be specified within the dependencies block or modify the built jar, such as reobfJar.",source:"@site/neogradle/docs/configuration/index.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ngSidebar",previous:{title:"ForgeGradle 5 -> 6 Migration Primer",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/x_to_6.0"},next:{title:"Advanced Configurations",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/advanced"}},c={},d=[{value:"Enabling Access Transformers",id:"enabling-access-transformers",level:2},{value:"Human-Readable Mappings",id:"human-readable-mappings",level:2},{value:"Parchment",id:"parchment",level:3},{value:"Preparing Run Tasks",id:"preparing-run-tasks",level:2},{value:"Copy IDE Resources",id:"copy-ide-resources",level:3},{value:"Run Configuration Folders",id:"run-configuration-folders",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"forgegradle-configurations",children:"ForgeGradle Configurations"}),"\n",(0,s.jsxs)(n.p,{children:["ForgeGradle has numerous configurations that can change how the development environment is configured. Most configurations are set using the ",(0,s.jsx)(n.code,{children:"minecraft"})," block; however, some others can be specified within the ",(0,s.jsx)(n.code,{children:"dependencies"})," block or modify the built ",(0,s.jsx)(n.code,{children:"jar"}),", such as ",(0,s.jsx)(n.code,{children:"reobfJar"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"enabling-access-transformers",children:"Enabling Access Transformers"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.minecraftforge.net/en/latest/advanced/accesstransformers/",children:"Access Transformers"})," can widen the visibility or modify the ",(0,s.jsx)(n.code,{children:"final"})," flag of Minecraft classes, methods, and fields. To enable access transformers in the production environment, you can set ",(0,s.jsx)(n.code,{children:"accessTransformer"})," to configuration file in question:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gradle",children:"minecraft {\n    // ...\n\n    // Add an access transformer file relative to the project's directory\n    accessTransformer = project.file('src/main/resources/META-INF/accesstransformer.cfg')\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["While the access transformer in the development environment can be read from anywhere the user specifies, in production, the file will only be read from ",(0,s.jsx)(n.code,{children:"META-INF/accesstransformer.cfg"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"human-readable-mappings",children:"Human-Readable Mappings"}),"\n",(0,s.jsxs)(n.p,{children:["Minecraft's source code is obfuscated. As such, all classes, methods, and fields have machine-generated names with no package structures. Function-local variable names, meanwhile, are turned into a snowman (",(0,s.jsx)(n.code,{children:"\u2603"}),") due to how the Local Variable Table is stored. It is difficult to create mods using obfuscated names as reverse engineering them is tedious, may change between versions, and may be invalid in the language itself but not in the bytecode."]}),"\n",(0,s.jsxs)(n.p,{children:["To address the last two issues, Forge fuzzily maps each class, method, field, and parameter to a unique identifier, known as the SRG name, via the ",(0,s.jsx)(n.a,{href:"https://github.com/MinecraftForge/ForgeAutoRenamingTool",children:"ForgeAutoRenamingTool"}),". SRG mappings are used in production when the game is being run by the user client."]}),"\n",(0,s.jsxs)(n.p,{children:["To allow easier development, ForgeGradle allows the user to choose a mapping set to apply on top of SRG mappings, which we will refer to as human-readable mappings. ForgeGradle knows how to convert the mod jar to SRG mappings for use in production via the ",(0,s.jsx)(n.code,{children:"reobf*"})," task."]}),"\n",(0,s.jsxs)(n.p,{children:["The mapping set used can be specified by setting the ",(0,s.jsx)(n.code,{children:"mappings"})," field in the ",(0,s.jsx)(n.code,{children:"minecraft"})," block. The ",(0,s.jsx)(n.code,{children:"mappings"})," field takes in two arguments: ",(0,s.jsx)(n.code,{children:"channel"})," which is the type of the mapping set, and ",(0,s.jsx)(n.code,{children:"version"})," which is the version of the mapping set to apply."]}),"\n",(0,s.jsx)(n.p,{children:"Currently, there are three default mapping sets built into ForgeGradle:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"official"})," - This uses the mapping set provided by Mojang. These mappings do not have parameter names and only exist from 1.14 onward."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stable"})," - This uses a mapping set generated by MCP. These are typically incomplete and no longer exist as of 1.17."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snapshot"})," - This also is a mapping set generated by MCP, similar to a nightly build of a program. These are also typically incomplete and no longer exist as of 1.17."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The class names used in production are from ",(0,s.jsx)(n.code,{children:"stable"})," prior to 1.17 and from ",(0,s.jsx)(n.code,{children:"official"})," from 1.17 onwards."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gradle",children:"mappings {\n    // Sets the mappings to use those from Mojang for Minecraft 1.19.4.\n    mappings channel: 'official', version: '1.19.4'\n\n    // ...\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parchment",children:"Parchment"}),"\n",(0,s.jsxs)(n.p,{children:["Parchment is an official project maintained by ParchmentMC which provides open, community-sourced parameter names and javadocs on top of the ",(0,s.jsx)(n.code,{children:"official"})," mapping set. You can learn how setup and use the parchment mapping set on ",(0,s.jsx)(n.a,{href:"https://parchmentmc.org/docs/getting-started",children:"their website"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"preparing-run-tasks",children:"Preparing Run Tasks"}),"\n",(0,s.jsxs)(n.p,{children:["Run tasks (",(0,s.jsx)(n.code,{children:"run*"}),") have two separate pipelines depending on whether they are executed through ",(0,s.jsx)(n.code,{children:"gradlew"})," or a run configuration. By default, there are two tasks that prepare the workspace for execution:"]}),"\n",(0,s.jsxs)(n.p,{children:["First, there are ",(0,s.jsx)(n.code,{children:"prepare*"})," tasks which are executed before ",(0,s.jsx)(n.code,{children:"run*"})," tasks and ensure that mapping files are prepared for the game. The ",(0,s.jsx)(n.code,{children:"prepare*Compile"})," task is typically only executed as a dependency of ",(0,s.jsx)(n.code,{children:"run*"})," tasks to make sure that the game is compiled before it is run."]}),"\n",(0,s.jsxs)(n.p,{children:["If your IDE is either Eclipse or IntelliJ IDEA, the run configuration can be configured to execute the ",(0,s.jsx)(n.code,{children:"prepare*"})," tasks before starting the game by setting ",(0,s.jsx)(n.code,{children:"enableEclipsePrepareRuns"})," or ",(0,s.jsx)(n.code,{children:"enableIdeaPrepareRuns"}),", respectively, to ",(0,s.jsx)(n.code,{children:"true"}),". This will allow you to invoke custom Gradle tasks before your IDE launches the game."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gradle",children:"minecraft {\n    // ...\n\n    // Enable the 'prepare*' task for run configurations\n    enableEclipsePrepareRuns true\n    enableIdeaPrepareRuns true\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"copy-ide-resources",children:"Copy IDE Resources"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"copyIdeResources"})," property can be used to copy resources configured by the ",(0,s.jsx)(n.code,{children:"processResources"})," task to the IDE's resource output directories. This allows IDE run configurations that do not invoke Gradle (IntelliJ configured to use the IDEA runner or Eclipse) to use buildscript configurable resources. Usually, you need to enable this property when you are replacing values in files like the ",(0,s.jsx)(n.code,{children:"mods.toml"}),".",(0,s.jsx)(n.br,{}),"\n","This only applies to Eclipse and IntelliJ IDEA via the ",(0,s.jsx)(n.code,{children:"copyEclipseResources"})," and ",(0,s.jsx)(n.code,{children:"copyIntellijResources"})," tasks, respectively."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gradle",children:"minecraft {\n    // ...\n\n    // Copies the files from 'processResources' to the IDE's resource output directories\n    copyIdeResources true\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"run-configuration-folders",children:"Run Configuration Folders"}),"\n",(0,s.jsxs)(n.p,{children:["Run configurations can be sorted into folders if the ",(0,s.jsx)(n.code,{children:"generateRunFolders"})," is set to ",(0,s.jsx)(n.code,{children:"true"}),". This reads the ",(0,s.jsx)(n.code,{children:"folderName"})," property set in the specific ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/runs#run-configurations",children:"run configuration"})," to determine the organizational structure."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gradle",children:"minecraft {\n    // ...\n\n    // When true, run configurations will be grouped into folders by their 'folderName'\n    generateRunFolders true\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>a});var s=r(7294);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);