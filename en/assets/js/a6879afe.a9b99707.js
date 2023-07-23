"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[3687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=i,g=p["".concat(d,".").concat(c)]||p[c]||u[c]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},o="Getting Started with Forge",l={unversionedId:"gettingstarted/index",id:"gettingstarted/index",title:"Getting Started with Forge",description:"Please note that this documentation may not be up to date considering the recent creation of NeoForged.",source:"@site/docs/gettingstarted/index.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/",permalink:"/Neoforge-Korean-Documentation/en/docs/gettingstarted/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",next:{title:"Mod Files",permalink:"/Neoforge-Korean-Documentation/en/docs/gettingstarted/modfiles"}},d={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"From Zero to Modding",id:"from-zero-to-modding",level:2},{value:"Customizing Your Mod Information",id:"customizing-your-mod-information",level:2},{value:"Recommended <code>build.gradle</code> Customizations",id:"recommended-buildgradle-customizations",level:3},{value:"Mod Id Replacement",id:"mod-id-replacement",level:4},{value:"Group Id",id:"group-id",level:4},{value:"Version",id:"version",level:4},{value:"Additional Configurations",id:"additional-configurations",level:3},{value:"Building and Testing Your Mod",id:"building-and-testing-your-mod",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-forge"},"Getting Started with Forge"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please note that this documentation may not be up to date considering the recent creation of NeoForged."),(0,i.kt)("p",{parentName:"admonition"},"Until NeoForged releases its first version, you should refer to Forge documentation. The Forge documentation for 1.20 has been archived here.")),(0,i.kt)("p",null,"If you have never made a Forge mod before, this section will provide the minimum amount of information needed to setup a Forge development environment. The rest of the documentation is about where to go from here."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An installation of the Java 17 Development Kit (JDK) and 64-bit Java Virtual Machine (JVM). Forge recommends and officially supports ",(0,i.kt)("a",{parentName:"li",href:"https://adoptium.net/temurin/releases?version=17",title:"Eclipse Temurin 17 Prebuilt Binaries"},"Eclipse Temurin"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you are using a 64-bit JVM. One way of checking is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"java -version")," in a terminal. Using a 32-bit JVM will cause some problems when using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.minecraftforge.net/en/fg-5.x"},"ForgeGradle"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Familiarity with an Integrated Development Environment (IDE).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is recommended to use an IDE with Gradle integration.")))),(0,i.kt)("h2",{id:"from-zero-to-modding"},"From Zero to Modding"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the Mod Developer Kit (MDK) from the ",(0,i.kt)("a",{parentName:"li",href:"https://files.minecraftforge.net",title:"Forge Files distribution site"},"Forge file site")," by clicking 'Mdk' followed by the 'Skip' button in the top right after waiting for a period of time. It is recommended to download the latest version of Forge whenever possible."),(0,i.kt)("li",{parentName:"ol"},"Extract the downloaded MDK into an empty directory. This will be your mod's directory, which should now contain some gradle files and a ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," subdirectory containing the example mod.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A number of files can be reused across different mods. These files are:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"gradle")," subdirectory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build.gradle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gradlew")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gradlew.bat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"settings.gradle"))),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," subdirectory does not need to be copied across workspaces; however, you may need to refresh the Gradle project if the java (",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/java"),") and resource (",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources"),") are created later.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Open your selected IDE:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Forge only explicitly supports development on Eclipse and IntelliJ IDEA, but there are additional run configurations for Visual Studio Code. Regardless, any environment, from Apache NetBeans to Vim / Emacs, can be used."),(0,i.kt)("li",{parentName:"ul"},"Eclipse and IntelliJ IDEA's Gradle integration, both installed and enabled by default, will handle the rest of the initial workspace setup on import or open. This includes downloading the necessary packages from Mojang, MinecraftForge, etc. The 'Gradle for Java' plugin is needed for Visual Studio Code to do the same."),(0,i.kt)("li",{parentName:"ul"},"Gradle will need to be invoked to re-evaluate the project for almost all changes to its associated files (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"build.gradle"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.gradle"),", etc.). Some IDEs come with 'Refresh' buttons to do this; however, it can be done through the terminal via ",(0,i.kt)("inlineCode",{parentName:"li"},"gradlew"),"."))),(0,i.kt)("li",{parentName:"ol"},"Generate run configurations for your selected IDE:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Eclipse"),": Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"genEclipseRuns")," task."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IntelliJ IDEA"),": Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"genIntellijRuns"),' task. If a "module not specified" error occurs, set the ',(0,i.kt)("a",{parentName:"li",href:"https://docs.minecraftforge.net/en/fg-5.x/configuration/runs/"},(0,i.kt)("inlineCode",{parentName:"a"},"ideaModule")," property")," to your 'main' module (typically ",(0,i.kt)("inlineCode",{parentName:"li"},"${project.name}.main"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visual Studio Code"),": Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"getVSCodeRuns")," task."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Other IDEs"),": You can run the configurations directly using ",(0,i.kt)("inlineCode",{parentName:"li"},"gradle run*")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"runClient"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"runServer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"runData"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"runGameTestServer"),"). These can also be used with the supported IDEs.")))),(0,i.kt)("h2",{id:"customizing-your-mod-information"},"Customizing Your Mod Information"),(0,i.kt)("p",null,"Edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file to customize how your mod is built (e.g., file name, artifact version, etc.)."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Do ",(0,i.kt)("strong",{parentName:"p"},"not")," edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.gradle")," unless you know what you are doing. The file specifies the repository that ",(0,i.kt)("a",{parentName:"p",href:"https://docs.minecraftforge.net/en/fg-5.x"},"ForgeGradle")," is uploaded to.")),(0,i.kt)("h3",{id:"recommended-buildgradle-customizations"},"Recommended ",(0,i.kt)("inlineCode",{parentName:"h3"},"build.gradle")," Customizations"),(0,i.kt)("h4",{id:"mod-id-replacement"},"Mod Id Replacement"),(0,i.kt)("p",null,"Replace all occurrences of ",(0,i.kt)("inlineCode",{parentName:"p"},"examplemod"),", including ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/gettingstarted/modfiles"},(0,i.kt)("inlineCode",{parentName:"a"},"mods.toml")," and the main mod file")," with the mod id of your mod. This also includes changing the name of the file you build by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"base.archivesName")," (this is typically set to your mod id)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"// In some build.gradle\nbase.archivesName = 'mymod'\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Forge MDK currently uses ",(0,i.kt)("inlineCode",{parentName:"p"},"archivesBaseName")," to set the artifact name instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"base.archivesName"),". We recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"base.archivesName")," instead as ",(0,i.kt)("inlineCode",{parentName:"p"},"archivesBaseName")," is deprecated for removal in Gradle 9, which a future version of ForgeGradle will support."),(0,i.kt)("p",{parentName:"admonition"},"You can still use ",(0,i.kt)("inlineCode",{parentName:"p"},"archivesBaseName")," by setting the following:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"// In some build.gradle\nbase.archivesName = 'mymod'\n"))),(0,i.kt)("h4",{id:"group-id"},"Group Id"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"group")," property should be set to your ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/gettingstarted/structuring#packaging"},"top-level package"),", which should either be a domain you own or your email address:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Top-Level Package"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Domain"),(0,i.kt)("td",{parentName:"tr",align:"center"},"example.com"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"com.example"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Subdomain"),(0,i.kt)("td",{parentName:"tr",align:"center"},"example.github.io"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"io.github.example"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Email"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"mailto:example@gmail.com"},"example@gmail.com")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"com.gmail.example"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"// In some build.gradle\ngroup = 'com.example'\n")),(0,i.kt)("p",null,"The packages within your java source (",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/java"),") should also now conform to this structure, with an inner package representing the mod id:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"com\n- example (top-level package specified in group property)\n  - mymod (the mod id)\n    - MyMod.java (renamed ExampleMod.java)\n")),(0,i.kt)("h4",{id:"version"},"Version"),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," property to the current version of your mod. We recommend using a ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/gettingstarted/versioning"},"variation of Maven versioning"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"// In some build.gradle\nversion = '1.19.4-1.0.0.0'\n")),(0,i.kt)("h3",{id:"additional-configurations"},"Additional Configurations"),(0,i.kt)("p",null,"Additional configurations can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.minecraftforge.net/en/fg-5.x"},"ForgeGradle")," docs."),(0,i.kt)("h2",{id:"building-and-testing-your-mod"},"Building and Testing Your Mod"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To build your mod, run ",(0,i.kt)("inlineCode",{parentName:"li"},"gradlew build"),". This will output a file in ",(0,i.kt)("inlineCode",{parentName:"li"},"build/libs")," with the name ",(0,i.kt)("inlineCode",{parentName:"li"},"[archivesBaseName]-[version].jar"),", by default. This file can be placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"mods")," folder of a Forge-enabled Minecraft setup or distributed."),(0,i.kt)("li",{parentName:"ol"},"To run your mod in a test environment, you can either use the generated run configurations or use the associated tasks (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"gradlew runClient"),"). This will launch Minecraft from the run directory (default 'run') along with any source sets specified. The default MDK includes the ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," source set, so any code written in ",(0,i.kt)("inlineCode",{parentName:"li"},"src/main/java")," will be applied."),(0,i.kt)("li",{parentName:"ol"},"If you are running a dedicated server, whether through the run configuration or ",(0,i.kt)("inlineCode",{parentName:"li"},"gradlew runServer"),", the server will initially shut down immediately. You will need to accept the Minecraft EULA by editing the ",(0,i.kt)("inlineCode",{parentName:"li"},"eula.txt")," file in the run directory. Once accepted, the server will load, which can then be accessed via a direct connect to ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You should always test your mod in a dedicated server environment. This includes ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/sides#writing-one-sided-mods"},"client-only mods")," as they should not do anything when loaded on the server.")))}u.isMDXComponent=!0}}]);