"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},r="Internationalization and Localization",l={unversionedId:"concepts/internationalization",id:"concepts/internationalization",title:"Internationalization and Localization",description:"Internationalization, i18n for short, is a way of designing code so that it requires no changes to be adapted for various languages. Localization is the process of adapting displayed text to the user's language.",source:"@site/docs/concepts/internationalization.md",sourceDirName:"concepts",slug:"/concepts/internationalization",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/internationalization",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Events",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/events"},next:{title:"Mod Lifecycle",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/lifecycle"}},s={},c=[{value:"Language files",id:"language-files",level:2},{value:"Usage with Blocks and Items",id:"usage-with-blocks-and-items",level:2},{value:"Localization methods",id:"localization-methods",level:2},{value:"<code>net.minecraft.client.resources.language.I18n</code> (client only)",id:"netminecraftclientresourceslanguagei18n-client-only",level:3},{value:"<code>TranslatableContents</code>",id:"translatablecontents",level:3},{value:"<code>TextComponentHelper</code>",id:"textcomponenthelper",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internationalization-and-localization"},"Internationalization and Localization"),(0,i.kt)("p",null,"Internationalization, i18n for short, is a way of designing code so that it requires no changes to be adapted for various languages. Localization is the process of adapting displayed text to the user's language."),(0,i.kt)("p",null,"I18n is implemented using ",(0,i.kt)("em",{parentName:"p"},"translation keys"),". A translation key is a string that identifies a piece of displayable text in no specific language. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"block.minecraft.dirt")," is the translation key referring to the name of the Dirt block. This way, displayable text may be referenced with no concern for a specific language. The code requires no changes to be adapted in a new language."),(0,i.kt)("p",null,"Localization will happen in the game's locale. In a Minecraft client the locale is specified by the language settings. On a dedicated server, the only supported locale is ",(0,i.kt)("inlineCode",{parentName:"p"},"en_us"),". A list of available locales can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Language#Languages"},"Minecraft Wiki"),"."),(0,i.kt)("h2",{id:"language-files"},"Language files"),(0,i.kt)("p",null,"Language files are located by ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/[namespace]/lang/[locale].json")," (e.g. all US English translations provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"examplemod")," would be within ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/examplemod/lang/en_us.json"),"). The file format is simply a json map from translation keys to values. The file must be encoded in UTF-8. Old .lang files can be converted to json using a ",(0,i.kt)("a",{parentName:"p",href:"https://tterrag.com/lang2json/"},"converter"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "item.examplemod.example_item": "Example Item Name",\n  "block.examplemod.example_block": "Example Block Name",\n  "commands.examplemod.examplecommand.error": "Example Command Errored!"\n}\n')),(0,i.kt)("h2",{id:"usage-with-blocks-and-items"},"Usage with Blocks and Items"),(0,i.kt)("p",null,"Block, Item and a few other Minecraft classes have built-in translation keys used to display their names. These translation keys are specified by overriding ",(0,i.kt)("inlineCode",{parentName:"p"},"#getDescriptionId"),". Item also has ",(0,i.kt)("inlineCode",{parentName:"p"},"#getDescriptionId(ItemStack)")," which can be overridden to provide different translation keys depending on ItemStack NBT."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"#getDescriptionId")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"block.")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"item.")," prepended to the registry name of the block or item, with the colon replaced by a dot. ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockItem"),"s override this method to take their corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"Block"),"'s translation key by default. For example, an item with ID ",(0,i.kt)("inlineCode",{parentName:"p"},"examplemod:example_item")," effectively requires the following line in a language file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "item.examplemod.example_item": "Example Item Name"\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The only purpose of a translation key is internationalization. Do not use them for logic. Use registry names instead.")),(0,i.kt)("h2",{id:"localization-methods"},"Localization methods"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A common issue is having the server localize for clients. The server can only localize in its own locale, which does not necessarily match the locale of connected clients."),(0,i.kt)("p",{parentName:"admonition"},"To respect the language settings of clients, the server should have clients localize text in their own locale using ",(0,i.kt)("inlineCode",{parentName:"p"},"TranslatableComponent")," or other methods preserving the language neutral translation keys.")),(0,i.kt)("h3",{id:"netminecraftclientresourceslanguagei18n-client-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"net.minecraft.client.resources.language.I18n")," (client only)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This I18n class can only be found on a Minecraft client!")," It is intended to be used by code that only runs on the client. Attempts to use this on a server will throw exceptions and crash."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get(String, Object...)")," localizes in the client's locale with formatting. The first parameter is a translation key, and the rest are formatting arguments for ",(0,i.kt)("inlineCode",{parentName:"li"},"String.format(String, Object...)"),".")),(0,i.kt)("h3",{id:"translatablecontents"},(0,i.kt)("inlineCode",{parentName:"h3"},"TranslatableContents")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TranslatableContents")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentContents")," that is localized and formatted lazily. It is very useful when sending messages to players because it will be automatically localized in their own locale."),(0,i.kt)("p",null,"The first parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TranslatableContents(String, Object...)")," constructor is a translation key, and the rest are used for formatting. The only supported format specifiers are ",(0,i.kt)("inlineCode",{parentName:"p"},"%s")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"%1$s"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"%2$s"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"%3$s")," etc. Formatting arguments may be ",(0,i.kt)("inlineCode",{parentName:"p"},"Component"),"s that will be inserted into the resulting formatted text with all their attributes preserved."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"MutableComponent")," can be created using ",(0,i.kt)("inlineCode",{parentName:"p"},"Component#translatable")," by passing in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TranslatableContents"),"'s parameters. It can also be created using ",(0,i.kt)("inlineCode",{parentName:"p"},"MutableComponent#create")," by passing in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentContents")," itself."),(0,i.kt)("h3",{id:"textcomponenthelper"},(0,i.kt)("inlineCode",{parentName:"h3"},"TextComponentHelper")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createComponentTranslation(CommandSource, String, Object...)")," creates a localized and formatted ",(0,i.kt)("inlineCode",{parentName:"li"},"MutableComponent")," depending on a receiver. The localization and formatting is done eagerly if the receiver is a vanilla client. If not, the localization and formatting is done lazily with a ",(0,i.kt)("inlineCode",{parentName:"li"},"Component")," containing ",(0,i.kt)("inlineCode",{parentName:"li"},"TranslatableContents"),". This is only useful if the server should allow vanilla clients to connect.")))}m.isMDXComponent=!0}}]);