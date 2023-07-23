"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[9283],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},i="ForgeGradle Configurations",s={unversionedId:"docs/configuration/index",id:"docs/configuration/index",title:"ForgeGradle Configurations",description:"ForgeGradle has numerous configurations that can change how the development environment is configured. Most configurations are set using the minecraft block; however, some others can be specified within the dependencies block or modify the built jar, such as reobfJar.",source:"@site/neogradle/docs/configuration/index.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ngSidebar",previous:{title:"ForgeGradle 5 -> 6 Migration Primer",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/x_to_6.0"},next:{title:"Advanced Configurations",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/advanced"}},l={},p=[{value:"Enabling Access Transformers",id:"enabling-access-transformers",level:2},{value:"Human-Readable Mappings",id:"human-readable-mappings",level:2},{value:"Parchment",id:"parchment",level:3},{value:"Preparing Run Tasks",id:"preparing-run-tasks",level:2},{value:"Copy IDE Resources",id:"copy-ide-resources",level:3},{value:"Run Configuration Folders",id:"run-configuration-folders",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forgegradle-configurations"},"ForgeGradle Configurations"),(0,a.kt)("p",null,"ForgeGradle has numerous configurations that can change how the development environment is configured. Most configurations are set using the ",(0,a.kt)("inlineCode",{parentName:"p"},"minecraft")," block; however, some others can be specified within the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," block or modify the built ",(0,a.kt)("inlineCode",{parentName:"p"},"jar"),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"reobfJar"),"."),(0,a.kt)("h2",{id:"enabling-access-transformers"},"Enabling Access Transformers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.minecraftforge.net/en/latest/advanced/accesstransformers/"},"Access Transformers")," can widen the visibility or modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"final")," flag of Minecraft classes, methods, and fields. To enable access transformers in the production environment, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"accessTransformer")," to configuration file in question:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"minecraft {\n    // ...\n\n    // Add an access transformer file relative to the project's directory\n    accessTransformer = project.file('src/main/resources/META-INF/accesstransformer.cfg')\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"While the access transformer in the development environment can be read from anywhere the user specifies, in production, the file will only be read from ",(0,a.kt)("inlineCode",{parentName:"p"},"META-INF/accesstransformer.cfg"),".")),(0,a.kt)("h2",{id:"human-readable-mappings"},"Human-Readable Mappings"),(0,a.kt)("p",null,"Minecraft's source code is obfuscated. As such, all classes, methods, and fields have machine-generated names with no package structures. Function-local variable names, meanwhile, are turned into a snowman (",(0,a.kt)("inlineCode",{parentName:"p"},"\u2603"),") due to how the Local Variable Table is stored. It is difficult to create mods using obfuscated names as reverse engineering them is tedious, may change between versions, and may be invalid in the language itself but not in the bytecode."),(0,a.kt)("p",null,"To address the last two issues, Forge fuzzily maps each class, method, field, and parameter to a unique identifier, known as the SRG name, via the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MinecraftForge/ForgeAutoRenamingTool"},"ForgeAutoRenamingTool"),". SRG mappings are used in production when the game is being run by the user client."),(0,a.kt)("p",null,"To allow easier development, ForgeGradle allows the user to choose a mapping set to apply on top of SRG mappings, which we will refer to as human-readable mappings. ForgeGradle knows how to convert the mod jar to SRG mappings for use in production via the ",(0,a.kt)("inlineCode",{parentName:"p"},"reobf*")," task."),(0,a.kt)("p",null,"The mapping set used can be specified by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"mappings")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"minecraft")," block. The ",(0,a.kt)("inlineCode",{parentName:"p"},"mappings")," field takes in two arguments: ",(0,a.kt)("inlineCode",{parentName:"p"},"channel")," which is the type of the mapping set, and ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," which is the version of the mapping set to apply."),(0,a.kt)("p",null,"Currently, there are three default mapping sets built into ForgeGradle:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"official")," - This uses the mapping set provided by Mojang. These mappings do not have parameter names and only exist from 1.14 onward."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stable")," - This uses a mapping set generated by MCP. These are typically incomplete and no longer exist as of 1.17."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"snapshot")," - This also is a mapping set generated by MCP, similar to a nightly build of a program. These are also typically incomplete and no longer exist as of 1.17.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The class names used in production are from ",(0,a.kt)("inlineCode",{parentName:"p"},"stable")," prior to 1.17 and from ",(0,a.kt)("inlineCode",{parentName:"p"},"official")," from 1.17 onwards.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"mappings {\n    // Sets the mappings to use those from Mojang for Minecraft 1.19.4.\n    mappings channel: 'official', version: '1.19.4'\n\n    // ...\n}\n")),(0,a.kt)("h3",{id:"parchment"},"Parchment"),(0,a.kt)("p",null,"Parchment is an official project maintained by ParchmentMC which provides open, community-sourced parameter names and javadocs on top of the ",(0,a.kt)("inlineCode",{parentName:"p"},"official")," mapping set. You can learn how setup and use the parchment mapping set on ",(0,a.kt)("a",{parentName:"p",href:"https://parchmentmc.org/docs/getting-started"},"their website"),"."),(0,a.kt)("h2",{id:"preparing-run-tasks"},"Preparing Run Tasks"),(0,a.kt)("p",null,"Run tasks (",(0,a.kt)("inlineCode",{parentName:"p"},"run*"),") have two separate pipelines depending on whether they are executed through ",(0,a.kt)("inlineCode",{parentName:"p"},"gradlew")," or a run configuration. By default, there are two tasks that prepare the workspace for execution:"),(0,a.kt)("p",null,"First, there are ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare*")," tasks which are executed before ",(0,a.kt)("inlineCode",{parentName:"p"},"run*")," tasks and ensure that mapping files are prepared for the game. The ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare*Compile")," task is typically only executed as a dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"run*")," tasks to make sure that the game is compiled before it is run."),(0,a.kt)("p",null,"If your IDE is either Eclipse or IntelliJ IDEA, the run configuration can be configured to execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare*")," tasks before starting the game by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"enableEclipsePrepareRuns")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"enableIdeaPrepareRuns"),", respectively, to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". This will allow you to invoke custom Gradle tasks before your IDE launches the game."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"minecraft {\n    // ...\n\n    // Enable the 'prepare*' task for run configurations\n    enableEclipsePrepareRuns true\n    enableIdeaPrepareRuns true\n}\n")),(0,a.kt)("h3",{id:"copy-ide-resources"},"Copy IDE Resources"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"copyIdeResources")," property can be used to copy resources configured by the ",(0,a.kt)("inlineCode",{parentName:"p"},"processResources")," task to the IDE's resource output directories. This allows IDE run configurations that do not invoke Gradle (IntelliJ configured to use the IDEA runner or Eclipse) to use buildscript configurable resources. Usually, you need to enable this property when you are replacing values in files like the ",(0,a.kt)("inlineCode",{parentName:"p"},"mods.toml"),".",(0,a.kt)("br",{parentName:"p"}),"\n","This only applies to Eclipse and IntelliJ IDEA via the ",(0,a.kt)("inlineCode",{parentName:"p"},"copyEclipseResources")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"copyIntellijResources")," tasks, respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"minecraft {\n    // ...\n\n    // Copies the files from 'processResources' to the IDE's resource output directories\n    copyIdeResources true\n}\n")),(0,a.kt)("h3",{id:"run-configuration-folders"},"Run Configuration Folders"),(0,a.kt)("p",null,"Run configurations can be sorted into folders if the ",(0,a.kt)("inlineCode",{parentName:"p"},"generateRunFolders")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". This reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"folderName")," property set in the specific ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/runs#run-configurations"},"run configuration")," to determine the organizational structure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"minecraft {\n    // ...\n\n    // When true, run configurations will be grouped into folders by their 'folderName'\n    generateRunFolders true\n}\n")))}d.isMDXComponent=!0}}]);