"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Forge Update Checker",l={unversionedId:"misc/updatechecker",id:"misc/updatechecker",title:"Forge Update Checker",description:"Forge provides a very lightweight, opt-in, update-checking framework. If any mods have an available update, it will show a flashing icon on the 'Mods' button of the main menu and mod list along with the respective changelogs. It does not download updates automatically.",source:"@site/docs/misc/updatechecker.md",sourceDirName:"misc",slug:"/misc/updatechecker",permalink:"/Neoforge-Korean-Documentation/docs/misc/updatechecker",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Key Mappings",permalink:"/Neoforge-Korean-Documentation/docs/misc/keymappings"},next:{title:"Networking",permalink:"/Neoforge-Korean-Documentation/docs/networking/"}},s={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Update JSON format",id:"update-json-format",level:2},{value:"Retrieving Update Check Results",id:"retrieving-update-check-results",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forge-update-checker"},"Forge Update Checker"),(0,a.kt)("p",null,"Forge provides a very lightweight, opt-in, update-checking framework. If any mods have an available update, it will show a flashing icon on the 'Mods' button of the main menu and mod list along with the respective changelogs. It ",(0,a.kt)("em",{parentName:"p"},"does not")," download updates automatically."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"The first thing you want to do is specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateJSONURL")," parameter in your ",(0,a.kt)("inlineCode",{parentName:"p"},"mods.toml")," file. The value of this parameter should be a valid URL pointing to an update JSON file. This file can be hosted on your own web server, GitHub, or wherever you want as long as it can be reliably reached by all users of your mod."),(0,a.kt)("h2",{id:"update-json-format"},"Update JSON format"),(0,a.kt)("p",null,"The JSON itself has a relatively simple format as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "homepage": "<homepage/download page for your mod>",\n  "<mcversion>": {\n    "<modversion>": "<changelog for this version>", \n    // List all versions of your mod for the given Minecraft version, along with their changelogs\n    // ...\n  },\n  "promos": {\n    "<mcversion>-latest": "<modversion>",\n    // Declare the latest "bleeding-edge" version of your mod for the given Minecraft version\n    "<mcversion>-recommended": "<modversion>",\n    // Declare the latest "stable" version of your mod for the given Minecraft version\n    // ...\n  }\n}\n')),(0,a.kt)("p",null,"This is fairly self-explanatory, but some notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The link under ",(0,a.kt)("inlineCode",{parentName:"li"},"homepage")," is the link the user will be shown when the mod is outdated."),(0,a.kt)("li",{parentName:"ul"},'Forge uses an internal algorithm to determine whether one version string of your mod is "newer" than another. Most versioning schemes should be compatible, but see the ',(0,a.kt)("inlineCode",{parentName:"li"},"ComparableVersion")," class if you are concerned about whether your scheme is supported. Adherence to ",(0,a.kt)("a",{parentName:"li",href:"/Neoforge-Korean-Documentation/docs/gettingstarted/versioning"},"Maven versioning")," is highly recommended."),(0,a.kt)("li",{parentName:"ul"},"The changelog string can be separated into lines using ",(0,a.kt)("inlineCode",{parentName:"li"},"\\n"),". Some prefer to include a abbreviated changelog, then link to an external site that provides a full listing of changes."),(0,a.kt)("li",{parentName:"ul"},"Manually inputting data can be chore. You can configure your ",(0,a.kt)("inlineCode",{parentName:"li"},"build.gradle")," to automatically update this file when building a release as Groovy has native JSON parsing support. Doing this is left as an exercise to the reader.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some examples can be found here for ",(0,a.kt)("a",{parentName:"li",href:"https://cadiboo.github.io/projects/nocubes/update.json"},"nocubes"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Corail31/tombstone_lite/blob/master/update.json"},"Corail Tombstone")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Aeltumn/Chisels-and-Bits-2/blob/master/update.json"},"Chisels & Bits 2"),".")),(0,a.kt)("h2",{id:"retrieving-update-check-results"},"Retrieving Update Check Results"),(0,a.kt)("p",null,"You can retrieve the results of the Forge Update Checker using ",(0,a.kt)("inlineCode",{parentName:"p"},"VersionChecker#getResult(IModInfo)"),". You can obtain your ",(0,a.kt)("inlineCode",{parentName:"p"},"IModInfo")," via ",(0,a.kt)("inlineCode",{parentName:"p"},"ModContainer#getModInfo"),". You can get your ",(0,a.kt)("inlineCode",{parentName:"p"},"ModContainer")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"ModLoadingContext.get().getActiveContainer()")," inside your constructor, ",(0,a.kt)("inlineCode",{parentName:"p"},"ModList.get().getModContainerById(<your modId>)"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"ModList.get().getModContainerByObject(<your mod instance>)"),". You can obtain any other mod's ",(0,a.kt)("inlineCode",{parentName:"p"},"ModContainer")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"ModList.get().getModContainerById(<modId>)"),". The returned object has a method ",(0,a.kt)("inlineCode",{parentName:"p"},"#status")," which indicates the status of the version check."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"FAILED")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The version checker could not connect to the URL provided.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"UP_TO_DATE")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current version is equal to the recommended version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"AHEAD")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current version is newer than the recommended version if there is not latest version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"OUTDATED")),(0,a.kt)("td",{parentName:"tr",align:"left"},"There is a new recommended or latest version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"BETA_OUTDATED")),(0,a.kt)("td",{parentName:"tr",align:"left"},"There is a new latest version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"BETA")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current version is equal to or newer than the latest version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"PENDING")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The result requested has not finished yet, so you should try again in a little bit.")))),(0,a.kt)("p",null,"The returned object will also have the target version and any changelog lines as specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"update.json"),"."))}u.isMDXComponent=!0}}]);