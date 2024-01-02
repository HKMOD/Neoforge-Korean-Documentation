"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7515],{9538:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=a(5893),r=a(1151);const i={},o="Language Generation",s={id:"datagen/client/localization",title:"Language Generation",description:"Language files can be generated for a mod by subclassing LanguageProvider and implementing #addTranslations. Each LanguageProvider subclass created represents a separate locale] (enus represents American English, eses represents Spanish, etc.). After implementation, the provider must be [added to the DataGenerator.",source:"@site/docs/datagen/client/localization.md",sourceDirName:"datagen/client",slug:"/datagen/client/localization",permalink:"/Neoforge-Korean-Documentation/en/docs/datagen/client/localization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\ub370\uc774\ud130 \uc0dd\uc131\uae30",permalink:"/Neoforge-Korean-Documentation/en/docs/datagen/"},next:{title:"Model Generation",permalink:"/Neoforge-Korean-Documentation/en/docs/datagen/client/modelproviders"}},c={},d=[{value:"<code>LanguageProvider</code>",id:"languageprovider",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"language-generation",children:"Language Generation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/internationalization",children:"Language files"})," can be generated for a mod by subclassing ",(0,t.jsx)(n.code,{children:"LanguageProvider"})," and implementing ",(0,t.jsx)(n.code,{children:"#addTranslations"}),". Each ",(0,t.jsx)(n.code,{children:"LanguageProvider"})," subclass created represents a separate ",(0,t.jsx)(n.a,{href:"https://minecraft.wiki/w/Language#Languages",children:"locale"})," (",(0,t.jsx)(n.code,{children:"en_us"})," represents American English, ",(0,t.jsx)(n.code,{children:"es_es"})," represents Spanish, etc.). After implementation, the provider must be ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/datagen/#dataprovider",children:"added"})," to the ",(0,t.jsx)(n.code,{children:"DataGenerator"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// On the MOD event bus\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // Tell generator to run only when client assets are generating\n        event.includeClient(),\n        // Localizations for American English\n        output -> new MyLanguageProvider(output, MOD_ID, "en_us")\n    );\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"languageprovider",children:(0,t.jsx)(n.code,{children:"LanguageProvider"})}),"\n",(0,t.jsxs)(n.p,{children:["Each language provider is simple a map of strings where each translation key is mapped to a localized name. A translation key mapping can be added using ",(0,t.jsx)(n.code,{children:"#add"}),". Additionally, there are methods which use the translation key of a ",(0,t.jsx)(n.code,{children:"Block"}),", ",(0,t.jsx)(n.code,{children:"Item"}),", ",(0,t.jsx)(n.code,{children:"ItemStack"}),", ",(0,t.jsx)(n.code,{children:"Enchantment"}),", ",(0,t.jsx)(n.code,{children:"MobEffect"}),", and ",(0,t.jsx)(n.code,{children:"EntityType"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// In LanguageProvider#addTranslations\nthis.addBlock(EXAMPLE_BLOCK, "Example Block");\nthis.add("object.examplemod.example_object", "Example Object");\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Localized names which contain alphanumeric values not in American English can be supplied as is. The provider automatically translates the characters into their unicode equivalents to be read by the game."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// Encdoded as \'Example with a d\\u00EDacritic\'\nthis.addItem("example.diacritic", "Example with a d\xedacritic");\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>o});var t=a(7294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);