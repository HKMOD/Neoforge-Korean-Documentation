"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7865],{3807:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=i(5893),n=i(1151);const a={},s="Particles",l={id:"resources/client/particles",title:"Particles",description:"Particles are 2D effects that polish the game and add immersion. They can be spawned both client and server [side], but being mostly visual in nature, critical parts exist only on the physical (and logical) client side.",source:"@site/docs/resources/client/particles.md",sourceDirName:"resources/client",slug:"/resources/client/particles",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/client/particles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Custom Model Loaders",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/client/models/modelloaders"},next:{title:"Sounds",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/client/sounds"}},c={},o=[{value:"Registering Particles",id:"registering-particles",level:2},{value:"<code>ParticleType</code>",id:"particletype",level:3},{value:"<code>Particle</code>",id:"particle",level:3},{value:"<code>ParticleProvider</code>",id:"particleprovider",level:3},{value:"Particle Descriptions",id:"particle-descriptions",level:3},{value:"Datagen",id:"datagen",level:3},{value:"Custom <code>ParticleType</code>s",id:"custom-particletypes",level:3},{value:"Spawning Particles",id:"spawning-particles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"particles",children:"Particles"}),"\n",(0,r.jsxs)(t.p,{children:["Particles are 2D effects that polish the game and add immersion. They can be spawned both client and server ",(0,r.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/sides",children:"side"}),", but being mostly visual in nature, critical parts exist only on the physical (and logical) client side."]}),"\n",(0,r.jsx)(t.h2,{id:"registering-particles",children:"Registering Particles"}),"\n",(0,r.jsx)(t.h3,{id:"particletype",children:(0,r.jsx)(t.code,{children:"ParticleType"})}),"\n",(0,r.jsxs)(t.p,{children:["Particles are registered using ",(0,r.jsx)(t.code,{children:"ParticleType"}),"s. These work similar to ",(0,r.jsx)(t.code,{children:"EntityType"}),"s or ",(0,r.jsx)(t.code,{children:"BlockEntityType"}),"s, in that there's a ",(0,r.jsx)(t.code,{children:"Particle"})," class - every spawned particle is an instance of that class -, and then there's the ",(0,r.jsx)(t.code,{children:"ParticleType"})," class, holding some common information, that is used for registration. ",(0,r.jsx)(t.code,{children:"ParticleType"}),"s are a ",(0,r.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/registries",children:"registry"}),", which means that we want to register them using a ",(0,r.jsx)(t.code,{children:"DeferredRegister"})," like all other registered objects:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public class MyParticleTypes {\n    // Assuming that your mod id is examplemod\n    public static final DeferredRegister<ParticleType<?>> PARTICLE_TYPES =\n        DeferredRegister.create(BuiltInRegistries.PARTICLE_TYPE, "examplemod");\n    \n    // The easiest way to add new particle types is reusing vanilla\'s SimpleParticleType.\n    // Implementing a custom ParticleType is also possible, see below.\n    public static final DeferredHolder<ParticleType<?>, SimpleParticleType> MY_PARTICLE = PARTICLE_TYPES.register(\n        // The name of the particle type.\n        "my_particle",\n        // The supplier. The boolean parameter denotes whether setting the Particles option in the\n        // video settings to Minimal will affect this particle type or not; this is false for\n        // most vanilla particles, but true for e.g. explosions, campfire smoke, or squid ink.\n        () -> new SimpleParticleType(false)\n    );\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"ParticleType"})," is only necessary if you need to work with particles on the server side. The client can also use ",(0,r.jsx)(t.code,{children:"Particle"}),"s directly."]})}),"\n",(0,r.jsx)(t.h3,{id:"particle",children:(0,r.jsx)(t.code,{children:"Particle"})}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"Particle"})," is what is later spawned into the world and displayed to the player. While you may extend ",(0,r.jsx)(t.code,{children:"Particle"})," and implement things yourself, in many cases it will be better to extend ",(0,r.jsx)(t.code,{children:"TextureSheetParticle"})," instead, as this class provides helpers for things such as animating and scaling, and also does the actual rendering for you (all of which you'd need to implement yourself if extending ",(0,r.jsx)(t.code,{children:"Particle"})," directly)."]}),"\n",(0,r.jsxs)(t.p,{children:["Most properties of ",(0,r.jsx)(t.code,{children:"Particle"}),"s are controlled by fields such as ",(0,r.jsx)(t.code,{children:"gravity"}),", ",(0,r.jsx)(t.code,{children:"lifetime"}),", ",(0,r.jsx)(t.code,{children:"hasPhysics"}),", ",(0,r.jsx)(t.code,{children:"friction"}),", etc. The only two methods that make sense to implement yourself are ",(0,r.jsx)(t.code,{children:"tick"})," and ",(0,r.jsx)(t.code,{children:"move"}),", both of which do exactly what you'd expect. As such, custom particle classes are often short, consisting e.g. only of a constructor that sets some fields and lets the superclass handle the rest. A basic implementation would look somewhat like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public class MyParticle extends TextureSheetParticle {\n    private final SpriteSet spriteSet;\n    \n    // First four parameters are self-explanatory. The SpriteSet parameter is provided by the\n    // ParticleProvider, see below. You may also add additional parameters as needed, e.g. xSpeed/ySpeed/zSpeed.\n    public MyParticle(ClientLevel level, double x, double y, double z, SpriteSet spriteSet) {\n        super(level, x, y, z);\n        this.spriteSet = spriteSet;\n        this.gravity = 0; // Our particle floats in midair now, because why not.\n    }\n    \n    @Override\n    public void tick() {\n        // Set the sprite for the current particle age, i.e. advance the animation.\n        setSpriteFromAge(spriteSet);\n        // Let super handle further movement. You may replace this with your own movement if needed.\n        // You may also override move() if you only want to modify the built-in movement.\n        super.tick();\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"particleprovider",children:(0,r.jsx)(t.code,{children:"ParticleProvider"})}),"\n",(0,r.jsxs)(t.p,{children:["Next, particle types must register a ",(0,r.jsx)(t.code,{children:"ParticleProvider"}),". ",(0,r.jsx)(t.code,{children:"ParticleProvider"})," is a client-only class responsible for actually creating our ",(0,r.jsx)(t.code,{children:"Particle"}),"s through the ",(0,r.jsx)(t.code,{children:"createParticle"})," method. While more elaborate code can be included here, many particle providers are as simple as this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// The generic type of ParticleProvider must match the type of the particle type this provider is for.\npublic class MyParticleProvider implements ParticleProvider<SimpleParticleType> {\n    // A set of particle sprites.\n    private final SpriteSet spriteSet;\n    \n    // The registration function passes a SpriteSet, so we accept that and store it for further use.\n    public MyParticleProvider(SpriteSet spriteSet) {\n        this.spriteSet = spriteSet;\n    }\n    \n    // This is where the magic happens. We return a new particle each time this method is called!\n    // The type of the first parameter matches the generic type passed to the super interface.\n    @Override\n    public Particle createParticle(SimpleParticleType type, ClientLevel level,\n            double x, double y, double z, double xSpeed, double ySpeed, double zSpeed) {\n        // We don't use the type and speed, and pass in everything else. You may of course use them if needed.\n        return new MyParticle(level, x, y, z, spriteSet);\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Your particle provider must then be associated with the particle type in the ",(0,r.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/sides",children:"client-side"})," ",(0,r.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/events#event-buses",children:"mod bus"})," ",(0,r.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/events",children:"event"})," ",(0,r.jsx)(t.code,{children:"RegisterParticleProvidersEvent"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"@SubscribeEvent\npublic static void registerParticleProviders(RegisterParticleProvidersEvent event) {\n    // There are multiple ways to register providers, all differing in the functional type they provide in the\n    // second parameter. For example, #registerSpriteSet represents a Function<SpriteSet, ParticleProvider<?>>:\n    event.registerSpriteSet(MyParticleTypes.MY_PARTICLE.get(), MyParticleProvider::new);\n    // Other methods include #registerSprite, which is essentially a Supplier<TextureSheetParticle>,\n    // and #registerSpecial, which maps to a Supplier<Particle>. See the source code of the event for further info.\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"particle-descriptions",children:"Particle Descriptions"}),"\n",(0,r.jsxs)(t.p,{children:["Finally, we must associate our particle type with a texture. Similar to how items are associated with an item model, we associate our particle type with what is known as a particle description. A particle description is a JSON file in the ",(0,r.jsx)(t.code,{children:"assets/<namespace>/particles"})," directory and has the same name as the particle type (so for example ",(0,r.jsx)(t.code,{children:"my_particle.json"})," for the above example). The particle definition JSON has the following format:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json5",children:'{\n    // A list of textures that will be played in order. Will loop if necessary.\n    // Texture locations are relative to the textures/particle folder.\n    "textures": [\n        "examplemod:my_particle_0",\n        "examplemod:my_particle_1",\n        "examplemod:my_particle_2",\n        "examplemod:my_particle_3"\n    ]\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Note that a particle definition file is only necessary when using a sprite set particle. Single sprite particles directly map to the texture file at ",(0,r.jsx)(t.code,{children:"assets/<namespace>/textures/particle/<particle_name>.png"}),", and special particle providers can do whatever you want anyway."]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"A mismatched list of sprite set particle factories and particle definition files, i.e. a particle description without a corresponding particle factory, or vice versa, will throw an exception!"})}),"\n",(0,r.jsx)(t.h3,{id:"datagen",children:"Datagen"}),"\n",(0,r.jsxs)(t.p,{children:["Particle definition files can also be ",(0,r.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/en/docs/resources/#data-generation",children:"datagenned"})," by extending ",(0,r.jsx)(t.code,{children:"ParticleDescriptionProvider"})," and overriding the ",(0,r.jsx)(t.code,{children:"#addDescriptions()"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public class MyParticleDescriptionProvider extends ParticleDescriptionProvider {\n    // Get the parameters from GatherDataEvent.\n    public AMParticleDefinitionsProvider(PackOutput output, ExistingFileHelper existingFileHelper) {\n        super(output, existingFileHelper);\n    }\n\n    // Assumes that all the referenced particles actually exists. Replace "examplemod" with your mod id.\n    @Override\n    protected void addDescriptions() {\n        // Adds a single sprite particle definition with the file at\n        // assets/examplemod/textures/particle/my_single_particle.png.\n        sprite(MyParticleTypes.MY_SINGLE_PARTICLE.get(), new ResourceLocation("examplemod", "my_single_particle"));\n        // Adds a multi sprite particle definition, with a vararg parameter. Alternatively accepts a list.\n        spriteSet(MyParticleTypes.MY_MULTI_PARTICLE.get(),\n            new ResourceLocation("examplemod", "my_multi_particle_0"),\n            new ResourceLocation("examplemod", "my_multi_particle_1"),\n            new ResourceLocation("examplemod", "my_multi_particle_2")\n        );\n        // Alternative for the above, appends "_<index>" to the base name given, for the given amount of textures.\n        spriteSet(MyParticleTypes.MY_ALT_MULTI_PARTICLE.get(),\n            // The base name.\n            new ResourceLocation("examplemod", "my_multi_particle"),\n            // The amount of textures.\n            3,\n            // Whether to reverse the list, i.e. start at the last element instead of the first.\n            false\n        );\n    }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Don't forget to add the provider to the ",(0,r.jsx)(t.code,{children:"GatherDataEvent"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"@SubscribeEvent\npublic static void gatherData(GatherDataEvent event) {\n    DataGenerator generator = event.getGenerator();\n    PackOutput output = generator.getPackOutput();\n    ExistingFileHelper existingFileHelper = event.getExistingFileHelper();\n\n    // other providers here\n    generator.addProvider(\n        event.includeClient(),\n        new MyParticleDescriptionProvider(output, existingFileHelper)\n    );\n}\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"custom-particletypes",children:["Custom ",(0,r.jsx)(t.code,{children:"ParticleType"}),"s"]}),"\n",(0,r.jsxs)(t.p,{children:["While for most cases ",(0,r.jsx)(t.code,{children:"SimpleParticleType"})," suffices, it is sometimes necessary to attach additional data to the particle on the server side. This is where a custom ",(0,r.jsx)(t.code,{children:"ParticleType"})," and an associated custom ",(0,r.jsx)(t.code,{children:"ParticleOptions"})," are required. Let's start with the ",(0,r.jsx)(t.code,{children:"ParticleOptions"}),", as that is where the information is actually stored:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public class MyParticleOptions implements ParticleOptions {\n    \n    // Read and write information, typically for use in commands\n    // Since there is no information in this type, this will be an empty string\n    public static final MapCodec<MyParticleOptions> CODEC = MapCodec.unit(new MyParticleOptions());\n\n    // Read and write information to the network buffer.\n    public static final StreamCodec<ByteBuf, MyParticleOptions> STREAM_CODEC = StreamCodec.unit(new MyParticleOptions());\n\n    // Does not need any parameters, but may define any fields necessary for the particle to work.\n    public MyParticleOptions() {}\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We then use this ",(0,r.jsx)(t.code,{children:"ParticleOptions"})," implementation in our custom ",(0,r.jsx)(t.code,{children:"ParticleType"}),"..."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public class MyParticleType extends ParticleType<MyParticleOptions> {\n    // The boolean parameter again determines whether to limit particles at lower particle settings.\n    // See implementation of the MyParticleTypes class near the top of the article for more information.\n    public MyParticleType(boolean overrideLimiter) {\n        // Pass the deserializer to super.\n        super(overrideLimiter);\n    }\n\n    @Override\n    public MapCodec<MyParticleOptions> codec() {\n        return MyParticleOptions.CODEC;\n    }\n\n    @Override\n    public StreamCodec<? super RegistryFriendlyByteBuf, MyParticleOptions> streamCodec() {\n        return MyParticleOptions.STREAM_CODEC;\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"... and reference it during registration:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public static final Supplier<MyParticleType> MY_CUSTOM_PARTICLE = PARTICLE_TYPES.register(\n    "my_custom_particle",\n    () -> new MyParticleType(false)\n);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"spawning-particles",children:"Spawning Particles"}),"\n",(0,r.jsxs)(t.p,{children:["As a reminder from before, the server only knows ",(0,r.jsx)(t.code,{children:"ParticleType"}),"s and ",(0,r.jsx)(t.code,{children:"ParticleOption"}),"s, while the client works directly with ",(0,r.jsx)(t.code,{children:"Particle"}),"s provided by ",(0,r.jsx)(t.code,{children:"ParticleProvider"}),"s that are associated with a ",(0,r.jsx)(t.code,{children:"ParticleType"}),". Consequently, the ways in which particles are spawned are vastly different depending on the side you are on."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Common code"}),": Call ",(0,r.jsx)(t.code,{children:"Level#addParticle"})," or ",(0,r.jsx)(t.code,{children:"Level#addAlwaysVisibleParticle"}),". This is the preferred way of creating particles that are visible to everyone."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Client code"}),": Use the common code way. Alternatively, create a ",(0,r.jsx)(t.code,{children:"new Particle()"})," with the particle class of your choice and call ",(0,r.jsx)(t.code,{children:"Minecraft.getInstance().particleEngine#add(Particle)"})," with that particle. Note that particles added this way will only display for the client and thus not be visible to other players."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Server code"}),": Call ",(0,r.jsx)(t.code,{children:"ServerLevel#sendParticles"}),". Used in vanilla by the ",(0,r.jsx)(t.code,{children:"/particle"})," command."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>s});var r=i(7294);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);