"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[989],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),p=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||a;return n?t.createElement(m,i(i({ref:r},s),{},{components:n})):t.createElement(m,i({ref:r},s))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4138:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=n(7462),o=(n(7294),n(3905));const a={},i="ForgeGradle 5 -> 6 Migration Primer",l={unversionedId:"docs/x_to_6.0",id:"docs/x_to_6.0",title:"ForgeGradle 5 -> 6 Migration Primer",description:"This is a high level, non-exhaustive overview on how to migrate your buildscript from ForgeGradle 5 to 6.",source:"@site/neogradle/docs/5.x_to_6.0.md",sourceDirName:"docs",slug:"/docs/x_to_6.0",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/x_to_6.0",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"ngSidebar",previous:{title:"NeoGradle Documentation",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/"},next:{title:"ForgeGradle Configurations",permalink:"/Neoforge-Korean-Documentation/en/neogradle/docs/configuration/"}},d={},p=[{value:"Add Foojay Toolchains Plugin",id:"add-foojay-toolchains-plugin",level:2},{value:"Update Gradle to 8.1.1",id:"update-gradle-to-811",level:2},{value:"<code>gradle wrapper</code>",id:"gradle-wrapper",level:3},{value:"gradle-wrapper.properties",id:"gradle-wrapperproperties",level:3},{value:"Update ForgeGradle Plugin Version",id:"update-forgegradle-plugin-version",level:2},{value:"Remove <code>forceExit</code> from Run Configurations",id:"remove-forceexit-from-run-configurations",level:2},{value:"Minor Additions, Changes, Removals",id:"minor-additions-changes-removals",level:3},{value:"Reobfuscated Classpath Inheritance",id:"reobfuscated-classpath-inheritance",level:3},{value:"Eclipse Launcher Groups",id:"eclipse-launcher-groups",level:3},{value:"Removal of <code>resources</code> and <code>classes</code> in ModConfig",id:"removal-of-resources-and-classes-in-modconfig",level:3}],s={toc:p},u="wrapper";function c(e){let{components:r,...a}=e;return(0,o.kt)(u,(0,t.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forgegradle-5---6-migration-primer"},"ForgeGradle 5 -> 6 Migration Primer"),(0,o.kt)("p",null,"This is a high level, non-exhaustive overview on how to migrate your buildscript from ForgeGradle 5 to 6."),(0,o.kt)("h2",{id:"add-foojay-toolchains-plugin"},"Add Foojay Toolchains Plugin"),(0,o.kt)("p",null,"Gradle now uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gradle/foojay-toolchains"},"Foojay Toolchains Plugin")," to manage the Java toolchain. The plugin must be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.gradle[.kts]"),":"),(0,o.kt)("p",null,"With Gradle DSL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},"// In settings.gradle\nplugins {\n    id 'org.gradle.toolchains.foojay-resolver-convention' version '0.5.0'\n}\n")),(0,o.kt)("p",null,"With Kotlin DSL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// In settings.gradle.kts\nplugins {\n    id("org.gradle.toolchains.foojay-resolver-convention") version "0.5.0"\n}\n')),(0,o.kt)("h2",{id:"update-gradle-to-811"},"Update Gradle to 8.1.1"),(0,o.kt)("p",null,"First, you need to update your Gradle Wrapper to use 8.1.1. You can find additional information regarding the migration process from 7 to 8 on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/upgrading_version_7.html"},"Gradle's migration guide"),"."),(0,o.kt)("p",null,"This can be done in one of two ways:"),(0,o.kt)("h3",{id:"gradle-wrapper"},(0,o.kt)("inlineCode",{parentName:"h3"},"gradle wrapper")),(0,o.kt)("p",null,"The preferred option is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle wrapper")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--gradle-version")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside root directory of the gradle project\n./gradlew wrapper --gradle-version=8.1.1\n")),(0,o.kt)("h3",{id:"gradle-wrapperproperties"},"gradle-wrapper.properties"),(0,o.kt)("p",null,"This method is not recommended, and it should only be used if the ",(0,o.kt)("inlineCode",{parentName:"p"},"gradlew wrapper")," command above fails."),(0,o.kt)("p",null,"Update the version in the ",(0,o.kt)("inlineCode",{parentName:"p"},"distributionUrl")," property within ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle/wrapper/gradle-wrapper.properties"),". Afterwards run ",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew wrapper"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"distributionUrl=https\\://services.gradle.org/distributions/gradle-8.1.1-bin.zip\n")),(0,o.kt)("h2",{id:"update-forgegradle-plugin-version"},"Update ForgeGradle Plugin Version"),(0,o.kt)("p",null,"After updating Gradle, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeGradle")," version in your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle[.kts]")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"[6.0,6.2)"),":"),(0,o.kt)("p",null,"With Gradle DSL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},"// In build.gradle\nplugins {\n    id 'net.minecraftforge.gradle' version '[6.0,6.2)'\n}\n")),(0,o.kt)("p",null,"With Kotlin DSL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// In build.gradle.kts\nplugins {\n    id("net.minecraftforge.gradle") version "[6.0,6.2)"\n}\n')),(0,o.kt)("h2",{id:"remove-forceexit-from-run-configurations"},"Remove ",(0,o.kt)("inlineCode",{parentName:"h2"},"forceExit")," from Run Configurations"),(0,o.kt)("p",null,"ForgeGradle has now removed the ",(0,o.kt)("inlineCode",{parentName:"p"},"forceExit")," property in run configurations. Changes to run tasks only apply to the current project and not any subprojects."),(0,o.kt)("h3",{id:"minor-additions-changes-removals"},"Minor Additions, Changes, Removals"),(0,o.kt)("h3",{id:"reobfuscated-classpath-inheritance"},"Reobfuscated Classpath Inheritance"),(0,o.kt)("p",null,"If you were using ",(0,o.kt)("inlineCode",{parentName:"p"},"classpath.from")," within a ",(0,o.kt)("inlineCode",{parentName:"p"},"reobf*")," task configuration to declare extra libraries, the ",(0,o.kt)("inlineCode",{parentName:"p"},"reobf*")," task needed to take into account; it should be migrated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"libraries.from")," property instead."),(0,o.kt)("h3",{id:"eclipse-launcher-groups"},"Eclipse Launcher Groups"),(0,o.kt)("p",null,"If ForgeGradle is setup such that Eclipse should run the Gradle tasks before starting the game, you must execute the run configuration from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Launch Group")," folder. This is only true if new properties are enabled within the ",(0,o.kt)("inlineCode",{parentName:"p"},"minecraft")," block."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Eclipse launch groups demo",src:n(3042).Z,width:"435",height:"325"})),(0,o.kt)("h3",{id:"removal-of-resources-and-classes-in-modconfig"},"Removal of ",(0,o.kt)("inlineCode",{parentName:"h3"},"resources")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"classes")," in ModConfig"),(0,o.kt)("p",null,"The properties ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"classes")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"mods")," block of a run configuration have been removed from ForgeGradle 6."))}c.isMDXComponent=!0},3042:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/eclipse_launch_groups-d67f3e140ba5fae59475a8ba667380be.png"}}]);