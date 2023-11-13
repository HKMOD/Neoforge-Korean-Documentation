"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7114],{374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(5893),r=t(1151);const i={},a="Run Configurations",s={id:"docs/configuration/runs",title:"Run Configurations",description:"Run configurations define how an instance of the game is going to run. This includes arguments, working directories, task names, etc. Run configurations are defined within the minecraft.runs block. While no runs are configured by default, Forge does provide the configurations client, server, data, or gameTestServer.",source:"@site/neogradle/docs/configuration/runs.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/runs",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/runs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ngSidebar",previous:{title:"Advanced Configurations",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/advanced"},next:{title:"Dependencies",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/dependencies/"}},c={},l=[{value:"Mod Configurations",id:"mod-configurations",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"run-configurations",children:"Run Configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Run configurations define how an instance of the game is going to run. This includes arguments, working directories, task names, etc. Run configurations are defined within the ",(0,o.jsx)(n.code,{children:"minecraft.runs"})," block. While no runs are configured by default, ",(0,o.jsx)(n.a,{href:"https://github.com/MinecraftForge/MinecraftForge/blob/42115d37d6a46856e3dc914b54a1ce6d33b9872a/build.gradle#L374-L430",children:"Forge"})," does provide the configurations ",(0,o.jsx)(n.code,{children:"client"}),", ",(0,o.jsx)(n.code,{children:"server"}),", ",(0,o.jsx)(n.code,{children:"data"}),", or ",(0,o.jsx)(n.code,{children:"gameTestServer"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:"minecraft {\n    // ...\n    runs {\n        // Configure runs here\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Run configurations can be added similar to any ",(0,o.jsx)(n.code,{children:"NamedDomainObjectContainer"})," using closures."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:"// Inside the minecraft block\nruns {\n    // Creates or configures the run configuration named 'client'\n    client {\n        // Configure run\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"The following configurations properties are available:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:"// Inside the runs block\nclient {\n    // The name of the Gradle run tasks,\n    // Defaults to 'runX' where X is the container name\n    taskName 'runThing'\n\n    // Sets the entrypoint of the program to launch\n    // Forge sets userdev main to be 'cpw.mods.bootstraplauncher.BootstrapLauncher'\n    main 'com.example.Main'\n\n    // Sets the working directory of the config\n    // Defaults to './run'\n    workingDirectory 'run'\n\n    // Sets the name of the module for IntelliJ IDEA to configure for its runs\n    // Defaults to '<project_name>.main'\n    ideaModule 'example.main'\n\n    // Sets the name of the folder that the run configuration should be added to\n    // Defaults to the name of the project\n    folderName 'example'\n\n    // Sets whether this should run a Minecraft client\n    // If not specified, checks the following\n    // - Is there an environment property 'thing' that contains 'client'\n    // - Does the configuration name contain 'client'\n    // - Is main set to 'mcp.client.Start'\n    // - Is main set to 'net.minecraft.client.main.Main'\n    client true\n\n    // Set the parent of this configuration to inherit from\n    parent runs.example\n\n    // Sets the children of this configuration\n    children runs.child\n\n    // Merges this configuration and specifies whether to overwrite existing properties\n    merge runs.server, true\n\n    // If not false, will merge the arguments of the parent with this configuration\n    inheritArgs false\n\n    // If not false, will merge the JVM arguments of the parent with this configuration\n    inheritJvmArgs false\n\n    // Adds a sourceset to the classpath\n    // If none is specified, adds sourceSet.main\n    source sourceSets.api\n\n    // Sets an environment property for the run\n    // Value will be interpreted as a file or a string\n    environment 'envKey', 'value'\n\n    // Sets a system property\n    // Value will be interpreted as a file or a string\n    property 'propKey', 'value'\n\n    // Sets an argument to be passed into the application\n    // Can specify multiple with 'args'\n    arg 'hello'\n\n    // Sets a JVM argument\n    // Can specify multiple with 'jvmArgs'\n    jvmArg '-Xmx2G'\n\n    // Sets a token\n    // Currently, the following tokens are being used:\n    // - runtime_classpath\n    // - minecraft_classpath\n    token 'tokenKey', 'value'\n\n    // Sets a token that's lazily initialized\n    // Should usually be used instead of 'token', for example when the token resolves Gradle configurations\n    lazyToken('lazyTokenKey') {\n      'value'\n    }\n\n    // If true, compile all projects instead of for the current task\n    // This is only used by IntelliJ IDEA\n    buildAllProjects false\n}\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["You can see a list of all configured userdev properties within the ",(0,o.jsx)(n.a,{href:"https://github.com/MinecraftForge/MinecraftForge/blob/d4836bc769da003528b6cebc7e677a5aa23a8228/build.gradle#L434-L470",children:"MinecraftForge buildscript"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"mod-configurations",children:"Mod Configurations"}),"\n",(0,o.jsxs)(n.p,{children:["A mod in the current environment can be added using the ",(0,o.jsx)(n.code,{children:"mods"})," block within a Run configuration. Mod blocks are also ",(0,o.jsx)(n.code,{children:"NamedDomainObjectContainer"}),"s."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:"// Inside the runs block\nclient {\n    // ...\n\n    mods {\n        other_mod {\n            // ...\n        }\n\n        // Configures the 'example' mod\n        example {\n            // Add a source set to a mod's sources\n            source sourceSets.main\n\n            // Merges this configuration and specifies whether to overwrite existing properties\n            merge mods.other_mod, true\n        }\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(7294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);