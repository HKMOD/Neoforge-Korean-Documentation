"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7114],{374:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=r(5893),t=r(1151);const i={},s="Run Configurations",a={id:"docs/configuration/runs",title:"Run Configurations",description:"Run configurations define how an instance of the game is going to run. This includes arguments, working directories, task names, etc. Run configurations are defined within the runs block. No runs are configured by default; however, NeoGradle provides the configurations client, server, data and gameTestServer out of the box.",source:"@site/neogradle/docs/configuration/runs.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/runs",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/runs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ngSidebar",previous:{title:"NeoGradle Configurations",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/"},next:{title:"Dependencies",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/dependencies/"}},c={},u=[{value:"Configuring Multiple Runs",id:"configuring-multiple-runs",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"run-configurations",children:"Run Configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Run configurations define how an instance of the game is going to run. This includes arguments, working directories, task names, etc. Run configurations are defined within the ",(0,o.jsx)(n.code,{children:"runs"})," block. No runs are configured by default; however, NeoGradle provides the configurations ",(0,o.jsx)(n.code,{children:"client"}),", ",(0,o.jsx)(n.code,{children:"server"}),", ",(0,o.jsx)(n.code,{children:"data"})," and ",(0,o.jsx)(n.code,{children:"gameTestServer"})," out of the box."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:"runs {\n    // Configure runs here\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Run configurations can be added similar to any ",(0,o.jsx)(n.code,{children:"NamedDomainObjectContainer"})," using closures."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:"runs {\n    // Creates or configures the run configuration named 'client'\n    client {\n        // Configure run\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"The following configurations properties are available:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:"// Inside the runs block\nclient {\n    // Sets the entrypoint of the program to launch\n    // NeoForge sets userdev main to be 'cpw.mods.bootstraplauncher.BootstrapLauncher'\n    main 'com.example.Main'\n\n    // Sets the working directory of the config\n    // Defaults to './run'\n    workingDirectory 'run'\n\n    // Sets whether this is a run of a specific type\n    // Generally, only one of these should be true for a given configuration\n    client true\n    server false\n    dataGenerator false\n    gameTest false\n\n    // Sets an environment variable for the run\n    // Value will be interpreted as a file or a string\n    env 'envKey', 'value'\n\n    // Sets a system property\n    // Value will be interpreted as a file or a string\n    props 'propKey', 'value'\n\n    // Sets an argument to be passed into the application\n    args 'hello'\n\n    // Sets a JVM argument\n    jvmArgs '-Xmx2G'\n\n    // Sets the source this run should pull from\n    modSource project.sourceSets.main\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configuring-multiple-runs",children:"Configuring Multiple Runs"}),"\n",(0,o.jsxs)(n.p,{children:["Configuring multiple runs at once can be done with ",(0,o.jsx)(n.code,{children:"configureEach"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:"runs.configureEach {\n    // All runs should use the main source set to load the mod\n    modSource project.sourceSets.main\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var o=r(7294);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);