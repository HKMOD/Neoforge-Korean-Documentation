"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1234],{2655:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>r});var t=i(5893),o=i(1151);const s={},c="Key Mappings",a={id:"misc/keymappings",title:"Key Mappings",description:"A key mapping, or key binding, defines a particular action that should be tied to an input: mouse click, key press, etc. Each action defined by a key mapping can be checked whenever the client can take an input. Furthermore, each key mapping can be assigned to any input through the Controls option menu.",source:"@site/versioned_docs/version-1.20.4/misc/keymappings.md",sourceDirName:"misc",slug:"/misc/keymappings",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/misc/keymappings",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Game Tests",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/misc/gametest"},next:{title:"Resource Locations",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/misc/resourcelocation"}},d={},r=[{value:"Registering a <code>KeyMapping</code>",id:"registering-a-keymapping",level:2},{value:"Creating a <code>KeyMapping</code>",id:"creating-a-keymapping",level:2},{value:"Default Inputs",id:"default-inputs",level:3},{value:"<code>IKeyConflictContext</code>",id:"ikeyconflictcontext",level:3},{value:"<code>KeyModifier</code>",id:"keymodifier",level:3},{value:"Checking a <code>KeyMapping</code>",id:"checking-a-keymapping",level:2},{value:"Within the Game",id:"within-the-game",level:3},{value:"Inside a GUI",id:"inside-a-gui",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"key-mappings",children:"Key Mappings"}),"\n",(0,t.jsxs)(n.p,{children:["A key mapping, or key binding, defines a particular action that should be tied to an input: mouse click, key press, etc. Each action defined by a key mapping can be checked whenever the client can take an input. Furthermore, each key mapping can be assigned to any input through the ",(0,t.jsx)(n.a,{href:"https://minecraft.wiki/w/Options#Controls",children:"Controls option menu"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"registering-a-keymapping",children:["Registering a ",(0,t.jsx)(n.code,{children:"KeyMapping"})]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"KeyMapping"})," can be registered by listening to the ",(0,t.jsx)(n.code,{children:"RegisterKeyMappingsEvent"})," on the ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/events#event-buses",children:(0,t.jsx)(n.strong,{children:"mod event bus"})})," only on the physical client and calling ",(0,t.jsx)(n.code,{children:"#register"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// In some physical client only class\n\n// Key mapping is lazily initialized so it doesn't exist until it is registered\npublic static final Lazy<KeyMapping> EXAMPLE_MAPPING = Lazy.of(() -> /*...*/);\n\n// Event is on the mod event bus only on the physical client\n@SubscribeEvent\npublic void registerBindings(RegisterKeyMappingsEvent event) {\n  event.register(EXAMPLE_MAPPING.get());\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"creating-a-keymapping",children:["Creating a ",(0,t.jsx)(n.code,{children:"KeyMapping"})]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"KeyMapping"})," can be created using it's constructor. The ",(0,t.jsx)(n.code,{children:"KeyMapping"})," takes in a ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/client/i18n#components",children:"translation key"})," defining the name of the mapping, the default input of the mapping, and the ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/client/i18n#components",children:"translation key"})," defining the category the mapping will be put within in the ",(0,t.jsx)(n.a,{href:"https://minecraft.wiki/w/Options#Controls",children:"Controls option menu"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"KeyMapping"})," can be added to a custom category by providing a category ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/client/i18n#components",children:"translation key"})," not provided by vanilla. Custom category translation keys should contain the mod id (e.g. ",(0,t.jsx)(n.code,{children:"key.categories.examplemod.examplecategory"}),")."]})}),"\n",(0,t.jsx)(n.h3,{id:"default-inputs",children:"Default Inputs"}),"\n",(0,t.jsx)(n.p,{children:"Each key mapping has a default input associated with it. This is provided through InputConstants.Key. Each input consists of an InputConstants.Type, which defines what device is providing the input, and an integer, which defines the associated identifier of the input on the device."}),"\n",(0,t.jsxs)(n.p,{children:["Vanilla provides three types of inputs: ",(0,t.jsx)(n.code,{children:"KEYSYM"}),", which defines a keyboard through the provided ",(0,t.jsx)(n.code,{children:"GLFW"})," key tokens, ",(0,t.jsx)(n.code,{children:"SCANCODE"}),", which defines a keyboard through the platform-specific scancode, and ",(0,t.jsx)(n.code,{children:"MOUSE"}),", which defines a mouse."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It is highly recommended to use ",(0,t.jsx)(n.code,{children:"KEYSYM"})," over ",(0,t.jsx)(n.code,{children:"SCANCODE"})," for keyboards as ",(0,t.jsx)(n.code,{children:"GLFW"})," key tokens are not tied to any particular system. You can read more on the ",(0,t.jsx)(n.a,{href:"https://www.glfw.org/docs/3.3/input_guide.html#input_key",children:"GLFW docs"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["The integer is dependent on the type provided. All input codes are defined in ",(0,t.jsx)(n.code,{children:"GLFW"}),": ",(0,t.jsx)(n.code,{children:"KEYSYM"})," tokens are prefixed with ",(0,t.jsx)(n.code,{children:"GLFW_KEY_*"})," while ",(0,t.jsx)(n.code,{children:"MOUSE"})," codes are prefixed with ",(0,t.jsx)(n.code,{children:"GLFW_MOUSE_*"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'new KeyMapping(\n  "key.examplemod.example1", // Will be localized using this translation key\n  InputConstants.Type.KEYSYM, // Default mapping is on the keyboard\n  GLFW.GLFW_KEY_P, // Default key is P\n  "key.categories.misc" // Mapping will be in the misc category\n)\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If the key mapping should not be mapped to a default, the input should be set to ",(0,t.jsx)(n.code,{children:"InputConstants#UNKNOWN"}),". The vanilla constructor will require you to extract the input code via ",(0,t.jsx)(n.code,{children:"InputConstants$Key#getValue"})," while the NeoForge constructor can be supplied the raw input field."]})}),"\n",(0,t.jsx)(n.h3,{id:"ikeyconflictcontext",children:(0,t.jsx)(n.code,{children:"IKeyConflictContext"})}),"\n",(0,t.jsxs)(n.p,{children:["Not all mappings are used in every context. Some mappings are only used in a GUI, while others are only used purely in game. To avoid mappings of the same key used in different contexts conflicting with each other, an ",(0,t.jsx)(n.code,{children:"IKeyConflictContext"})," can be assigned."]}),"\n",(0,t.jsxs)(n.p,{children:["Each conflict context contains two methods: ",(0,t.jsx)(n.code,{children:"#isActive"}),", which defines if the mapping can be used in the current game state, and ",(0,t.jsx)(n.code,{children:"#conflicts"}),", which defines whether the mapping conflicts with a key in the same or different conflict context."]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, NeoForge defines three basic contexts through ",(0,t.jsx)(n.code,{children:"KeyConflictContext"}),": ",(0,t.jsx)(n.code,{children:"UNIVERSAL"}),", which is the default meaning the key can be used in every context, ",(0,t.jsx)(n.code,{children:"GUI"}),", which means the mapping can only be used when a ",(0,t.jsx)(n.code,{children:"Screen"})," is open, and ",(0,t.jsx)(n.code,{children:"IN_GAME"}),", which means the mapping can only be used if a ",(0,t.jsx)(n.code,{children:"Screen"})," is not open. New conflict contexts can be created by implementing ",(0,t.jsx)(n.code,{children:"IKeyConflictContext"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'new KeyMapping(\n  "key.examplemod.example2",\n  KeyConflictContext.GUI, // Mapping can only be used when a screen is open\n  InputConstants.Type.MOUSE, // Default mapping is on the mouse\n  GLFW.GLFW_MOUSE_BUTTON_LEFT, // Default mouse input is the left mouse button\n  "key.categories.examplemod.examplecategory" // Mapping will be in the new example category\n)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"keymodifier",children:(0,t.jsx)(n.code,{children:"KeyModifier"})}),"\n",(0,t.jsxs)(n.p,{children:["Modders may not want mappings to have the same behavior if a modifier key is held at the same (e.g. ",(0,t.jsx)(n.code,{children:"G"})," vs ",(0,t.jsx)(n.code,{children:"CTRL + G"}),"). To remedy this, NeoForge adds an additional parameter to the constructor to take in a ",(0,t.jsx)(n.code,{children:"KeyModifier"})," which can apply control (",(0,t.jsx)(n.code,{children:"KeyModifier#CONTROL"}),"), shift (",(0,t.jsx)(n.code,{children:"KeyModifier#SHIFT"}),"), or alt (",(0,t.jsx)(n.code,{children:"KeyModifier#ALT"}),") to any input. ",(0,t.jsx)(n.code,{children:"KeyModifier#NONE"})," is the default and will apply no modifier."]}),"\n",(0,t.jsxs)(n.p,{children:["A modifier can be added in the ",(0,t.jsx)(n.a,{href:"https://minecraft.wiki/w/Options#Controls",children:"controls option menu"})," by holding down the modifier key and the associated input."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'new KeyMapping(\n  "key.examplemod.example3",\n  KeyConflictContext.UNIVERSAL,\n  KeyModifier.SHIFT, // Default mapping requires shift to be held down\n  InputConstants.Type.KEYSYM, // Default mapping is on the keyboard\n  GLFW.GLFW_KEY_G, // Default key is G\n  "key.categories.misc"\n)\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"checking-a-keymapping",children:["Checking a ",(0,t.jsx)(n.code,{children:"KeyMapping"})]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"KeyMapping"})," can be checked to see whether it has been clicked. Depending on when, the mapping can be used in a conditional to apply the associated logic."]}),"\n",(0,t.jsx)(n.h3,{id:"within-the-game",children:"Within the Game"}),"\n",(0,t.jsxs)(n.p,{children:["Within the game, a mapping should be checked by listening to ",(0,t.jsx)(n.code,{children:"ClientTickEvent"})," on the ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/events#registering-an-event-handler",children:(0,t.jsx)(n.strong,{children:"Forge event bus"})})," and checking ",(0,t.jsx)(n.code,{children:"KeyMapping#consumeClick"})," within a while loop. ",(0,t.jsx)(n.code,{children:"#consumeClick"})," will return ",(0,t.jsx)(n.code,{children:"true"})," only the number of times the input was performed and not already previously handled, so it won't infinitely stall the game."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// Event is on the NeoForge event bus only on the physical client\npublic void onClientTick(ClientTickEvent event) {\n  if (event.phase == TickEvent.Phase.END) { // Only call code once as the tick event is called twice every tick\n    while (EXAMPLE_MAPPING.get().consumeClick()) {\n      // Execute logic to perform on click here\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Do not use the ",(0,t.jsx)(n.code,{children:"InputEvent"}),"s as an alternative to ",(0,t.jsx)(n.code,{children:"ClientTickEvent"}),". There are separate events for keyboard and mouse inputs only, so they wouldn't handle any additional inputs."]})}),"\n",(0,t.jsx)(n.h3,{id:"inside-a-gui",children:"Inside a GUI"}),"\n",(0,t.jsxs)(n.p,{children:["Within a GUI, a mapping can be checked within one of the ",(0,t.jsx)(n.code,{children:"GuiEventListener"})," methods using ",(0,t.jsx)(n.code,{children:"IForgeKeyMapping#isActiveAndMatches"}),". The most common methods which can be checked are ",(0,t.jsx)(n.code,{children:"#keyPressed"})," and ",(0,t.jsx)(n.code,{children:"#mouseClicked"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#keyPressed"})," takes in the ",(0,t.jsx)(n.code,{children:"GLFW"})," key token, the platform-specific scan code, and a bitfield of the held down modifiers. A key can be checked against a mapping by creating the input using ",(0,t.jsx)(n.code,{children:"InputConstants#getKey"}),". The modifiers are already checked within the mapping methods itself."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// In some Screen subclass\n@Override\npublic boolean keyPressed(int key, int scancode, int mods) {\n  if (EXAMPLE_MAPPING.get().isActiveAndMatches(InputConstants.getKey(key, scancode))) {\n    // Execute logic to perform on key press here\n    return true;\n  }\n  return super.keyPressed(x, y, button);\n} \n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you do not own the screen which you are trying to check a ",(0,t.jsx)(n.strong,{children:"key"})," for, you can listen to the ",(0,t.jsx)(n.code,{children:"Pre"})," or ",(0,t.jsx)(n.code,{children:"Post"})," events of ScreenEvent.KeyPressed on the ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/events#registering-an-event-handler",children:(0,t.jsx)(n.strong,{children:"Forge event bus"})})," instead."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#mouseClicked"})," takes in the mouse's x position, y position, and the button clicked. A mouse button can be checked against a mapping by creating the input using ",(0,t.jsx)(n.code,{children:"InputConstants$Type#getOrCreate"})," with the ",(0,t.jsx)(n.code,{children:"MOUSE"})," input."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// In some Screen subclass\n@Override\npublic boolean mouseClicked(double x, double y, int button) {\n  if (EXAMPLE_MAPPING.get().isActiveAndMatches(InputConstants.TYPE.MOUSE.getOrCreate(button))) {\n    // Execute logic to perform on mouse click here\n    return true;\n  }\n  return super.mouseClicked(x, y, button);\n} \n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you do not own the screen which you are trying to check a ",(0,t.jsx)(n.strong,{children:"mouse"})," for, you can listen to the ",(0,t.jsx)(n.code,{children:"Pre"})," or ",(0,t.jsx)(n.code,{children:"Post"})," events of ScreenEvent.MouseButtonPressed on the ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/events#registering-an-event-handler",children:(0,t.jsx)(n.strong,{children:"Forge event bus"})})," instead."]})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>c});var t=i(7294);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);