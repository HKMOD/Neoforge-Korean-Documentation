"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5803],{3751:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=i(5893),n=i(1151);const s={},l="Particles",c={id:"gameeffects/particles",title:"Particles",description:"Particles are an effect within the game used as polish to better improve immersion. Their usefulness also requires great caution because of their methods of creation and reference.",source:"@site/docs/gameeffects/particles.md",sourceDirName:"gameeffects",slug:"/gameeffects/particles",permalink:"/Neoforge-Korean-Documentation/docs/gameeffects/particles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\ub808\ubca8 \uc800\uc7a5 \ub370\uc774\ud130",permalink:"/Neoforge-Korean-Documentation/docs/datastorage/saveddata"},next:{title:"\ud6a8\uacfc\uc74c",permalink:"/Neoforge-Korean-Documentation/docs/gameeffects/sounds"}},d={},a=[{value:"Creating a Particle",id:"creating-a-particle",level:2},{value:"ParticleType",id:"particletype",level:3},{value:"ParticleOptions",id:"particleoptions",level:3},{value:"ParticleOptions$Deserializer",id:"particleoptionsdeserializer",level:4},{value:"Particle",id:"particle",level:3},{value:"ParticleRenderType",id:"particlerendertype",level:4},{value:"ParticleProvider",id:"particleprovider",level:3},{value:"ParticleDescription, SpriteSet, and SpriteParticleRegistration",id:"particledescription-spriteset-and-spriteparticleregistration",level:4},{value:"Spawning a Particle",id:"spawning-a-particle",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"particles",children:"Particles"}),"\n",(0,r.jsx)(t.p,{children:"Particles are an effect within the game used as polish to better improve immersion. Their usefulness also requires great caution because of their methods of creation and reference."}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-particle",children:"Creating a Particle"}),"\n",(0,r.jsxs)(t.p,{children:["Particles are broken up between its ",(0,r.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/sides",children:(0,r.jsx)(t.strong,{children:"client only"})})," implementation to display the particle and its common implementation to reference the particle or sync data from the server."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Class"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Side"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ParticleType"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"BOTH"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The registry object of a particle's type definition used to reference the particle on either side"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ParticleOptions"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"BOTH"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A data holder used to sync information from the network or a command to the associated client(s)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ParticleProvider"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"CLIENT"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["A factory registered by the ",(0,r.jsx)(t.code,{children:"ParticleType"})," used to construct a ",(0,r.jsx)(t.code,{children:"Particle"})," from the associated ",(0,r.jsx)(t.code,{children:"ParticleOptions"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Particle"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"CLIENT"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The renderable logic to display on the associated client(s)"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"particletype",children:"ParticleType"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"ParticleType"})," is the registry object defining what a particular particle type is and provides an available reference to the specific particle on both sides. As such, every ",(0,r.jsx)(t.code,{children:"ParticleType"})," must be ",(0,r.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/registries#methods-for-registering",children:"registered"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Each ",(0,r.jsx)(t.code,{children:"ParticleType"})," takes in two parameters: an ",(0,r.jsx)(t.code,{children:"overrideLimiter"})," which determines whether the particle renders regardless of distance, and a ",(0,r.jsx)(t.code,{children:"ParticleOptions$Deserializer"})," which is used to read the sent ",(0,r.jsx)(t.code,{children:"ParticleOptions"})," on the client. As the base ",(0,r.jsx)(t.code,{children:"ParticleType"})," is abstract, a single method needs to be implemented: ",(0,r.jsx)(t.code,{children:"#codec"}),". This represents how to encode and decode the associated ",(0,r.jsx)(t.code,{children:"ParticleOptions"})," of the type."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ParticleType#codec"})," is only used within the biome codec for vanilla implementations."]})}),"\n",(0,r.jsxs)(t.p,{children:["In most cases, there is no need to have any particle data sent to the client. For these instances, it is easier to create a new instance of ",(0,r.jsx)(t.code,{children:"SimpleParticleType"}),": an implementation of ",(0,r.jsx)(t.code,{children:"ParticleType"})," and ",(0,r.jsx)(t.code,{children:"ParticleOptions"})," which does not send any custom data to the client besides the type. Most vanilla implementations use ",(0,r.jsx)(t.code,{children:"SimpleParticleType"})," besides redstone dust for coloring and block/item dependent particles."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"ParticleType"})," is not needed to make a particle spawn if only referenced on the client. However, it is necessary to use any of the prebuilt logic within ",(0,r.jsx)(t.code,{children:"ParticleEngine"})," or spawn a particle from the server."]})}),"\n",(0,r.jsx)(t.h3,{id:"particleoptions",children:"ParticleOptions"}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.code,{children:"ParticleOptions"})," represents the data that each particle takes in. It is also used to send data from particles spawned via the server. All particle spawning methods take in a ",(0,r.jsx)(t.code,{children:"ParticleOptions"})," such that it knows the type of the particle and the data associated with spawning one."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ParticleOptions"})," is broken down into three methods:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"getType"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Gets the type definition of the particle, or the ",(0,r.jsx)(t.code,{children:"ParticleType"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"writeToNetwork"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Writes the particle data to a buffer on the server to send to the client"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"writeToString"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Writes the particle data to a string"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["These objects are either constructed on the fly as needed, or they are singletons as a result of being a ",(0,r.jsx)(t.code,{children:"SimpleParticleType"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"particleoptionsdeserializer",children:"ParticleOptions$Deserializer"}),"\n",(0,r.jsxs)(t.p,{children:["To receive the ",(0,r.jsx)(t.code,{children:"ParticleOptions"})," on the client, or to reference the data within a command, the particle data must be deserialized via ",(0,r.jsx)(t.code,{children:"ParticleOptions$Deserializer"}),". Each method within ",(0,r.jsx)(t.code,{children:"ParticleOptions$Deserializer"})," has a parity encoding method within ",(0,r.jsx)(t.code,{children:"ParticleOptions"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"ParticleOptions Encoder"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"fromCommand"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"writeToString"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Decodes a particle data from a string, usually from a command."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"fromNetwork"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"writeToNetwork"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Decodes a particle data from a buffer on the client."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["This object, when needing to send custom particle data, is passed into the constructor of the ",(0,r.jsx)(t.code,{children:"ParticleType"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"particle",children:"Particle"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"Particle"})," provides the rendering logic needed to draw said data onto the screen. To create any ",(0,r.jsx)(t.code,{children:"Particle"}),", two methods must be implemented:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"render"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Renders the particle onto the screen."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"getRenderType"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Gets the render type of the particle."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["A common subclass of ",(0,r.jsx)(t.code,{children:"Particle"})," to render textures is ",(0,r.jsx)(t.code,{children:"TextureSheetParticle"}),". While ",(0,r.jsx)(t.code,{children:"#getRenderType"})," needs to be implemented, whatever the texture sprite is set will be rendered at the particle's location."]}),"\n",(0,r.jsx)(t.h4,{id:"particlerendertype",children:"ParticleRenderType"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ParticleRenderType"})," is a variation on ",(0,r.jsx)(t.code,{children:"RenderType"})," which constructs the startup and teardown phase for every particle of that type and then renders them all at once via the ",(0,r.jsx)(t.code,{children:"Tesselator"}),". There are six different render types a particle can be in."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Render Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TERRAIN_SHEET"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Renders a particle whose texture is located within the available blocks."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"PARTICLE_SHEET_OPAQUE"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Renders a particle whose texture is opaque and located within the available particles."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"PARTICLE_SHEET_TRANSLUCENT"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Renders a particle whose texture is translucent and located within the available particles."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"PARTICLE_SHEET_LIT"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Same as ",(0,r.jsx)(t.code,{children:"PARTICLE_SHEET_OPAQUE"})," except without using the particle shader."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CUSTOM"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Provides setup for blending and depth mask but provides no rendering functionality as that would be implemented within ",(0,r.jsx)(t.code,{children:"Particle#render"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"NO_RENDER"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The particle will never render."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Implementing a custom render type will be left as an exercise to the reader."}),"\n",(0,r.jsx)(t.h3,{id:"particleprovider",children:"ParticleProvider"}),"\n",(0,r.jsxs)(t.p,{children:["Finally, a particle is usually created via an ",(0,r.jsx)(t.code,{children:"ParticleProvider"}),". A factory has a single method ",(0,r.jsx)(t.code,{children:"#createParticle"})," which is used to create a particle given the particle data, client level, position, and movement delta. Since a ",(0,r.jsx)(t.code,{children:"Particle"})," is not beholden to any particular ",(0,r.jsx)(t.code,{children:"ParticleType"}),", it can be reused in different factories as necessary."]}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.code,{children:"ParticleProvider"})," must be registered by subscribing to the ",(0,r.jsx)(t.code,{children:"RegisterParticleProvidersEvent"})," on the ",(0,r.jsx)(t.strong,{children:"mod event bus"}),". Within the event, the factory can be registered via ",(0,r.jsx)(t.code,{children:"#registerSpecial"})," by supplying an instance of the factory to the method."]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"RegisterParticleProvidersEvent"})," should only be called on the client and thus sided off in some isolated client class, referenced by either ",(0,r.jsx)(t.code,{children:"DistExecutor"})," or ",(0,r.jsx)(t.code,{children:"@EventBusSubscriber"}),"."]})}),"\n",(0,r.jsx)(t.h4,{id:"particledescription-spriteset-and-spriteparticleregistration",children:"ParticleDescription, SpriteSet, and SpriteParticleRegistration"}),"\n",(0,r.jsxs)(t.p,{children:["There are three particle render types that cannot use the above method of registration: ",(0,r.jsx)(t.code,{children:"PARTICLE_SHEET_OPAQUE"}),", ",(0,r.jsx)(t.code,{children:"PARTICLE_SHEET_TRANSLUCENT"}),", and ",(0,r.jsx)(t.code,{children:"PARTICLE_SHEET_LIT"}),". This is because all three of these particle render types use a sprite set that is loaded by the ",(0,r.jsx)(t.code,{children:"ParticleEngine"})," directly. As such, the textures supplied must be obtained and registered through a different method. This will assume your particle is a subtype of ",(0,r.jsx)(t.code,{children:"TextureSheetParticle"})," as that is the only vanilla implementation for this logic."]}),"\n",(0,r.jsxs)(t.p,{children:["To add a texture to a particle, a new JSON file must be added to ",(0,r.jsx)(t.code,{children:"assets/<modid>/particles"}),". This is known as the ",(0,r.jsx)(t.code,{children:"ParticleDescription"}),". The name of this file will represent the registry name of the ",(0,r.jsx)(t.code,{children:"ParticleType"})," the factory is being attached to. Each particle JSON is an object. The object stores a single key ",(0,r.jsx)(t.code,{children:"textures"})," which holds an array of ",(0,r.jsx)(t.code,{children:"ResourceLocation"}),"s. Any ",(0,r.jsx)(t.code,{children:"<modid>:<path>"})," texture represented here will point to a texture at ",(0,r.jsx)(t.code,{children:"assets/<modid>/textures/particle/<path>.png"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n  "textures": [\n    // Will point to a texture located in\n    // assets/mymod/textures/particle/particle_texture.png\n    "mymod:particle_texture",\n    // Textures should by ordered by drawing order\n    // e.g. particle_texture will render first, then particle_texture2\n    //      after some time\n    "mymod:particle_texture2"\n  ]\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["To reference a particle texture, the subtype of ",(0,r.jsx)(t.code,{children:"TextureSheetParticle"})," should either take in an ",(0,r.jsx)(t.code,{children:"SpriteSet"})," or a ",(0,r.jsx)(t.code,{children:"TextureAtlasSprite"})," obtained from ",(0,r.jsx)(t.code,{children:"SpriteSet"}),". ",(0,r.jsx)(t.code,{children:"SpriteSet"})," holds a list of textures which refer to the sprites as defined by our ",(0,r.jsx)(t.code,{children:"ParticleDescription"}),". ",(0,r.jsx)(t.code,{children:"SpriteSet"})," has two methods, both of which grab a ",(0,r.jsx)(t.code,{children:"TextureAtlasSprite"})," in different methods. The first method takes in two integers. The backing implementation allows the sprite to have a texture change as it ages. The second method takes in a ",(0,r.jsx)(t.code,{children:"Random"})," instance to get a random texture from the sprite set. The sprite can be set within ",(0,r.jsx)(t.code,{children:"TextureSheetParticle"})," by using one of the helper methods that takes in the ",(0,r.jsx)(t.code,{children:"SpriteSet"}),": ",(0,r.jsx)(t.code,{children:"#pickSprite"})," which uses the random method of picking a texture, and ",(0,r.jsx)(t.code,{children:"#setSpriteFromAge"})," which uses the percentage method of two integers to pick the texture."]}),"\n",(0,r.jsxs)(t.p,{children:["To register these particle textures, a ",(0,r.jsx)(t.code,{children:"SpriteParticleRegistration"})," needs to be supplied to the ",(0,r.jsx)(t.code,{children:"RegisterParticleProvidersEvent#registerSpriteSet"})," method. This method takes in an ",(0,r.jsx)(t.code,{children:"SpriteSet"})," holding the associated sprite set for the particle and creates an ",(0,r.jsx)(t.code,{children:"ParticleProvider"})," to create the particle. The simplest method of implementation can be done by implementing ",(0,r.jsx)(t.code,{children:"ParticleProvider"})," on some class and having the constructor take in an ",(0,r.jsx)(t.code,{children:"SpriteSet"}),". Then the ",(0,r.jsx)(t.code,{children:"SpriteSet"})," can be passed to the particle as normal."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you are registering a ",(0,r.jsx)(t.code,{children:"TextureSheetParticle"})," subtype which only contains one texture, then you can supply a ",(0,r.jsx)(t.code,{children:"ParticleProvider$Sprite"})," instead to the ",(0,r.jsx)(t.code,{children:"#registerSprite"})," method, which has essentially the same functional interface method as ",(0,r.jsx)(t.code,{children:"ParticleProvider"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"spawning-a-particle",children:"Spawning a Particle"}),"\n",(0,r.jsxs)(t.p,{children:["Particles can be spawned from either level instance. However, each side has a specific way to spawn a particle. If on the ",(0,r.jsx)(t.code,{children:"ClientLevel"}),", ",(0,r.jsx)(t.code,{children:"#addParticle"})," can be called to spawn a particle or ",(0,r.jsx)(t.code,{children:"#addAlwaysVisibleParticle"})," can be called to spawn a particle that is visible from any distance. If on the ",(0,r.jsx)(t.code,{children:"ServerLevel"}),", ",(0,r.jsx)(t.code,{children:"#sendParticles"})," can be called to send a packet to the client to spawn the particle. Calling the two ",(0,r.jsx)(t.code,{children:"ClientLevel"})," methods on the server will result in nothing."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>l});var r=i(7294);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);