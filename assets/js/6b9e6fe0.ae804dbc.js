"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=i,g=s["".concat(p,".").concat(u)]||s[u]||c[u]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={},o="Configuration",l={unversionedId:"misc/config",id:"misc/config",title:"Configuration",description:"Configurations define settings and consumer preferences that can be applied to a mod instance. Forge uses a configuration system using TOML files and read with NightConfig.",source:"@site/docs/misc/config.md",sourceDirName:"misc",slug:"/misc/config",permalink:"/docs/misc/config",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Porting to Minecraft 1.20",permalink:"/docs/legacy/porting"},next:{title:"Debug Profiler",permalink:"/docs/misc/debugprofiler"}},p={},d=[{value:"Creating a Configuration",id:"creating-a-configuration",level:2},{value:"ConfigValue",id:"configvalue",level:3},{value:"Additional Config Value Types",id:"additional-config-value-types",level:4},{value:"Registering a Configuration",id:"registering-a-configuration",level:2},{value:"Configuration Events",id:"configuration-events",level:2}],m={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configurations define settings and consumer preferences that can be applied to a mod instance. Forge uses a configuration system using ",(0,i.kt)("a",{parentName:"p",href:"https://toml.io/"},"TOML")," files and read with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheElectronWill/night-config"},"NightConfig"),"."),(0,i.kt)("h2",{id:"creating-a-configuration"},"Creating a Configuration"),(0,i.kt)("p",null,"A configuration can be created using a subtype of ",(0,i.kt)("inlineCode",{parentName:"p"},"IConfigSpec"),". Forge implements the type via ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeConfigSpec")," and enables its construction through ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeConfigSpec$Builder"),". The builder can separate the config values into sections via ",(0,i.kt)("inlineCode",{parentName:"p"},"Builder#push")," to create a section and ",(0,i.kt)("inlineCode",{parentName:"p"},"Builder#pop")," to leave a section. Afterwards, the configuration can be built using one of two methods:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"build")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Creates the ",(0,i.kt)("inlineCode",{parentName:"td"},"ForgeConfigSpec"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"configure")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Creates a pair of the class holding the config values and the ",(0,i.kt)("inlineCode",{parentName:"td"},"ForgeConfigSpec"),".")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ForgeConfigSpec$Builder#configure")," is typically used with a ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," block and a class that takes in ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeConfigSpec$Builder")," as part of its constructor to attach and hold the values:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// In some config class\nExampleConfig(ForgeConfigSpec.Builder builder) {\n  // Define values here in final fields\n}\n\n// Somewhere the constructor is accessible\nstatic {\n  Pair<ExampleConfig, ForgeConfigSpec> pair = new ForgeConfigSpec.Builder()\n    .configure(ExampleConfig::new);\n  // Store pair values in some constant field\n}\n"))),(0,i.kt)("p",null,"Each config value can be supplied with additional context to provide additional behavior. Contexts must be defined before the config value is fully built:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"comment")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Provides a description of what the config value does. Can provide multiple strings for a multiline comment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"translation")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Provides a translation key for the name of the config value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"worldRestart")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The world must be restarted before the config value can be changed.")))),(0,i.kt)("h3",{id:"configvalue"},"ConfigValue"),(0,i.kt)("p",null,"Config values can be built with the provided contexts (if defined) using any of the ",(0,i.kt)("inlineCode",{parentName:"p"},"#define")," methods."),(0,i.kt)("p",null,"All config value methods take in at least two components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A path representing the name of the variable: a ",(0,i.kt)("inlineCode",{parentName:"li"},".")," separated string representing the sections the config value is in"),(0,i.kt)("li",{parentName:"ul"},"The default value when no valid configuration is present")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigValue")," specific methods take in two additional components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A validator to make sure the deserialized object is valid"),(0,i.kt)("li",{parentName:"ul"},"A class representing the data type of the config value")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// For some ForgeConfigSpec$Builder builder\nConfigValue<T> value = builder.comment("Comment")\n  .define("config_value_name", defaultValue);\n')),(0,i.kt)("p",null,"The values themselves can be obtained using ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigValue#get"),". The values are additionally cached to prevent multiple readings from files."),(0,i.kt)("h4",{id:"additional-config-value-types"},"Additional Config Value Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Range Values"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Value must be between the defined bounds"),(0,i.kt)("li",{parentName:"ul"},"Class Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Comparable<T>")),(0,i.kt)("li",{parentName:"ul"},"Method Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"#defineInRange")),(0,i.kt)("li",{parentName:"ul"},"Additional Components:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The minimum and maximum the config value may be"),(0,i.kt)("li",{parentName:"ul"},"A class representing the data type of the config value")))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"DoubleValue"),"s, ",(0,i.kt)("inlineCode",{parentName:"p"},"IntValue"),"s, and ",(0,i.kt)("inlineCode",{parentName:"p"},"LongValue"),"s are range values which specify the class as ",(0,i.kt)("inlineCode",{parentName:"p"},"Double"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Integer"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Long")," respectively.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Whitelisted Values")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Value must be in supplied collection"),(0,i.kt)("li",{parentName:"ul"},"Class Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"T")),(0,i.kt)("li",{parentName:"ul"},"Method Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"#defineInList")),(0,i.kt)("li",{parentName:"ul"},"Additional Components:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A collection of the allowed values the configuration can be"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"List Values")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: Value is a list of entries"),(0,i.kt)("li",{parentName:"ul"},"Class Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"List<T>")),(0,i.kt)("li",{parentName:"ul"},"Method Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"#defineList"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"#defineListAllowEmpty")," if list can be empty"),(0,i.kt)("li",{parentName:"ul"},"Additional Components:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A validator to make sure a deserialized element from the list is valid"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Enum Values")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: An enum value in the supplied collection"),(0,i.kt)("li",{parentName:"ul"},"Class Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Enum<T>")),(0,i.kt)("li",{parentName:"ul"},"Method Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"#defineEnum")),(0,i.kt)("li",{parentName:"ul"},"Additional Components:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A getter to convert a string or integer into an enum"),(0,i.kt)("li",{parentName:"ul"},"A collection of the allowed values the configuration can be"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Boolean Values")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: A ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," value"),(0,i.kt)("li",{parentName:"ul"},"Class Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,i.kt)("li",{parentName:"ul"},"Method Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"#define"))))),(0,i.kt)("h2",{id:"registering-a-configuration"},"Registering a Configuration"),(0,i.kt)("p",null,"Once a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeConfigSpec")," has been built, it must be registered to allow Forge to load, track, and sync the configuration settings as required. Configurations should be registered in the mod constructor via ",(0,i.kt)("inlineCode",{parentName:"p"},"ModLoadingContext#registerConfig"),". A configuration can be registered with a given type representing the side the config belongs to, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeConfigSpec"),", and optionally a specific file name for the configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// In the mod constructor with a ForgeConfigSpec CONFIG\nModLoadingContext.get().registerConfig(Type.COMMON, CONFIG);\n")),(0,i.kt)("p",null,"Here is a list of the available configuration types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Loaded"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Synced to Client"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Client Location"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Server Location"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default File Suffix"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"CLIENT"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Client Side Only"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".minecraft/config")),(0,i.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-client"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"COMMON"),(0,i.kt)("td",{parentName:"tr",align:"center"},"On Both Sides"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".minecraft/config")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<server_folder>/config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-common"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SERVER"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Server Side Only"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".minecraft/saves/<level_name>/serverconfig")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<server_folder>/world/serverconfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-server"))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Forge documents the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MinecraftForge/MinecraftForge/blob/c3e0b071a268b02537f9d79ef8e7cd9b100db416/fmlcore/src/main/java/net/minecraftforge/fml/config/ModConfig.java#L108-L136"},"config types")," within their codebase.")),(0,i.kt)("h2",{id:"configuration-events"},"Configuration Events"),(0,i.kt)("p",null,"Operations that occur whenever a config is loaded or reloaded can be done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModConfigEvent$Loading")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ModConfigEvent$Reloading")," events. The events must be ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/events#creating-an-event-handler"},"registered")," to the mod event bus."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"These events are called for all configurations for the mod; the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModConfig")," object provided should be used to denote which configuration is being loaded or reloaded.")))}c.isMDXComponent=!0}}]);