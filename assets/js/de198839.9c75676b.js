"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={},a="Mod Lifecycle",s={unversionedId:"concepts/lifecycle",id:"concepts/lifecycle",title:"Mod Lifecycle",description:"During the mod loading process, the various lifecycle events are fired on the mod-specific event bus. Many actions are performed during these events, such as registering objects, preparing for data generation, or communicating with other mods.",source:"@site/docs/concepts/lifecycle.md",sourceDirName:"concepts",slug:"/concepts/lifecycle",permalink:"/Neoforge-Korean-Documentation/docs/concepts/lifecycle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0",permalink:"/Neoforge-Korean-Documentation/docs/concepts/internationalization"},next:{title:"Registries",permalink:"/Neoforge-Korean-Documentation/docs/concepts/registries"}},c={},d=[{value:"Registry Events",id:"registry-events",level:2},{value:"Data Generation",id:"data-generation",level:2},{value:"Common Setup",id:"common-setup",level:2},{value:"Sided Setup",id:"sided-setup",level:2},{value:"InterModComms",id:"intermodcomms",level:2}],l={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mod-lifecycle"},"Mod Lifecycle"),(0,o.kt)("p",null,"During the mod loading process, the various lifecycle events are fired on the mod-specific event bus. Many actions are performed during these events, such as ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/registries#methods-for-registering"},"registering objects"),", preparing for ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datagen/"},"data generation"),", or ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/lifecycle#intermodcomms"},"communicating with other mods"),"."),(0,o.kt)("p",null,"Event listeners should be registered either using ",(0,o.kt)("inlineCode",{parentName:"p"},"@EventBusSubscriber(bus = Bus.MOD)")," or in the mod constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Mod.EventBusSubscriber(modid = "mymod", bus = Mod.EventBusSubscriber.Bus.MOD)\npublic class MyModEventSubscriber {\n  @SubscribeEvent\n  static void onCommonSetup(FMLCommonSetupEvent event) { ... }\n}\n\n@Mod("mymod")\npublic class MyMod {\n  public MyMod() {\n    FMLModLoadingContext.get().getModEventBus().addListener(this::onCommonSetup);\n  } \n\n  private void onCommonSetup(FMLCommonSetupEvent event) { ... }\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Most of the lifecycle events are fired in parallel: all mods will concurrently receive the same event."),(0,o.kt)("p",{parentName:"admonition"},"Mods ",(0,o.kt)("em",{parentName:"p"},"must")," take care to be thread-safe, like when calling other mods' APIs or accessing vanilla systems. Defer code for later execution via ",(0,o.kt)("inlineCode",{parentName:"p"},"ParallelDispatchEvent#enqueueWork"),".")),(0,o.kt)("h2",{id:"registry-events"},"Registry Events"),(0,o.kt)("p",null,"The registry events are fired after the mod instance construction. There are two: ",(0,o.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RegisterEvent"),". These events are fired synchronously during mod loading."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent")," allows modders to register their own custom registries, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"RegistryBuilder")," class."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RegisterEvent")," is for ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/registries#methods-for-registering"},"registering objects")," into the registries. The event is fired for each registry. "),(0,o.kt)("h2",{id:"data-generation"},"Data Generation"),(0,o.kt)("p",null,"If the game is setup to run ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datagen/"},"data generators"),", then the ",(0,o.kt)("inlineCode",{parentName:"p"},"GatherDataEvent")," will be the last event to fire. This event is for registering mods' data providers to their associated data generator. This event is also fired synchronously."),(0,o.kt)("h2",{id:"common-setup"},"Common Setup"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent")," is for actions that are common to both physical client and server, such as registering ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datastorage/capabilities"},"capabilities"),"."),(0,o.kt)("h2",{id:"sided-setup"},"Sided Setup"),(0,o.kt)("p",null,"The sided-setup events are fired on their respective ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/sides"},"physical sides"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"FMLClientSetupEvent")," on the physical client, and ",(0,o.kt)("inlineCode",{parentName:"p"},"FMLDedicatedServerSetupEvent")," for the dedicated server. This is where physical side-specific initialization should occur, such as registering client-side key bindings."),(0,o.kt)("h2",{id:"intermodcomms"},"InterModComms"),(0,o.kt)("p",null,"This is where messages can be sent to mods for cross-mod compatibility. There are two events: ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModEnqueueEvent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModProcessEvent"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"InterModComms")," is the class responsible for holding messages for mods. The methods are safe to call during the lifecycle events, as it is backed by a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),"."),(0,o.kt)("p",null,"During the ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModEnqueueEvent"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModComms#sendTo")," to send messages to different mods. These methods take in the mod id that will be sent the message, the key associated with the message data, and a supplier holding the message data. Additionally, the sender of the message can also be specified, but by default it will be the mod id of the caller."),(0,o.kt)("p",null,"Then during the ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModProcessEvent"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModComms#getMessages")," to get a stream of all received messages. The mod id supplied will almost always be the mod id of the mod the method is called on. Additionally, a predicate can be specified to filter out the message keys. This will return a stream of ",(0,o.kt)("inlineCode",{parentName:"p"},"IMCMessage"),"s which hold the sender of the data, the receiver of the data, the data key, and the supplied data itself."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"There are two other lifecycle events: ",(0,o.kt)("inlineCode",{parentName:"p"},"FMLConstructModEvent"),", fired directly after mod instance construction but before the ",(0,o.kt)("inlineCode",{parentName:"p"},"RegisterEvent"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"FMLLoadCompleteEvent"),", fired after the ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModComms")," events, for when the mod loading process is complete.")))}m.isMDXComponent=!0}}]);