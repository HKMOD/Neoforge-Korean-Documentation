"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[8006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),c=o,f=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:o,i[1]=d;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={},i="Sound Definition Generation",d={unversionedId:"datagen/client/sounds",id:"datagen/client/sounds",title:"Sound Definition Generation",description:"The sounds.json file can be generated for a mod by subclassing SoundDefinitionsProvider and implementing #registerSounds. After implementation, the provider must be added to the DataGenerator.",source:"@site/docs/datagen/client/sounds.md",sourceDirName:"datagen/client",slug:"/datagen/client/sounds",permalink:"/Neoforge-Korean-Documentation/docs/datagen/client/sounds",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Model Generation",permalink:"/Neoforge-Korean-Documentation/docs/datagen/client/modelproviders"},next:{title:"Advancement Generation",permalink:"/Neoforge-Korean-Documentation/docs/datagen/server/advancements"}},l={},s=[{value:"Adding a Sound",id:"adding-a-sound",level:2},{value:"<code>SoundDefinition</code>",id:"sounddefinition",level:3},{value:"<code>SoundDefinition$Sound</code>",id:"sounddefinitionsound",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sound-definition-generation"},"Sound Definition Generation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sounds.json")," file can be generated for a mod by subclassing ",(0,o.kt)("inlineCode",{parentName:"p"},"SoundDefinitionsProvider")," and implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"#registerSounds"),". After implementation, the provider must be ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datagen/#data-providers"},"added")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataGenerator"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// On the MOD event bus\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // Tell generator to run only when client assets are generating\n        event.includeClient(),\n        output -> new MySoundDefinitionsProvider(output, MOD_ID, event.getExistingFileHelper())\n    );\n}\n")),(0,o.kt)("h2",{id:"adding-a-sound"},"Adding a Sound"),(0,o.kt)("p",null,"A sound definition can be generated by specifying the sound name and definition via ",(0,o.kt)("inlineCode",{parentName:"p"},"#add"),". The sound name can either be provided from a ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/gameeffects/sounds#creating-sound-events"},(0,o.kt)("inlineCode",{parentName:"a"},"SoundEvent")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),", or string."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The sound name supplied will always assume the namespace is the mod id supplied to the constructor of the provider. There is no validation performed on the namespace of the sound name!")),(0,o.kt)("h3",{id:"sounddefinition"},(0,o.kt)("inlineCode",{parentName:"h3"},"SoundDefinition")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SoundDefinition")," can be created using ",(0,o.kt)("inlineCode",{parentName:"p"},"#definition"),". The definition contains the data to define a sound instance."),(0,o.kt)("p",null,"A definition specifies a few methods:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"with")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Adds a sound(s) which may be played when the definition is selected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"subtitle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sets the translation key of the definition.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"replace")),(0,o.kt)("td",{parentName:"tr",align:"left"},"When ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", removes the sounds already defined by other ",(0,o.kt)("inlineCode",{parentName:"td"},"sounds.json")," for this definition instead of appending to it.")))),(0,o.kt)("h3",{id:"sounddefinitionsound"},(0,o.kt)("inlineCode",{parentName:"h3"},"SoundDefinition$Sound")),(0,o.kt)("p",null,"A sound supplied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SoundDefinition")," can be specified using ",(0,o.kt)("inlineCode",{parentName:"p"},"SoundDefinitionsProvider#sound"),". These methods take in the reference of the sound and a ",(0,o.kt)("inlineCode",{parentName:"p"},"SoundType")," if specified."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SoundType")," can be one of two values:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Sound Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"SOUND")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies a reference to the sound located at ",(0,o.kt)("inlineCode",{parentName:"td"},"assets/<namespace>/sounds/<path>.ogg"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"EVENT")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies a reference to the name of another sound defined by the ",(0,o.kt)("inlineCode",{parentName:"td"},"sounds.json"),".")))),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"Sound")," created from ",(0,o.kt)("inlineCode",{parentName:"p"},"SoundDefinitionsProvider#sound")," can specify additional configurations on how to load and play the sound provided:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"volume")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sets the volume scale of the sound, must be greater than ",(0,o.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"pitch")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sets the pitch scale of the sound, must be greater than ",(0,o.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"weight")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sets the likelihood of the sound getting played when the sound is selected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"stream")),(0,o.kt)("td",{parentName:"tr",align:"left"},"When ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", reads the sound from file instead of loading the sound into memory. Recommended for long sounds: background music, music discs, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"attenuationDistance")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sets the number of blocks the sound can be heard from.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"preload")),(0,o.kt)("td",{parentName:"tr",align:"left"},"When ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", immediately loads the sound into memory as soon as the resource pack is loaded.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// In some SoundDefinitionsProvider#registerSounds\nthis.add(EXAMPLE_SOUND_EVENT, definition()\n  .subtitle("sound.examplemod.example_sound") // Set translation key\n  .with(\n    sound(new ResourceLocation(MODID, "example_sound_1")) // Set first sound\n      .weight(4) // Has a 4 / 5 = 80% chance of playing\n      .volume(0.5), // Scales all volumes called on this sound by half\n    sound(new ResourceLocation(MODID, "example_sound_2")) // Set second sound\n      .stream() // Streams the sound\n  )\n);\n\nthis.add(EXAMPLE_SOUND_EVENT_2, definition()\n  .subtitle("sound.examplemod.example_sound") // Set translation key\n  .with(\n    sound(EXAMPLE_SOUND_EVENT.getLocation(), SoundType.EVENT) // Adds sounds from \'EXAMPLE_SOUND_EVENT\'\n      .pitch(0.5) // Scales all pitches called on this sound by half\n  )\n);\n')))}m.isMDXComponent=!0}}]);