"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[6803],{6932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=t(5893),i=t(1151);const s={},o="Getting Started with ForgeGradle",l={id:"docs/gettingstarted/index",title:"Getting Started with ForgeGradle",description:"If you have never used ForgeGradle before, here is the minimum amount of information needed to get a development environment setup.",source:"@site/neogradle_versioned_docs/version-5.x/docs/gettingstarted/index.md",sourceDirName:"docs/gettingstarted",slug:"/docs/gettingstarted/",permalink:"/Neoforge-Korean-Documentation/neogradle/5.x/docs/gettingstarted/",draft:!1,unlisted:!1,tags:[],version:"5.x",frontMatter:{},sidebar:"ngSidebar",previous:{title:"Jar-in-Jar",permalink:"/Neoforge-Korean-Documentation/neogradle/5.x/docs/dependencies/jarinjar"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Setting Up ForgeGradle",id:"setting-up-forgegradle",level:2},{value:"Eclipse",id:"eclipse",level:4},{value:"IntelliJ IDEA",id:"intellij-idea",level:4},{value:"Visual Studio Code",id:"visual-studio-code",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getting-started-with-forgegradle",children:"Getting Started with ForgeGradle"}),"\n",(0,r.jsx)(n.p,{children:"If you have never used ForgeGradle before, here is the minimum amount of information needed to get a development environment setup."}),"\n",(0,r.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"An installation of the Java Development Kit (JDK)"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Minecraft Versions"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Java Development Kit Version"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1.12 - 1.16"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://adoptium.net/temurin/releases/?version=8",children:"JDK 8"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1.17"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://adoptium.net/temurin/releases/?version=16",children:"JDK 16"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1.18 - 1.19"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://adoptium.net/temurin/releases/?version=17",children:"JDK 17"})})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Familiarity with an Integrated Development Environment (IDE)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"It is preferable to use one with some form of Gradle integration"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-forgegradle",children:"Setting Up ForgeGradle"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["First download a copy of the ",(0,r.jsx)(n.a,{href:"https://files.minecraftforge.net/",children:"Modder Development Kit (MDK)"})," from MinecraftForge and extract the zip to an empty directory."]}),"\n",(0,r.jsx)(n.li,{children:"Open the directory you extracted the MDK to within your IDE of choice. If your IDE integrates with Gradle, import it as a Gradle project."}),"\n",(0,r.jsxs)(n.li,{children:["Customize your Gradle buildscript for your mod:","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:"archivesBaseName"})," to the desired mod id. Additionally, replace all occurrences of ",(0,r.jsx)(n.code,{children:"examplemod"})," with the mod id as well."]}),"\n",(0,r.jsxs)(n.li,{children:["Change the ",(0,r.jsx)(n.code,{children:"group"})," to your desired package name. Make sure to follow existing ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html",children:"naming conventions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Change the ",(0,r.jsx)(n.code,{children:"version"})," number to reflect the current version of your mod. It is highly recommended to use ",(0,r.jsx)(n.a,{href:"https://docs.minecraftforge.net/en/latest/gettingstarted/versioning/",children:"Forge's extension on semantic versioning"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Make sure that any changes to the mod id are reflected in the mods.toml and main mod class. See ",(0,r.jsx)(n.a,{href:"https://docs.minecraftforge.net/en/latest/gettingstarted/structuring/",children:"Structuring Your Mod"})," on the Forge docs for more information."]})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Reload or refresh your Gradle project using your IDE. If your IDE does not have Gradle integration, run the following from a shell in your project's directory:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"./gradlew build --refresh-dependencies\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"If your IDE is either Eclipse, IntelliJ IDEA, or Visual Studio Code, you can generate run configurations using one of the following commands, respectively:"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"eclipse",children:"Eclipse"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"./gradlew genEclipseRuns\n"})}),"\n",(0,r.jsx)(n.h4,{id:"intellij-idea",children:"IntelliJ IDEA"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"./gradlew genIntellijRuns\n"})}),"\n",(0,r.jsx)(n.h4,{id:"visual-studio-code",children:"Visual Studio Code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"./gradlew genVSCodeRuns\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can the run the client, server, etc. using one of the generated run configurations."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If your IDE is not listed, you can still run the configurations using ",(0,r.jsx)(n.code,{children:"./gradlew run*"})," (e.g., ",(0,r.jsx)(n.code,{children:"runClient"}),", ",(0,r.jsx)(n.code,{children:"runServer"}),", ",(0,r.jsx)(n.code,{children:"runData"}),"). You can use these commands with the supported IDEs as well."]})}),"\n",(0,r.jsx)(n.p,{children:"Congratulations, now you have a development environment set up!"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);