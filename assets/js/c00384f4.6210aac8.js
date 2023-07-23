"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1869],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={},i="Advanced Configurations",c={unversionedId:"docs/configuration/advanced",id:"docs/configuration/advanced",title:"Advanced Configurations",description:"ForgeGradle contains a few specific or nuanced configuration techniques depending on the complexity of your build project.",source:"@site/neogradle/docs/configuration/advanced.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/advanced",permalink:"/neogradle/docs/configuration/advanced",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ngSidebar",previous:{title:"ForgeGradle Configurations",permalink:"/neogradle/docs/configuration/"},next:{title:"Run Configurations",permalink:"/neogradle/docs/configuration/runs"}},s={},u=[{value:"Reobfuscating Source Sets",id:"reobfuscating-source-sets",level:2}],l={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-configurations"},"Advanced Configurations"),(0,o.kt)("p",null,"ForgeGradle contains a few specific or nuanced configuration techniques depending on the complexity of your build project."),(0,o.kt)("h2",{id:"reobfuscating-source-sets"},"Reobfuscating Source Sets"),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"reobf*")," abd ",(0,o.kt)("inlineCode",{parentName:"p"},"rename*")," tasks only contain files on the main source set's classpath. To reobfuscate files on a different classpath, they need to be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"libraries")," property within the task."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},"// Adds another source set's classpath to 'reobf' task.\ntasks.withType('reobfJar') {\n    libraries.from sourceSets.api.classpath\n}\n")))}p.isMDXComponent=!0}}]);