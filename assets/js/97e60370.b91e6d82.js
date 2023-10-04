"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[6702],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:i,r[1]=p;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const o={},r="Key Mappings",p={unversionedId:"misc/keymappings",id:"misc/keymappings",title:"Key Mappings",description:"A key mapping, or key binding, defines a particular action that should be tied to an input: mouse click, key press, etc. Each action defined by a key mapping can be checked whenever the client can take an input. Furthermore, each key mapping can be assigned to any input through the Controls option menu.",source:"@site/docs/misc/keymappings.md",sourceDirName:"misc",slug:"/misc/keymappings",permalink:"/Neoforge-Korean-Documentation/docs/misc/keymappings",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Game Tests",permalink:"/Neoforge-Korean-Documentation/docs/misc/gametest"},next:{title:"Forge Update Checker",permalink:"/Neoforge-Korean-Documentation/docs/misc/updatechecker"}},s={},l=[{value:"Registering a <code>KeyMapping</code>",id:"registering-a-keymapping",level:2},{value:"Creating a <code>KeyMapping</code>",id:"creating-a-keymapping",level:2},{value:"Default Inputs",id:"default-inputs",level:3},{value:"<code>IKeyConflictContext</code>",id:"ikeyconflictcontext",level:3},{value:"<code>KeyModifier</code>",id:"keymodifier",level:3},{value:"Checking a <code>KeyMapping</code>",id:"checking-a-keymapping",level:2},{value:"Within the Game",id:"within-the-game",level:3},{value:"Inside a GUI",id:"inside-a-gui",level:3}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"key-mappings"},"Key Mappings"),(0,i.kt)("p",null,"A key mapping, or key binding, defines a particular action that should be tied to an input: mouse click, key press, etc. Each action defined by a key mapping can be checked whenever the client can take an input. Furthermore, each key mapping can be assigned to any input through the ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Options#Controls"},"Controls option menu"),"."),(0,i.kt)("h2",{id:"registering-a-keymapping"},"Registering a ",(0,i.kt)("inlineCode",{parentName:"h2"},"KeyMapping")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyMapping")," can be registered by listening to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterKeyMappingsEvent")," on the ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/events#mod-event-bus"},(0,i.kt)("strong",{parentName:"a"},"mod event bus"))," only on the physical client and calling ",(0,i.kt)("inlineCode",{parentName:"p"},"#register"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// In some physical client only class\n\n// Key mapping is lazily initialized so it doesn't exist until it is registered\npublic static final Lazy<KeyMapping> EXAMPLE_MAPPING = Lazy.of(() -> /*...*/);\n\n// Event is on the mod event bus only on the physical client\n@SubscribeEvent\npublic void registerBindings(RegisterKeyMappingsEvent event) {\n  event.register(EXAMPLE_MAPPING.get());\n}\n")),(0,i.kt)("h2",{id:"creating-a-keymapping"},"Creating a ",(0,i.kt)("inlineCode",{parentName:"h2"},"KeyMapping")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyMapping")," can be created using it's constructor. The ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyMapping")," takes in a ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/internationalization#translatablecontents"},"translation key")," defining the name of the mapping, the default input of the mapping, and the ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/internationalization#translatablecontents"},"translation key")," defining the category the mapping will be put within in the ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Options#Controls"},"Controls option menu"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyMapping")," can be added to a custom category by providing a category ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/internationalization#translatablecontents"},"translation key")," not provided by vanilla. Custom category translation keys should contain the mod id (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"key.categories.examplemod.examplecategory"),").")),(0,i.kt)("h3",{id:"default-inputs"},"Default Inputs"),(0,i.kt)("p",null,"Each key mapping has a default input associated with it. This is provided through ",(0,i.kt)("inlineCode",{parentName:"p"},"InputConstants$Key"),". Each input consists of an ",(0,i.kt)("inlineCode",{parentName:"p"},"InputConstants$Type"),", which defines what device is providing the input, and an integer, which defines the associated identifier of the input on the device."),(0,i.kt)("p",null,"Vanilla provides three types of inputs: ",(0,i.kt)("inlineCode",{parentName:"p"},"KEYSYM"),", which defines a keyboard through the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"GLFW")," key tokens, ",(0,i.kt)("inlineCode",{parentName:"p"},"SCANCODE"),", which defines a keyboard through the platform-specific scancode, and ",(0,i.kt)("inlineCode",{parentName:"p"},"MOUSE"),", which defines a mouse."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is highly recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"KEYSYM")," over ",(0,i.kt)("inlineCode",{parentName:"p"},"SCANCODE")," for keyboards as ",(0,i.kt)("inlineCode",{parentName:"p"},"GLFW")," key tokens are not tied to any particular system. You can read more on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.glfw.org/docs/3.3/input_guide.html#input_key"},"GLFW docs"),".")),(0,i.kt)("p",null,"The integer is dependent on the type provided. All input codes are defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"GLFW"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"KEYSYM")," tokens are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"GLFW_KEY_*")," while ",(0,i.kt)("inlineCode",{parentName:"p"},"MOUSE")," codes are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"GLFW_MOUSE_*"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'new KeyMapping(\n  "key.examplemod.example1", // Will be localized using this translation key\n  InputConstants.Type.KEYSYM, // Default mapping is on the keyboard\n  GLFW.GLFW_KEY_P, // Default key is P\n  "key.categories.misc" // Mapping will be in the misc category\n)\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the key mapping should not be mapped to a default, the input should be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"InputConstants#UNKNOWN"),". The vanilla constructor will require you to extract the input code via ",(0,i.kt)("inlineCode",{parentName:"p"},"InputConstants$Key#getValue")," while the Forge constructor can be supplied the raw input field.")),(0,i.kt)("h3",{id:"ikeyconflictcontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"IKeyConflictContext")),(0,i.kt)("p",null,"Not all mappings are used in every context. Some mappings are only used in a GUI, while others are only used purely in game. To avoid mappings of the same key used in different contexts conflicting with each other, an ",(0,i.kt)("inlineCode",{parentName:"p"},"IKeyConflictContext")," can be assigned."),(0,i.kt)("p",null,"Each conflict context contains two methods: ",(0,i.kt)("inlineCode",{parentName:"p"},"#isActive"),", which defines if the mapping can be used in the current game state, and ",(0,i.kt)("inlineCode",{parentName:"p"},"#conflicts"),", which defines whether the mapping conflicts with a key in the same or different conflict context."),(0,i.kt)("p",null,"Currently, Forge defines three basic contexts through ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyConflictContext"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UNIVERSAL"),", which is the default meaning the key can be used in every context, ",(0,i.kt)("inlineCode",{parentName:"p"},"GUI"),", which means the mapping can only be used when a ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen")," is open, and ",(0,i.kt)("inlineCode",{parentName:"p"},"IN_GAME"),", which means the mapping can only be used if a ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen")," is not open. New conflict contexts can be created by implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"IKeyConflictContext"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'new KeyMapping(\n  "key.examplemod.example2",\n  KeyConflictContext.GUI, // Mapping can only be used when a screen is open\n  InputConstants.Type.MOUSE, // Default mapping is on the mouse\n  GLFW.GLFW_MOUSE_BUTTON_LEFT, // Default mouse input is the left mouse button\n  "key.categories.examplemod.examplecategory" // Mapping will be in the new example category\n)\n')),(0,i.kt)("h3",{id:"keymodifier"},(0,i.kt)("inlineCode",{parentName:"h3"},"KeyModifier")),(0,i.kt)("p",null,"Modders may not want mappings to have the same behavior if a modifier key is held at the same (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," vs ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL + G"),"). To remedy this, Forge adds an additional parameter to the constructor to take in a ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyModifier")," which can apply control (",(0,i.kt)("inlineCode",{parentName:"p"},"KeyModifier#CONTROL"),"), shift (",(0,i.kt)("inlineCode",{parentName:"p"},"KeyModifier#SHIFT"),"), or alt (",(0,i.kt)("inlineCode",{parentName:"p"},"KeyModifier#ALT"),") to any input. ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyModifier#NONE")," is the default and will apply no modifier."),(0,i.kt)("p",null,"A modifier can be added in the ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Options#Controls"},"controls option menu")," by holding down the modifier key and the associated input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'new KeyMapping(\n  "key.examplemod.example3",\n  KeyConflictContext.UNIVERSAL,\n  KeyModifier.SHIFT, // Default mapping requires shift to be held down\n  InputConstants.Type.KEYSYM, // Default mapping is on the keyboard\n  GLFW.GLFW_KEY_G, // Default key is G\n  "key.categories.misc"\n)\n')),(0,i.kt)("h2",{id:"checking-a-keymapping"},"Checking a ",(0,i.kt)("inlineCode",{parentName:"h2"},"KeyMapping")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyMapping")," can be checked to see whether it has been clicked. Depending on when, the mapping can be used in a conditional to apply the associated logic."),(0,i.kt)("h3",{id:"within-the-game"},"Within the Game"),(0,i.kt)("p",null,"Within the game, a mapping should be checked by listening to ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientTickEvent")," on the ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/events#creating-an-event-handler"},(0,i.kt)("strong",{parentName:"a"},"Forge event bus"))," and checking ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyMapping#consumeClick")," within a while loop. ",(0,i.kt)("inlineCode",{parentName:"p"},"#consumeClick")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," only the number of times the input was performed and not already previously handled, so it won't infinitely stall the game."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Event is on the Forge event bus only on the physical client\npublic void onClientTick(ClientTickEvent event) {\n  if (event.phase == TickEvent.Phase.END) { // Only call code once as the tick event is called twice every tick\n    while (EXAMPLE_MAPPING.get().consumeClick()) {\n      // Execute logic to perform on click here\n    }\n  }\n}\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Do not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"InputEvent"),"s as an alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientTickEvent"),". There are separate events for keyboard and mouse inputs only, so they wouldn't handle any additional inputs.")),(0,i.kt)("h3",{id:"inside-a-gui"},"Inside a GUI"),(0,i.kt)("p",null,"Within a GUI, a mapping can be checked within one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"GuiEventListener")," methods using ",(0,i.kt)("inlineCode",{parentName:"p"},"IForgeKeyMapping#isActiveAndMatches"),". The most common methods which can be checked are ",(0,i.kt)("inlineCode",{parentName:"p"},"#keyPressed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"#mouseClicked"),". "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"#keyPressed")," takes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GLFW")," key token, the platform-specific scan code, and a bitfield of the held down modifiers. A key can be checked against a mapping by creating the input using ",(0,i.kt)("inlineCode",{parentName:"p"},"InputConstants#getKey"),". The modifiers are already checked within the mapping methods itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// In some Screen subclass\n@Override\npublic boolean keyPressed(int key, int scancode, int mods) {\n  if (EXAMPLE_MAPPING.get().isActiveAndMatches(InputConstants.getKey(key, scancode))) {\n    // Execute logic to perform on key press here\n    return true;\n  }\n  return super.keyPressed(x, y, button);\n} \n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you do not own the screen which you are trying to check a ",(0,i.kt)("strong",{parentName:"p"},"key")," for, you can listen to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pre")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," events of ",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenEvent$KeyPressed")," on the ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/events#creating-an-event-handler"},(0,i.kt)("strong",{parentName:"a"},"Forge event bus"))," instead.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"#mouseClicked")," takes in the mouse's x position, y position, and the button clicked. A mouse button can be checked against a mapping by creating the input using ",(0,i.kt)("inlineCode",{parentName:"p"},"InputConstants$Type#getOrCreate")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"MOUSE")," input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// In some Screen subclass\n@Override\npublic boolean mouseClicked(double x, double y, int button) {\n  if (EXAMPLE_MAPPING.get().isActiveAndMatches(InputConstants.TYPE.MOUSE.getOrCreate(button))) {\n    // Execute logic to perform on mouse click here\n    return true;\n  }\n  return super.mouseClicked(x, y, button);\n} \n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you do not own the screen which you are trying to check a ",(0,i.kt)("strong",{parentName:"p"},"mouse")," for, you can listen to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pre")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," events of ",(0,i.kt)("inlineCode",{parentName:"p"},"ScreenEvent$MouseButtonPressed")," on the ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/events#creating-an-event-handler"},(0,i.kt)("strong",{parentName:"a"},"Forge event bus"))," instead.")))}m.isMDXComponent=!0}}]);