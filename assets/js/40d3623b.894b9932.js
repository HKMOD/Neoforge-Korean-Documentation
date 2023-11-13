"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[989],{624:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(5893),i=n(1151);const s={},d="ForgeGradle 5 -> 6 Migration Primer",a={id:"docs/x_to_6.0",title:"ForgeGradle 5 -> 6 Migration Primer",description:"This is a high level, non-exhaustive overview on how to migrate your buildscript from ForgeGradle 5 to 6.",source:"@site/neogradle/docs/5.x_to_6.0.md",sourceDirName:"docs",slug:"/docs/x_to_6.0",permalink:"/Neoforge-Korean-Documentation/neogradle/docs/x_to_6.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"ngSidebar",previous:{title:"NeoGradle \ubb38\uc11c",permalink:"/Neoforge-Korean-Documentation/neogradle/docs/"},next:{title:"ForgeGradle Configurations",permalink:"/Neoforge-Korean-Documentation/neogradle/docs/configuration/"}},t={},l=[{value:"Add Foojay Toolchains Plugin",id:"add-foojay-toolchains-plugin",level:2},{value:"Update Gradle to 8.1.1",id:"update-gradle-to-811",level:2},{value:"<code>gradle wrapper</code>",id:"gradle-wrapper",level:3},{value:"gradle-wrapper.properties",id:"gradle-wrapperproperties",level:3},{value:"Update ForgeGradle Plugin Version",id:"update-forgegradle-plugin-version",level:2},{value:"Remove <code>forceExit</code> from Run Configurations",id:"remove-forceexit-from-run-configurations",level:2},{value:"Minor Additions, Changes, Removals",id:"minor-additions-changes-removals",level:3},{value:"Reobfuscated Classpath Inheritance",id:"reobfuscated-classpath-inheritance",level:3},{value:"Eclipse Launcher Groups",id:"eclipse-launcher-groups",level:3},{value:"Removal of <code>resources</code> and <code>classes</code> in ModConfig",id:"removal-of-resources-and-classes-in-modconfig",level:3}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"forgegradle-5---6-migration-primer",children:"ForgeGradle 5 -> 6 Migration Primer"}),"\n",(0,o.jsx)(r.p,{children:"This is a high level, non-exhaustive overview on how to migrate your buildscript from ForgeGradle 5 to 6."}),"\n",(0,o.jsx)(r.h2,{id:"add-foojay-toolchains-plugin",children:"Add Foojay Toolchains Plugin"}),"\n",(0,o.jsxs)(r.p,{children:["Gradle now uses the ",(0,o.jsx)(r.a,{href:"https://github.com/gradle/foojay-toolchains",children:"Foojay Toolchains Plugin"})," to manage the Java toolchain. The plugin must be added to the ",(0,o.jsx)(r.code,{children:"settings.gradle[.kts]"}),":"]}),"\n",(0,o.jsx)(r.p,{children:"With Gradle DSL:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-gradle",children:"// In settings.gradle\nplugins {\n    id 'org.gradle.toolchains.foojay-resolver-convention' version '0.5.0'\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:"With Kotlin DSL:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-kotlin",children:'// In settings.gradle.kts\nplugins {\n    id("org.gradle.toolchains.foojay-resolver-convention") version "0.5.0"\n}\n'})}),"\n",(0,o.jsx)(r.h2,{id:"update-gradle-to-811",children:"Update Gradle to 8.1.1"}),"\n",(0,o.jsxs)(r.p,{children:["First, you need to update your Gradle Wrapper to use 8.1.1. You can find additional information regarding the migration process from 7 to 8 on ",(0,o.jsx)(r.a,{href:"https://docs.gradle.org/current/userguide/upgrading_version_7.html",children:"Gradle's migration guide"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"This can be done in one of two ways:"}),"\n",(0,o.jsx)(r.h3,{id:"gradle-wrapper",children:(0,o.jsx)(r.code,{children:"gradle wrapper"})}),"\n",(0,o.jsxs)(r.p,{children:["The preferred option is to use the ",(0,o.jsx)(r.code,{children:"gradle wrapper"})," command with the ",(0,o.jsx)(r.code,{children:"--gradle-version"})," option."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# Inside root directory of the gradle project\n./gradlew wrapper --gradle-version=8.1.1\n"})}),"\n",(0,o.jsx)(r.h3,{id:"gradle-wrapperproperties",children:"gradle-wrapper.properties"}),"\n",(0,o.jsxs)(r.p,{children:["This method is not recommended, and it should only be used if the ",(0,o.jsx)(r.code,{children:"gradlew wrapper"})," command above fails."]}),"\n",(0,o.jsxs)(r.p,{children:["Update the version in the ",(0,o.jsx)(r.code,{children:"distributionUrl"})," property within ",(0,o.jsx)(r.code,{children:"gradle/wrapper/gradle-wrapper.properties"}),". Afterwards run ",(0,o.jsx)(r.code,{children:"./gradlew wrapper"}),"."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"distributionUrl=https\\://services.gradle.org/distributions/gradle-8.1.1-bin.zip\n"})}),"\n",(0,o.jsx)(r.h2,{id:"update-forgegradle-plugin-version",children:"Update ForgeGradle Plugin Version"}),"\n",(0,o.jsxs)(r.p,{children:["After updating Gradle, update the ",(0,o.jsx)(r.code,{children:"ForgeGradle"})," version in your ",(0,o.jsx)(r.code,{children:"build.gradle[.kts]"})," to ",(0,o.jsx)(r.code,{children:"[6.0,6.2)"}),":"]}),"\n",(0,o.jsx)(r.p,{children:"With Gradle DSL:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-gradle",children:"// In build.gradle\nplugins {\n    id 'net.minecraftforge.gradle' version '[6.0,6.2)'\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:"With Kotlin DSL:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-kotlin",children:'// In build.gradle.kts\nplugins {\n    id("net.minecraftforge.gradle") version "[6.0,6.2)"\n}\n'})}),"\n",(0,o.jsxs)(r.h2,{id:"remove-forceexit-from-run-configurations",children:["Remove ",(0,o.jsx)(r.code,{children:"forceExit"})," from Run Configurations"]}),"\n",(0,o.jsxs)(r.p,{children:["ForgeGradle has now removed the ",(0,o.jsx)(r.code,{children:"forceExit"})," property in run configurations. Changes to run tasks only apply to the current project and not any subprojects."]}),"\n",(0,o.jsx)(r.h3,{id:"minor-additions-changes-removals",children:"Minor Additions, Changes, Removals"}),"\n",(0,o.jsx)(r.h3,{id:"reobfuscated-classpath-inheritance",children:"Reobfuscated Classpath Inheritance"}),"\n",(0,o.jsxs)(r.p,{children:["If you were using ",(0,o.jsx)(r.code,{children:"classpath.from"})," within a ",(0,o.jsx)(r.code,{children:"reobf*"})," task configuration to declare extra libraries, the ",(0,o.jsx)(r.code,{children:"reobf*"})," task needed to take into account; it should be migrated to the ",(0,o.jsx)(r.code,{children:"libraries.from"})," property instead."]}),"\n",(0,o.jsx)(r.h3,{id:"eclipse-launcher-groups",children:"Eclipse Launcher Groups"}),"\n",(0,o.jsxs)(r.p,{children:["If ForgeGradle is setup such that Eclipse should run the Gradle tasks before starting the game, you must execute the run configuration from the ",(0,o.jsx)(r.code,{children:"Launch Group"})," folder. This is only true if new properties are enabled within the ",(0,o.jsx)(r.code,{children:"minecraft"})," block."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Eclipse launch groups demo",src:n(3042).Z+"",width:"435",height:"325"})}),"\n",(0,o.jsxs)(r.h3,{id:"removal-of-resources-and-classes-in-modconfig",children:["Removal of ",(0,o.jsx)(r.code,{children:"resources"})," and ",(0,o.jsx)(r.code,{children:"classes"})," in ModConfig"]}),"\n",(0,o.jsxs)(r.p,{children:["The properties ",(0,o.jsx)(r.code,{children:"resources"})," and ",(0,o.jsx)(r.code,{children:"classes"})," within the ",(0,o.jsx)(r.code,{children:"mods"})," block of a run configuration have been removed from ForgeGradle 6."]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3042:(e,r,n)=>{n.d(r,{Z:()=>o});const o=n.p+"assets/images/eclipse_launch_groups-d67f3e140ba5fae59475a8ba667380be.png"},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>d});var o=n(7294);const i={},s=o.createContext(i);function d(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);