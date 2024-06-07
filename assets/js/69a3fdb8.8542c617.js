"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[140],{4827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(5893),a=t(1151);const s={},o="Parchment",i={id:"docs/parchment",title:"Parchment",description:"[Parchment] is a community-sourced set of mappings of parameter names and javadocs that augment the official names released by Mojang. By using parchment, you can get parameter names for most Minecraft methods, instead of the indescriptive p_ names.",source:"@site/neogradle/docs/parchment.md",sourceDirName:"docs",slug:"/docs/parchment",permalink:"/Neoforge-Korean-Documentation/neogradle/docs/parchment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ngSidebar",previous:{title:"Jar-in-Jar",permalink:"/Neoforge-Korean-Documentation/neogradle/docs/dependencies/jarinjar"}},c={},d=[{value:"Configuring parchment",id:"configuring-parchment",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"parchment",children:"Parchment"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://parchmentmc.org/",children:"Parchment"})," is a community-sourced set of mappings of ",(0,r.jsx)(n.strong,{children:"parameter names"})," and ",(0,r.jsx)(n.strong,{children:"javadocs"})," that augment the official names released by Mojang. By using parchment, you can get parameter names for most Minecraft methods, instead of the indescriptive ",(0,r.jsx)(n.code,{children:"p_"})," names."]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-parchment",children:"Configuring parchment"}),"\n",(0,r.jsxs)(n.p,{children:["The most basic configuration is using the following properties in ",(0,r.jsx)(n.code,{children:"gradle.properties"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"# The Minecraft version the Parchment version is for\nneogradle.subsystems.parchment.minecraftVersion=1.20.2\n# The version of the Parchment mappings\nneogradle.subsystems.parchment.mappingsVersion=2023.12.10\n"})}),"\n",(0,r.jsx)(n.p,{children:"The subsystem also has a Gradle DSL and supports more parameters, explained in the following Gradle snippet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gradle",children:'subsystems {\n    parchment {\n        // The Minecraft version for which the Parchment mappings were created.\n        // This does not necessarily need to match the Minecraft version your mod targets\n        // Defaults to the value of Gradle property neogradle.subsystems.parchment.minecraftVersion\n        minecraftVersion = "1.20.2"\n        \n        // The version of Parchment mappings to apply.\n        // See https://parchmentmc.org/docs/getting-started for a list.\n        // Defaults to the value of Gradle property neogradle.subsystems.parchment.mappingsVersion\n        mappingsVersion = "2023.12.10"\n        \n        // Overrides the full Maven coordinate of the Parchment artifact to use\n        // This is computed from the minecraftVersion and mappingsVersion properties by default.\n        // If you set this property explicitly, minecraftVersion and mappingsVersion will be ignored.\n        // The built-in default value can also be overriden using the Gradle property neogradle.subsystems.parchment.parchmentArtifact\n        // parchmentArtifact = "org.parchmentmc.data:parchment-$minecraftVersion:$mappingsVersion:checked@zip"\n        \n        // Overrides the full Maven coordinate of the tool used to apply the Parchment mappings\n        // See https://github.com/neoforged/JavaSourceTransformer\n        // The built-in default value can also be overriden using the Gradle property neogradle.subsystems.parchment.toolArtifact\n        // toolArtifact = "net.neoforged.jst:jst-cli-bundle:1.0.30"\n        \n        // Set this to false if you don\'t want the https://maven.parchmentmc.org/ repository to be added automatically when\n        // applying Parchment mappings is enabled\n        // The built-in default value can also be overriden using the Gradle property neogradle.subsystems.parchment.addRepository\n        // addRepository = true\n        \n        // Can be used to explicitly disable this subsystem. By default, it will be enabled automatically as soon\n        // as parchmentArtifact or minecraftVersion and mappingsVersion are set.\n        // The built-in default value can also be overriden using the Gradle property neogradle.subsystems.parchment.enabled\n        // enabled = true\n    }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can find the latest Parchment versions on their ",(0,r.jsx)(n.a,{href:"https://parchmentmc.org/docs/getting-started",children:"documentation"}),"."]})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);