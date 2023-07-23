"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=d(n),m=a,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return n?i.createElement(u,s(s({ref:t},c),{},{components:n})):i.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={},s="Sides in Minecraft",r={unversionedId:"concepts/sides",id:"concepts/sides",title:"Sides in Minecraft",description:"A very important concept to understand when modding Minecraft are the two sides: client and server. There are many, many common misconceptions and mistakes regarding siding, which can lead to bugs that might not crash the game, but can rather have unintended and often unpredictable effects.",source:"@site/docs/concepts/sides.md",sourceDirName:"concepts",slug:"/concepts/sides",permalink:"/Neoforge-Korean-Documentation/docs/concepts/sides",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Resources",permalink:"/Neoforge-Korean-Documentation/docs/concepts/resources"},next:{title:"Data Generators",permalink:"/Neoforge-Korean-Documentation/docs/datagen/"}},l={},d=[{value:"Different Kinds of Sides",id:"different-kinds-of-sides",level:2},{value:"Performing Side-Specific Operations",id:"performing-side-specific-operations",level:2},{value:"<code>Level#isClientSide</code>",id:"levelisclientside",level:3},{value:"<code>DistExecutor</code>",id:"distexecutor",level:3},{value:"Thread Groups",id:"thread-groups",level:3},{value:"<code>FMLEnvironment#dist</code> and <code>@OnlyIn</code>",id:"fmlenvironmentdist-and-onlyin",level:3},{value:"Common Mistakes",id:"common-mistakes",level:2},{value:"Reaching Across Logical Sides",id:"reaching-across-logical-sides",level:3},{value:"Writing One-Sided Mods",id:"writing-one-sided-mods",level:2}],c={toc:d},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sides-in-minecraft"},"Sides in Minecraft"),(0,a.kt)("p",null,"A very important concept to understand when modding Minecraft are the two sides: ",(0,a.kt)("em",{parentName:"p"},"client")," and ",(0,a.kt)("em",{parentName:"p"},"server"),". There are many, many common misconceptions and mistakes regarding siding, which can lead to bugs that might not crash the game, but can rather have unintended and often unpredictable effects."),(0,a.kt)("h2",{id:"different-kinds-of-sides"},"Different Kinds of Sides"),(0,a.kt)("p",null,'When we say "client" or "server", it usually follows with a fairly intuitive understanding of what part of the game we are talking about. After all, a client is what the user interacts with, and a server is where the user connects for a multiplayer game. Easy, right?'),(0,a.kt)("p",null,'As it turns out, there can be some ambiguity even with two such terms. Here we disambiguate the four possible meanings of "client" and "server":'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Physical client - The ",(0,a.kt)("em",{parentName:"li"},"physical client")," is the entire program that runs whenever you launch Minecraft from the launcher. All threads, processes, and services that run during the game's graphical, interactable lifetime are part of the physical client."),(0,a.kt)("li",{parentName:"ul"},"Physical server - Often known as the dedicated server, the ",(0,a.kt)("em",{parentName:"li"},"physical server")," is the entire program that runs whenever you launch any sort of ",(0,a.kt)("inlineCode",{parentName:"li"},"minecraft_server.jar")," that does not bring up a playable GUI."),(0,a.kt)("li",{parentName:"ul"},"Logical server - The ",(0,a.kt)("em",{parentName:"li"},"logical server")," is what runs game logic: mob spawning, weather, updating inventories, health, AI, and all other game mechanics. The logical server is present within a physical server, but it also can run inside a physical client together with a logical client, as a single player world. The logical server always runs in a thread named the ",(0,a.kt)("inlineCode",{parentName:"li"},"Server Thread"),"."),(0,a.kt)("li",{parentName:"ul"},"Logical client - The ",(0,a.kt)("em",{parentName:"li"},"logical client")," is what accepts input from the player and relays it to the logical server. In addition, it also receives information from the logical server and makes it available graphically to the player. The logical client runs in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Render Thread"),", though often several other threads are spawned to handle things like audio and chunk render batching.")),(0,a.kt)("p",null,"In the MinecraftForge codebase, the physical side is represented by an enum called ",(0,a.kt)("inlineCode",{parentName:"p"},"Dist"),", while the logical side is represented by an enum called ",(0,a.kt)("inlineCode",{parentName:"p"},"LogicalSide"),"."),(0,a.kt)("h2",{id:"performing-side-specific-operations"},"Performing Side-Specific Operations"),(0,a.kt)("h3",{id:"levelisclientside"},(0,a.kt)("inlineCode",{parentName:"h3"},"Level#isClientSide")),(0,a.kt)("p",null,"This boolean check will be your most used way to check sides. Querying this field on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Level")," object establishes the  ",(0,a.kt)("strong",{parentName:"p"},"logical")," side the level belongs to. That is, if this field is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the level is currently running on the logical client. If the field is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the level is running on the logical server. It follows that the physical server will always contain ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in this field, but we cannot assume that ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," implies a physical server, since this field can also be ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," for the logical server inside a physical client (in other words, a single player world)."),(0,a.kt)("p",null,"Use this check whenever you need to determine if game logic and other mechanics should be run. For example, if you want to damage the player every time they click your block, or have your machine process dirt into diamonds, you should only do so after ensuring ",(0,a.kt)("inlineCode",{parentName:"p"},"#isClientSide")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Applying game logic to the logical client can cause desynchronization (ghost entities, desynchronized stats, etc.) in the best case, and crashes in the worst case."),(0,a.kt)("p",null,"This check should be used as your go-to default. Aside from ",(0,a.kt)("inlineCode",{parentName:"p"},"DistExecutor"),", rarely will you need the other ways of determining side and adjusting behavior."),(0,a.kt)("h3",{id:"distexecutor"},(0,a.kt)("inlineCode",{parentName:"h3"},"DistExecutor")),(0,a.kt)("p",null,'Considering the use of a single "universal" jar for client and server mods, and the separation of the physical sides into two jars, an important question comes to mind: How do we use code that is only present on one physical side? All code in ',(0,a.kt)("inlineCode",{parentName:"p"},"net.minecraft.client")," is only present on the physical client. If any class you write references those names in any way, they will crash the game when that respective class is loaded in an environment where those names do not exist. A very common mistake in beginners is to call ",(0,a.kt)("inlineCode",{parentName:"p"},"Minecraft.getInstance().<doStuff>()")," in block or block entity classes, which will crash any physical server as soon as the class is loaded."),(0,a.kt)("p",null,"How do we resolve this? Luckily, FML has ",(0,a.kt)("inlineCode",{parentName:"p"},"DistExecutor"),", which provides various methods to run different methods on different physical sides, or a single method only on one side."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It is important to understand that FML checks based on the ",(0,a.kt)("strong",{parentName:"p"},"physical")," side. A single player world (logical server + logical client within a physical client) will always use ",(0,a.kt)("inlineCode",{parentName:"p"},"Dist.CLIENT"),"!")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DistExecutor")," works by taking in a supplied supplier executing a method, effectively preventing classloading by taking advantage of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/specs/jvms/se17/html/jvms-6.html#jvms-6.5.invokedynamic"},(0,a.kt)("inlineCode",{parentName:"a"},"invokedynamic")," JVM instruction"),". The executed method should be static and within a different class. Additionally, if no parameters are present for the static method, a method reference should be used instead of a supplier executing a method."),(0,a.kt)("p",null,"There are two main methods within ",(0,a.kt)("inlineCode",{parentName:"p"},"DistExecutor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"#runWhenOn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"#callWhenOn"),". The methods take in the physical side the executing method should run on and the supplied executing method which either runs or returns a result respectively."),(0,a.kt)("p",null,"These two methods are subdivided further into ",(0,a.kt)("inlineCode",{parentName:"p"},"#safe*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"#unsafe*")," variants. Safe and unsafe variants are misnomers for their purposes. The main difference is that when in a development environment, the ",(0,a.kt)("inlineCode",{parentName:"p"},"#safe*")," methods will validate that the supplied executing method is a lambda returning a method reference to another class with an error being thrown otherwise. Within the production environment, ",(0,a.kt)("inlineCode",{parentName:"p"},"#safe*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"#unsafe*")," are functionally the same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// In a client class: ExampleClass\npublic static void unsafeRunMethodExample(Object param1, Object param2) {\n  // ...\n}\n\npublic static Object safeCallMethodExample() {\n  // ...\n}\n\n// In some common class\nDistExecutor.unsafeRunWhenOn(Dist.CLIENT, () -> ExampleClass.unsafeRunMethodExample(var1, var2));\n\nDistExecutor.safeCallWhenOn(Dist.CLIENT, () -> ExampleClass::safeCallMethodExample);\n\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Due to a change in how ",(0,a.kt)("inlineCode",{parentName:"p"},"invokedynamic")," works in Java 9+, all ",(0,a.kt)("inlineCode",{parentName:"p"},"#safe*")," variants of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DistExecutor")," methods throw the original exception wrapped within a ",(0,a.kt)("inlineCode",{parentName:"p"},"BootstrapMethodError")," in the development environment. ",(0,a.kt)("inlineCode",{parentName:"p"},"#unsafe*")," variants or a check to ",(0,a.kt)("a",{parentName:"p",href:"#fmlenvironmentdist-and-onlyin"},(0,a.kt)("inlineCode",{parentName:"a"},"FMLEnvironment#dist"))," should be used instead.")),(0,a.kt)("h3",{id:"thread-groups"},"Thread Groups"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread.currentThread().getThreadGroup() == SidedThreadGroups.SERVER")," is true, it is likely the current thread is on the logical server. Otherwise, it is likely on the logical client. This is useful to retrieve the ",(0,a.kt)("strong",{parentName:"p"},"logical")," side when you do not have access to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Level")," object to check ",(0,a.kt)("inlineCode",{parentName:"p"},"isClientSide"),". It ",(0,a.kt)("em",{parentName:"p"},"guesses")," which logical side you are on by looking at the group of the currently running thread. Because it is a guess, this method should only be used when other options have been exhausted. In nearly every case, you should prefer checking ",(0,a.kt)("inlineCode",{parentName:"p"},"Level#isClientSide"),"."),(0,a.kt)("h3",{id:"fmlenvironmentdist-and-onlyin"},(0,a.kt)("inlineCode",{parentName:"h3"},"FMLEnvironment#dist")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"@OnlyIn")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FMLEnvironment#dist")," holds the ",(0,a.kt)("strong",{parentName:"p"},"physical")," side your code is running on. Since it is determined at startup, it does not rely on guessing to return its result. The number of use cases for this is limited, however."),(0,a.kt)("p",null,"Annotating a method or field with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@OnlyIn(Dist)")," annotation indicates to the loader that the respective member should be completely stripped out of the definition not on the specified ",(0,a.kt)("strong",{parentName:"p"},"physical")," side. Usually, these are only seen when browsing through the decompiled Minecraft code, indicating methods that the Mojang obfuscator stripped out. There is ",(0,a.kt)("strong",{parentName:"p"},"NO")," reason for using this annotation directly. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"DistExecutor")," or a check on ",(0,a.kt)("inlineCode",{parentName:"p"},"FMLEnvironment#dist")," instead."),(0,a.kt)("h2",{id:"common-mistakes"},"Common Mistakes"),(0,a.kt)("h3",{id:"reaching-across-logical-sides"},"Reaching Across Logical Sides"),(0,a.kt)("p",null,"Whenever you want to send information from one logical side to another, you must ",(0,a.kt)("strong",{parentName:"p"},"always")," use network packets. It is incredibly tempting, when in a single player scenario, to directly transfer data from the logical server to the logical client."),(0,a.kt)("p",null,"This is actually very commonly inadvertently done through static fields. Since the logical client and logical server share the same JVM in a single player scenario, both threads writing to and reading from static fields will cause all sorts of race conditions and the classical issues associated with threading."),(0,a.kt)("p",null,"This mistake can also be made explicitly by accessing physical client-only classes such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Minecraft")," from common code that runs or can run on the logical server. This mistake is easy to miss for beginners who debug in a physical client. The code will work there, but it will immediately crash on a physical server."),(0,a.kt)("h2",{id:"writing-one-sided-mods"},"Writing One-Sided Mods"),(0,a.kt)("p",null,'In recent versions, Minecraft Forge has removed a "sidedness" attribute from the mods.toml. This means that your mods are expected to work whether they are loaded on the physical client or the physical server. So for one-sided mods, you would typically register your event handlers inside a ',(0,a.kt)("inlineCode",{parentName:"p"},"DistExecutor#safeRunWhenOn")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"DistExecutor#unsafeRunWhenOn")," instead of directly calling the relevant registration methods in your mod constructor. Basically, if your mod is loaded on the wrong side, it should simply do nothing, listen to no events, and so on. A one-sided mod by nature should not register blocks, items, ... since they would need to be available on the other side, too."),(0,a.kt)("p",null,"Additionally, if your mod is one-sided, it typically does not forbid the user from joining a server that is lacking that mod. Therefore, you should set the ",(0,a.kt)("inlineCode",{parentName:"p"},"displayTest")," property in your ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/gettingstarted/modfiles#modstoml"},"mods.toml")," to whatever value is necessary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[[mods]]\n  # ...\n\n  # MATCH_VERSION means that your mod will cause a red X if the versions on client and server differ. This is the default behaviour and should be what you choose if you have server and client elements to your mod.\n  # IGNORE_SERVER_VERSION means that your mod will not cause a red X if it's present on the server but not on the client. This is what you should use if you're a server only mod.\n  # IGNORE_ALL_VERSION means that your mod will not cause a red X if it's present on the client or the server. This is a special case and should only be used if your mod has no server component.\n  # NONE means that no display test is set on your mod. You need to do this yourself, see IExtensionPoint.DisplayTest for more information. You can define any scheme you wish with this value.\n  # IMPORTANT NOTE: this is NOT an instruction as to which environments (CLIENT or DEDICATED SERVER) your mod loads on. Your mod should load (and maybe do nothing!) whereever it finds itself.\n  displayTest=\"IGNORE_ALL_VERSION\" # MATCH_VERSION is the default if nothing is specified (#optional)\n")),(0,a.kt)("p",null,"If a custom display test is to be used, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"displayTest")," option should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE"),", and an ",(0,a.kt)("inlineCode",{parentName:"p"},"IExtensionPoint$DisplayTest")," extension should be registered:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//Make sure the mod being absent on the other network side does not cause the client to display the server as incompatible\nModLoadingContext.get().registerExtensionPoint(IExtensionPoint.DisplayTest.class, () -> new IExtensionPoint.DisplayTest(() -> NetworkConstants.IGNORESERVERONLY, (a, b) -> true));\n")),(0,a.kt)("p",null,"This tells the client that it should ignore the server version being absent, and the server that it should not tell the client this mod should be present. So this snippet works both for client- and server-only-sided mods."))}p.isMDXComponent=!0}}]);