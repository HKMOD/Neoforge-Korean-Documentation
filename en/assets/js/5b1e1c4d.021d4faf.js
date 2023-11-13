"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[30],{5961:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var o=s(5893),i=s(1151);const l={},d="Sounds",t={id:"gameeffects/sounds",title:"Sounds",description:"Terminology",source:"@site/docs/gameeffects/sounds.md",sourceDirName:"gameeffects",slug:"/gameeffects/sounds",permalink:"/Neoforge-Korean-Documentation/en/docs/gameeffects/sounds",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Particles",permalink:"/Neoforge-Korean-Documentation/en/docs/gameeffects/particles"},next:{title:"\uba54\ub274",permalink:"/Neoforge-Korean-Documentation/en/docs/gui/menus"}},r={},c=[{value:"Terminology",id:"terminology",level:2},{value:"<code>sounds.json</code>",id:"soundsjson",level:2},{value:"Creating Sound Events",id:"creating-sound-events",level:2},{value:"Playing Sounds",id:"playing-sounds",level:2},{value:"<code>Level</code>",id:"level",level:3},{value:"<code>ClientLevel</code>",id:"clientlevel",level:3},{value:"<code>Entity</code>",id:"entity",level:3},{value:"<code>Player</code>",id:"player",level:3},{value:"<code>LocalPlayer</code>",id:"localplayer",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"sounds",children:"Sounds"}),"\n",(0,o.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Term"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Sound Events"}),(0,o.jsxs)(n.td,{children:["Something that triggers a sound effect. Examples include ",(0,o.jsx)(n.code,{children:"minecraft:block.anvil.hit"})," or ",(0,o.jsx)(n.code,{children:"botania:spreader_fire"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Sound Category"}),(0,o.jsxs)(n.td,{children:["The category of the sound, for example ",(0,o.jsx)(n.code,{children:"player"}),", ",(0,o.jsx)(n.code,{children:"block"})," or simply ",(0,o.jsx)(n.code,{children:"master"}),". The sliders in the sound settings GUI represent these categories."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Sound File"}),(0,o.jsx)(n.td,{children:"The literal file on disk that is played: an .ogg file."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"soundsjson",children:(0,o.jsx)(n.code,{children:"sounds.json"})}),"\n",(0,o.jsxs)(n.p,{children:["This JSON defines sound events, and defines which sound files they play, the subtitle, etc. Sound events are identified with ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/resources#resourcelocation",children:(0,o.jsx)(n.code,{children:"ResourceLocation"})}),"s. ",(0,o.jsx)(n.code,{children:"sounds.json"})," should be located at the root of a resource namespace (",(0,o.jsx)(n.code,{children:"assets/<namespace>/sounds.json"}),"), and it defines sound events in that namespace (",(0,o.jsx)(n.code,{children:"assets/<namespace>/sounds.json"})," defines sound events in the namespace ",(0,o.jsx)(n.code,{children:"namespace"}),".)."]}),"\n",(0,o.jsxs)(n.p,{children:["A full specification is available on the vanilla ",(0,o.jsx)(n.a,{href:"https://minecraft.wiki/w/Sounds.json",children:"wiki"}),", but this example highlights the important parts:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'{\n  "open_chest": {\n    "subtitle": "mymod.subtitle.open_chest",\n    "sounds": [ "mymod:open_chest_sound_file" ]\n  },\n  "epic_music": {\n    "sounds": [\n      {\n        "name": "mymod:music/epic_music",\n        "stream": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Underneath the top-level object, each key corresponds to a sound event. Note that the namespace is not given, as it is taken from the namespace of the JSON itself. Each event specifies a localization key to be shown when subtitles are enabled. Finally, the actual sound files to be played are specified. Note that the value is an array; if multiple sound files are specified, the game will randomly choose one to play whenever the sound event is triggered."}),"\n",(0,o.jsxs)(n.p,{children:["The two examples represent two different ways to specify a sound file. The ",(0,o.jsx)(n.a,{href:"https://minecraft.wiki/w/Sounds.json",children:"wiki"}),' has precise details, but generally, long sound files such as background music or music discs should use the second form, because the "stream" argument tells Minecraft to not load the entire sound file into memory but to stream it from disk. The second form can also specify the volume, pitch, and weight of a sound file.']}),"\n",(0,o.jsxs)(n.p,{children:["In all cases, the path to a sound file for namespace ",(0,o.jsx)(n.code,{children:"namespace"})," and path ",(0,o.jsx)(n.code,{children:"path"})," is ",(0,o.jsx)(n.code,{children:"assets/<namespace>/sounds/<path>.ogg"}),". Therefore ",(0,o.jsx)(n.code,{children:"mymod:open_chest_sound_file"})," points to ",(0,o.jsx)(n.code,{children:"assets/mymod/sounds/open_chest_sound_file.ogg"}),", and ",(0,o.jsx)(n.code,{children:"mymod:music/epic_music"})," points to ",(0,o.jsx)(n.code,{children:"assets/mymod/sounds/music/epic_music.ogg"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"sounds.json"})," can be ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/datagen/client/sounds",children:"data generated"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"creating-sound-events",children:"Creating Sound Events"}),"\n",(0,o.jsxs)(n.p,{children:["In order to reference sounds on the server, a ",(0,o.jsx)(n.code,{children:"SoundEvent"})," holding a corresponding entry in ",(0,o.jsx)(n.code,{children:"sounds.json"})," must be created. This ",(0,o.jsx)(n.code,{children:"SoundEvent"})," must then be ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/registries#methods-for-registering",children:"registered"}),". Normally, the location used to create a sound event should be set as it's registry name."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"SoundEvent"})," acts as a reference to the sound and is passed around to play them. If a mod has an API, it should expose its ",(0,o.jsx)(n.code,{children:"SoundEvent"}),"s in the API."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["As long as a sound is registered within the ",(0,o.jsx)(n.code,{children:"sounds.json"}),", it can still be referenced on the logical client regardless of whether there is a referencing ",(0,o.jsx)(n.code,{children:"SoundEvent"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"playing-sounds",children:"Playing Sounds"}),"\n",(0,o.jsx)(n.p,{children:"Vanilla has lots of methods for playing sounds, and it is unclear which to use at times."}),"\n",(0,o.jsxs)(n.p,{children:["Note that each takes a ",(0,o.jsx)(n.code,{children:"SoundEvent"}),", the ones registered above. Additionally, the terms ",(0,o.jsx)(n.em,{children:'"Server Behavior"'})," and ",(0,o.jsx)(n.em,{children:'"Client Behavior"'})," refer to the respective ",(0,o.jsxs)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/sides",children:[(0,o.jsx)(n.strong,{children:"logical"})," side"]}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"level",children:(0,o.jsx)(n.code,{children:"Level"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)("a",{name:"level-playsound-pbecvp"})," ",(0,o.jsx)(n.code,{children:"playSound(Player, BlockPos, SoundEvent, SoundSource, volume, pitch)"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Simply forwards to ",(0,o.jsx)(n.a,{href:"#level-playsound-pxyzecvp",children:"overload (2)"}),", adding 0.5 to each coordinate of the ",(0,o.jsx)(n.code,{children:"BlockPos"})," given."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)("a",{name:"level-playsound-pxyzecvp"})," ",(0,o.jsx)(n.code,{children:"playSound(Player, double x, double y, double z, SoundEvent, SoundSource, volume, pitch)"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Client Behavior"}),": If the passed in player is ",(0,o.jsx)(n.em,{children:"the"})," client player, plays the sound event to the client player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Server Behavior"}),": Plays the sound event to everyone nearby ",(0,o.jsx)(n.strong,{children:"except"})," the passed in player. Player can be ",(0,o.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Usage"}),": The correspondence between the behaviors implies that these two methods are to be called from some player-initiated code that will be run on both logical sides at the same time: the logical client handles playing it to the user, and the logical server handles everyone else hearing it without re-playing it to the original user. They can also be used to play any sound in general at any position server-side by calling it on the logical server and passing in a ",(0,o.jsx)(n.code,{children:"null"})," player, thus letting everyone hear it."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)("a",{name:"level-playsound-xyzecvpd"})," ",(0,o.jsx)(n.code,{children:"playLocalSound(double x, double y, double z, SoundEvent, SoundSource, volume, pitch, distanceDelay)"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Client Behavior"}),": Just plays the sound event in the client level. If ",(0,o.jsx)(n.code,{children:"distanceDelay"})," is ",(0,o.jsx)(n.code,{children:"true"}),", then delays the sound based on how far it is from the player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Server Behavior"}),": Does nothing."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Usage"}),": This method only works client-side, and thus is useful for sounds sent in custom packets, or other client-only effect-type sounds. Used for thunder."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"clientlevel",children:(0,o.jsx)(n.code,{children:"ClientLevel"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("a",{name:"clientlevel-playsound-becvpd"})," ",(0,o.jsx)(n.code,{children:"playLocalSound(BlockPos, SoundEvent, SoundSource, volume, pitch, distanceDelay)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Simply forwards to ",(0,o.jsx)(n.code,{children:"Level"}),"'s ",(0,o.jsx)(n.a,{href:"#level-playsound-xyzecvpd",children:"overload (3)"}),", adding 0.5 to each coordinate of the ",(0,o.jsx)(n.code,{children:"BlockPos"})," given."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"entity",children:(0,o.jsx)(n.code,{children:"Entity"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("a",{name:"entity-playsound-evp"})," ",(0,o.jsx)(n.code,{children:"playSound(SoundEvent, volume, pitch)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Forwards to ",(0,o.jsx)(n.code,{children:"Level"}),"'s ",(0,o.jsx)(n.a,{href:"#level-playsound-pxyzecvp",children:"overload (2)"}),", passing in ",(0,o.jsx)(n.code,{children:"null"})," as the player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Client Behavior"}),": Does nothing."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Server Behavior"}),": Plays the sound event to everyone at this entity's position."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Usage"}),": Emitting any sound from any non-player entity server-side."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"player",children:(0,o.jsx)(n.code,{children:"Player"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("a",{name:"player-playsound-evp"})," ",(0,o.jsx)(n.code,{children:"playSound(SoundEvent, volume, pitch)"})," (overriding the one in ",(0,o.jsx)(n.a,{href:"#entity-playsound-evp",children:(0,o.jsx)(n.code,{children:"Entity"})}),")","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Forwards to ",(0,o.jsx)(n.code,{children:"Level"}),"'s ",(0,o.jsx)(n.a,{href:"#level-playsound-pxyzecvp",children:"overload (2)"}),", passing in ",(0,o.jsx)(n.code,{children:"this"})," as the player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Client Behavior"}),": Does nothing, see override in ",(0,o.jsx)(n.a,{href:"#localplayer-playsound-evp",children:(0,o.jsx)(n.code,{children:"LocalPlayer"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Server Behavior"}),": Plays the sound to everyone nearby ",(0,o.jsx)(n.em,{children:"except"})," this player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Usage"}),": See ",(0,o.jsx)(n.a,{href:"#localplayer-playsound-evp",children:(0,o.jsx)(n.code,{children:"LocalPlayer"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"localplayer",children:(0,o.jsx)(n.code,{children:"LocalPlayer"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)("a",{name:"localplayer-playsound-evp"})," ",(0,o.jsx)(n.code,{children:"playSound(SoundEvent, volume, pitch)"})," (overriding the one in ",(0,o.jsx)(n.a,{href:"#player-playsound-evp",children:(0,o.jsx)(n.code,{children:"Player"})}),")","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Forwards to ",(0,o.jsx)(n.code,{children:"Level"}),"'s ",(0,o.jsx)(n.a,{href:"#level-playsound-pxyzecvp",children:"overload (2)"}),", passing in ",(0,o.jsx)(n.code,{children:"this"})," as the player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Client Behavior"}),": Just plays the Sound Event."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Server Behavior"}),": Method is client-only."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Usage"}),": Just like the ones in ",(0,o.jsx)(n.code,{children:"Level"}),", these two overrides in the player classes seem to be for code that runs together on both sides. The client handles playing the sound to the user, while the server handles everyone else hearing it without re-playing to the original user."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var o=s(7294);const i={},l=o.createContext(i);function d(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);