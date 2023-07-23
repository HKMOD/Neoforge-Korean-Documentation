"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const l={},r="Sounds",i={unversionedId:"gameeffects/sounds",id:"gameeffects/sounds",title:"Sounds",description:"Terminology",source:"@site/docs/gameeffects/sounds.md",sourceDirName:"gameeffects",slug:"/gameeffects/sounds",permalink:"/Neoforge-Korean-Documentation/en/docs/gameeffects/sounds",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Particles",permalink:"/Neoforge-Korean-Documentation/en/docs/gameeffects/particles"},next:{title:"Menus",permalink:"/Neoforge-Korean-Documentation/en/docs/gui/menus"}},s={},d=[{value:"Terminology",id:"terminology",level:2},{value:"<code>sounds.json</code>",id:"soundsjson",level:2},{value:"Creating Sound Events",id:"creating-sound-events",level:2},{value:"Playing Sounds",id:"playing-sounds",level:2},{value:"<code>Level</code>",id:"level",level:3},{value:"<code>ClientLevel</code>",id:"clientlevel",level:3},{value:"<code>Entity</code>",id:"entity",level:3},{value:"<code>Player</code>",id:"player",level:3},{value:"<code>LocalPlayer</code>",id:"localplayer",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sounds"},"Sounds"),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Term"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sound Events"),(0,a.kt)("td",{parentName:"tr",align:null},"Something that triggers a sound effect. Examples include ",(0,a.kt)("inlineCode",{parentName:"td"},"minecraft:block.anvil.hit")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"botania:spreader_fire"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sound Category"),(0,a.kt)("td",{parentName:"tr",align:null},"The category of the sound, for example ",(0,a.kt)("inlineCode",{parentName:"td"},"player"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"block")," or simply ",(0,a.kt)("inlineCode",{parentName:"td"},"master"),". The sliders in the sound settings GUI represent these categories.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sound File"),(0,a.kt)("td",{parentName:"tr",align:null},"The literal file on disk that is played: an .ogg file.")))),(0,a.kt)("h2",{id:"soundsjson"},(0,a.kt)("inlineCode",{parentName:"h2"},"sounds.json")),(0,a.kt)("p",null,"This JSON defines sound events, and defines which sound files they play, the subtitle, etc. Sound events are identified with ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/resources#resourcelocation"},(0,a.kt)("inlineCode",{parentName:"a"},"ResourceLocation")),"s. ",(0,a.kt)("inlineCode",{parentName:"p"},"sounds.json")," should be located at the root of a resource namespace (",(0,a.kt)("inlineCode",{parentName:"p"},"assets/<namespace>/sounds.json"),"), and it defines sound events in that namespace (",(0,a.kt)("inlineCode",{parentName:"p"},"assets/<namespace>/sounds.json")," defines sound events in the namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace"),".)."),(0,a.kt)("p",null,"A full specification is available on the vanilla ",(0,a.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Sounds.json"},"wiki"),", but this example highlights the important parts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "open_chest": {\n    "subtitle": "mymod.subtitle.open_chest",\n    "sounds": [ "mymod:open_chest_sound_file" ]\n  },\n  "epic_music": {\n    "sounds": [\n      {\n        "name": "mymod:music/epic_music",\n        "stream": true\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"Underneath the top-level object, each key corresponds to a sound event. Note that the namespace is not given, as it is taken from the namespace of the JSON itself. Each event specifies a localization key to be shown when subtitles are enabled. Finally, the actual sound files to be played are specified. Note that the value is an array; if multiple sound files are specified, the game will randomly choose one to play whenever the sound event is triggered."),(0,a.kt)("p",null,"The two examples represent two different ways to specify a sound file. The ",(0,a.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Sounds.json"},"wiki"),' has precise details, but generally, long sound files such as background music or music discs should use the second form, because the "stream" argument tells Minecraft to not load the entire sound file into memory but to stream it from disk. The second form can also specify the volume, pitch, and weight of a sound file.'),(0,a.kt)("p",null,"In all cases, the path to a sound file for namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," and path ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/<namespace>/sounds/<path>.ogg"),". Therefore ",(0,a.kt)("inlineCode",{parentName:"p"},"mymod:open_chest_sound_file")," points to ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/mymod/sounds/open_chest_sound_file.ogg"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"mymod:music/epic_music")," points to ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/mymod/sounds/music/epic_music.ogg"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"sounds.json")," can be ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/datagen/client/sounds"},"data generated"),"."),(0,a.kt)("h2",{id:"creating-sound-events"},"Creating Sound Events"),(0,a.kt)("p",null,"In order to reference sounds on the server, a ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundEvent")," holding a corresponding entry in ",(0,a.kt)("inlineCode",{parentName:"p"},"sounds.json")," must be created. This ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundEvent")," must then be ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/registries#methods-for-registering"},"registered"),". Normally, the location used to create a sound event should be set as it's registry name."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundEvent")," acts as a reference to the sound and is passed around to play them. If a mod has an API, it should expose its ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundEvent"),"s in the API."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As long as a sound is registered within the ",(0,a.kt)("inlineCode",{parentName:"p"},"sounds.json"),", it can still be referenced on the logical client regardless of whether there is a referencing ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundEvent"),".")),(0,a.kt)("h2",{id:"playing-sounds"},"Playing Sounds"),(0,a.kt)("p",null,"Vanilla has lots of methods for playing sounds, and it is unclear which to use at times."),(0,a.kt)("p",null,"Note that each takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundEvent"),", the ones registered above. Additionally, the terms ",(0,a.kt)("em",{parentName:"p"},'"Server Behavior"')," and ",(0,a.kt)("em",{parentName:"p"},'"Client Behavior"')," refer to the respective ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/sides"},(0,a.kt)("strong",{parentName:"a"},"logical")," side"),"."),(0,a.kt)("h3",{id:"level"},(0,a.kt)("inlineCode",{parentName:"h3"},"Level")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{name:"level-playsound-pbecvp"})," `playSound(Player, BlockPos, SoundEvent, SoundSource, volume, pitch)` - Simply forwards to [overload (2)](#level-playsound-pxyzecvp), adding 0.5 to each coordinate of the `BlockPos` given."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{name:"level-playsound-pxyzecvp"})," `playSound(Player, double x, double y, double z, SoundEvent, SoundSource, volume, pitch)` - **Client Behavior**: If the passed in player is *the* client player, plays the sound event to the client player. - **Server Behavior**: Plays the sound event to everyone nearby **except** the passed in player. Player can be `null`. - **Usage**: The correspondence between the behaviors implies that these two methods are to be called from some player-initiated code that will be run on both logical sides at the same time: the logical client handles playing it to the user, and the logical server handles everyone else hearing it without re-playing it to the original user. They can also be used to play any sound in general at any position server-side by calling it on the logical server and passing in a `null` player, thus letting everyone hear it."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{name:"level-playsound-xyzecvpd"})," `playLocalSound(double x, double y, double z, SoundEvent, SoundSource, volume, pitch, distanceDelay)` - **Client Behavior**: Just plays the sound event in the client level. If `distanceDelay` is `true`, then delays the sound based on how far it is from the player. - **Server Behavior**: Does nothing. - **Usage**: This method only works client-side, and thus is useful for sounds sent in custom packets, or other client-only effect-type sounds. Used for thunder.")),(0,a.kt)("h3",{id:"clientlevel"},(0,a.kt)("inlineCode",{parentName:"h3"},"ClientLevel")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{name:"clientlevel-playsound-becvpd"})," `playLocalSound(BlockPos, SoundEvent, SoundSource, volume, pitch, distanceDelay)` - Simply forwards to `Level`'s [overload (3)](#level-playsound-xyzecvpd), adding 0.5 to each coordinate of the `BlockPos` given.")),(0,a.kt)("h3",{id:"entity"},(0,a.kt)("inlineCode",{parentName:"h3"},"Entity")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{name:"entity-playsound-evp"})," `playSound(SoundEvent, volume, pitch)` - Forwards to `Level`'s [overload (2)](#level-playsound-pxyzecvp), passing in `null` as the player. - **Client Behavior**: Does nothing. - **Server Behavior**: Plays the sound event to everyone at this entity's position. - **Usage**: Emitting any sound from any non-player entity server-side.")),(0,a.kt)("h3",{id:"player"},(0,a.kt)("inlineCode",{parentName:"h3"},"Player")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{name:"player-playsound-evp"})," `playSound(SoundEvent, volume, pitch)` (overriding the one in [`Entity`](#entity-playsound-evp)) - Forwards to `Level`'s [overload (2)](#level-playsound-pxyzecvp), passing in `this` as the player. - **Client Behavior**: Does nothing, see override in [`LocalPlayer`](#localplayer-playsound-evp). - **Server Behavior**: Plays the sound to everyone nearby *except* this player. - **Usage**: See [`LocalPlayer`](#localplayer-playsound-evp).")),(0,a.kt)("h3",{id:"localplayer"},(0,a.kt)("inlineCode",{parentName:"h3"},"LocalPlayer")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{name:"localplayer-playsound-evp"})," `playSound(SoundEvent, volume, pitch)` (overriding the one in [`Player`](#player-playsound-evp)) - Forwards to `Level`'s [overload (2)](#level-playsound-pxyzecvp), passing in `this` as the player. - **Client Behavior**: Just plays the Sound Event. - **Server Behavior**: Method is client-only. - **Usage**: Just like the ones in `Level`, these two overrides in the player classes seem to be for code that runs together on both sides. The client handles playing the sound to the user, while the server handles everyone else hearing it without re-playing to the original user.")))}c.isMDXComponent=!0}}]);