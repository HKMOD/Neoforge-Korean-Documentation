"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[992],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),p=a,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return o?n.createElement(m,r(r({ref:t},d),{},{components:o})):n.createElement(m,r({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4075:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const i={},r="Pull Request Guidelines",s={unversionedId:"forgedev/prguidelines",id:"forgedev/prguidelines",title:"Pull Request Guidelines",description:"Mods are built on top of Forge, but there are some things that Forge does not support, and that limits what mods can do.",source:"@site/docs/forgedev/prguidelines.md",sourceDirName:"forgedev",slug:"/forgedev/prguidelines",permalink:"/Neoforge-Korean-Documentation/docs/forgedev/prguidelines",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Getting Started",permalink:"/Neoforge-Korean-Documentation/docs/forgedev/"},next:{title:"Particles",permalink:"/Neoforge-Korean-Documentation/docs/gameeffects/particles"}},l={},c=[{value:"What Exactly is Forge?",id:"what-exactly-is-forge",level:2},{value:"Patches",id:"patches",level:2},{value:"Forge Code",id:"forge-code",level:2},{value:"Explain Yourself",id:"explain-yourself",level:2},{value:"Show that it Works",id:"show-that-it-works",level:2},{value:"Breaking Changes in Forge",id:"breaking-changes-in-forge",level:2},{value:"Be Patient, Civil, and Empathetic",id:"be-patient-civil-and-empathetic",level:2},{value:"Review",id:"review",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pull-request-guidelines"},"Pull Request Guidelines"),(0,a.kt)("p",null,"Mods are built on top of Forge, but there are some things that Forge does not support, and that limits what mods can do.",(0,a.kt)("br",{parentName:"p"}),"\n","When modders run into something like that, they can make a change to Forge to support it, and submit that change as a Pull Request on Github."),(0,a.kt)("p",null,"To make the best use of both your and the Forge team's time, it is recommended to follow some rough guidelines when preparing a Pull Request. The following points are the most important aspects to keep in mind when it comes to writing a good Pull Request."),(0,a.kt)("h2",{id:"what-exactly-is-forge"},"What Exactly is Forge?"),(0,a.kt)("p",null,"At a high level, Forge is a mod compatibility layer on top of Minecraft.",(0,a.kt)("br",{parentName:"p"}),"\n","Early mods edited Minecraft's code directly (like coremods do now), but they ran into conflicts with each other when they edited the same things. They also ran into issues when one mod changed behavior in ways that the other mods could not anticipate (like coremods do now), causing mysterious issues and lots of headaches.  "),(0,a.kt)("p",null,"By using something like Forge, mods can centralize common changes and avoid conflicts.",(0,a.kt)("br",{parentName:"p"}),"\n","Forge also includes supporting structures for common mod features like Capabilities, Registries, and others that allow mods to work together better."),(0,a.kt)("p",null,"When writing a good Forge Pull Request, you also have to know what Forge is at a lower level.",(0,a.kt)("br",{parentName:"p"}),"\n","There are two main types of code in Forge: Minecraft patches, and Forge code."),(0,a.kt)("h2",{id:"patches"},"Patches"),(0,a.kt)("p",null,"Patches are applied as direct changes to Minecraft's source code, and aim to be as minimal as possible.",(0,a.kt)("br",{parentName:"p"}),"\n","Every time Minecraft code changes, all the Forge patches need to be looked over carefully and applied correctly to the new code.",(0,a.kt)("br",{parentName:"p"}),"\n","This means that large patches that change lots of things are difficult to maintain, so Forge aims to avoid those and keep patches as small as possible.",(0,a.kt)("br",{parentName:"p"}),"\n","In addition to making sure the code makes sense, reviews for patches will focus on minimizing the size."),(0,a.kt)("p",null,"There are many strategies to make small patches, and reviews will often point out better methods to do things.",(0,a.kt)("br",{parentName:"p"}),"\n","Forge patches often insert a single line that fires an event or a code hook, which affects the code after it if the event meets some condition.",(0,a.kt)("br",{parentName:"p"}),"\n","This allows most of the code to exist outside of the patch, which keeps the patch small and simple."),(0,a.kt)("p",null,"For more detailed information about creating patches, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MinecraftForge/MinecraftForge/wiki/If-you-want-to-contribute-to-Forge#conventions-for-coding-patches-for-a-minecraft-class-javapatch"},"see the GitHub wiki"),"."),(0,a.kt)("h2",{id:"forge-code"},"Forge Code"),(0,a.kt)("p",null,"Aside from the patches, Forge code is just normal Java code. It can be event code, compatibility features, or anything else that is not directly editing Minecraft code.\nWhen Minecraft updates, Forge code has to update just like everything else. However, it is much easier because it is not directly entangled in the Minecraft code."),(0,a.kt)("p",null,"Because this code stands on its own, there is no size restriction like there is with the patches."),(0,a.kt)("p",null,"In addition to making sure the code makes sense, reviews will focus on making the code clean: with proper formatting and Java documentation."),(0,a.kt)("h2",{id:"explain-yourself"},"Explain Yourself"),(0,a.kt)("p",null,"All Pull Requests need to answer the question: why is this necessary?",(0,a.kt)("br",{parentName:"p"}),"\n","Any code added to Forge needs to be maintained, and more code means more potential for bugs, so solid justification is needed for adding code."),(0,a.kt)("p",null,"A common Pull Request issue is offering no explanation, or giving cryptic examples for how the Pull Request might theoretically be used.\nThis only delays the Pull Request process.",(0,a.kt)("br",{parentName:"p"}),"\n","A clear explanation for the general case is good, but also give a concrete example of how your mod needs this Pull Request."),(0,a.kt)("p",null,"Sometimes there is better way to do what you wanted, or a way to do it without a Pull Request at all. Code changes can not be accepted until those possibilities have been completely ruled out."),(0,a.kt)("h2",{id:"show-that-it-works"},"Show that it Works"),(0,a.kt)("p",null,"The code you submit to Forge should work perfectly, and it is up to you to convince the reviewers that it does.  "),(0,a.kt)("p",null,"One of the best ways to do that is to add an example mod or JUnit test to Forge that makes use of your new code and shows it working.  "),(0,a.kt)("p",null,"To set up and run a Forge Environment with the example mods, see ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/forgedev/"},"this guide"),"."),(0,a.kt)("h2",{id:"breaking-changes-in-forge"},"Breaking Changes in Forge"),(0,a.kt)("p",null,"Forge cannot make changes that break the mods that depend on it.",(0,a.kt)("br",{parentName:"p"}),"\n","This means that Pull Requests have to ensure that they do not break binary compatibility with previous Forge versions.",(0,a.kt)("br",{parentName:"p"}),"\n","A change that breaks binary compatibility is called a Breaking Change."),(0,a.kt)("p",null,"There are some exceptions to this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Forge accepts Breaking Changes at the beginning of new Minecraft versions, where Minecraft itself already causes Breaking Changes for modders.  "),(0,a.kt)("li",{parentName:"ul"},"Sometimes an emergency breaking change is required outside of that time window, but it is rare and can cause dependency headaches for everyone in the modded Minecraft community.")),(0,a.kt)("p",null,"Outside of those exceptional times, Pull Requests with breaking changes are not accepted. They must be adapted to support the old behavior or wait for the next Minecraft version."),(0,a.kt)("h2",{id:"be-patient-civil-and-empathetic"},"Be Patient, Civil, and Empathetic"),(0,a.kt)("p",null,"When submitting Pull Requests, you will often have to survive code review and make several changes before it is the best Pull Request possible.",(0,a.kt)("br",{parentName:"p"}),"\n","Keep in mind that code review is not judgement against you. Bugs in your code are not personal. Nobody is perfect, and that is why we are working together. "),(0,a.kt)("p",null,"Negativity will not help. Threatening to give up on your Pull Request and write a coremod instead will just make people upset and make the modded ecosystem worse.",(0,a.kt)("br",{parentName:"p"}),"\n","It is important that while working together you assume the best intentions of the people who are reviewing your Pull Request and not take things personally."),(0,a.kt)("h2",{id:"review"},"Review"),(0,a.kt)("p",null,"If you do your best to understand the slow and perfectionistic nature of the Pull Request process, we will do our best to understand your point of view as well."),(0,a.kt)("p",null,"After your Pull Request has been reviewed and cleaned up to the best of everyone's ability, it will be marked for a final review by Lex, who has the final say on what is included in the project or not."))}h.isMDXComponent=!0}}]);