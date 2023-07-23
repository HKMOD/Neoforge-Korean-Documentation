"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={},s="Game Tests",o={unversionedId:"misc/gametest",id:"misc/gametest",title:"Game Tests",description:"Game Tests are a way to run in-game unit tests. The system was designed to be scalable and in parallel to run large numbers of different tests efficiently. Testing object interactions and behaviors are simply a few of the many applications of this framework.",source:"@site/docs/misc/gametest.mdx",sourceDirName:"misc",slug:"/misc/gametest",permalink:"/Neoforge-Korean-Documentation/en/docs/misc/gametest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Debug Profiler",permalink:"/Neoforge-Korean-Documentation/en/docs/misc/debugprofiler"},next:{title:"Key Mappings",permalink:"/Neoforge-Korean-Documentation/en/docs/misc/keymappings"}},l={},m=[{value:"Creating a Game Test",id:"creating-a-game-test",level:2},{value:"The Test Method",id:"the-test-method",level:3},{value:"Relative Positioning",id:"relative-positioning",level:4},{value:"Successful Completion",id:"successful-completion",level:4},{value:"Scheduling Actions",id:"scheduling-actions",level:4},{value:"Assertions",id:"assertions",level:4},{value:"Generated Test Methods",id:"generated-test-methods",level:3},{value:"TestFunction",id:"testfunction",level:4},{value:"Batching",id:"batching",level:3},{value:"Registering a Game Test",id:"registering-a-game-test",level:2},{value:"GameTestHolder",id:"gametestholder",level:3},{value:"RegisterGameTestsEvent",id:"registergametestsevent",level:3},{value:"Structure Templates",id:"structure-templates",level:2},{value:"Running Game Tests",id:"running-game-tests",level:2},{value:"Buildscript Configurations",id:"buildscript-configurations",level:2},{value:"Enabling Other Namespaces",id:"enabling-other-namespaces",level:3},{value:"Game Test Server Run Configuration",id:"game-test-server-run-configuration",level:3},{value:"Enabling Game Tests in Other Run Configurations",id:"enabling-game-tests-in-other-run-configurations",level:3}],p={toc:m},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"game-tests"},"Game Tests"),(0,i.kt)("p",null,"Game Tests are a way to run in-game unit tests. The system was designed to be scalable and in parallel to run large numbers of different tests efficiently. Testing object interactions and behaviors are simply a few of the many applications of this framework."),(0,i.kt)("h2",{id:"creating-a-game-test"},"Creating a Game Test"),(0,i.kt)("p",null,"A standard Game Test follows three basic steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A structure, or template, is loaded holding the scene on which the interaction or behavior is tested."),(0,i.kt)("li",{parentName:"ol"},"A method conducts the logic to perform on the scene."),(0,i.kt)("li",{parentName:"ol"},"The method logic executes. If a successful state is reached, then the test succeeds. Otherwise, the test fails and the result is stored within a lectern adjacent to the scene.")),(0,i.kt)("p",null,"As such, to create a Game Test, there must be an existing template holding the initial start state of the scene and a method which provides the logic of execution."),(0,i.kt)("h3",{id:"the-test-method"},"The Test Method"),(0,i.kt)("p",null,"A Game Test method is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Consumer<GameTestHelper>")," reference, meaning it takes in a ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestHelper")," and returns nothing. For a Game Test method to be recognized, it must have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTest")," annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleGameTests {\n  @GameTest\n  public static void exampleTest(GameTestHelper helper) {\n    // Do stuff\n  }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTest")," annotation also contains members which configure how the game test should run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// In some class\n@GameTest(\n  setupTicks = 20L, // The test spends 20 ticks to set up for execution\n  required = false // The failure is logged but does not affect the execution of the batch\n)\npublic static void exampleConfiguredTest(GameTestHelper helper) {\n  // Do stuff\n}\n")),(0,i.kt)("h4",{id:"relative-positioning"},"Relative Positioning"),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestHelper")," methods translate relative coordinates within the structure template scene to its absolute coordinates using the structure block's current location. To allow for easy conversion between relative and absolute positioning, ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestHelper#absolutePos")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestHelper#relativePos")," can be used respectively."),(0,i.kt)("p",null,"The relative position of a structure template can be obtained in-game by loading the structure via the ",(0,i.kt)("a",{parentName:"p",href:"#running-game-tests"},"test command"),", placing the player at the wanted location, and finally running the ",(0,i.kt)("inlineCode",{parentName:"p"},"/test pos")," command. This will grab the coordinates of the player relative to the closest structure within 200 blocks of the player. The command will export the relative position as a copyable text component in the chat to be used as a final local variable."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The local variable generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"/test pos")," can specify its reference name by appending it to the end of the command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/test pos <var> # Exports 'final BlockPos <var> = new BlockPos(...);'\n"))),(0,i.kt)("h4",{id:"successful-completion"},"Successful Completion"),(0,i.kt)("p",null,"A Game Test method is responsible for one thing: marking the test was successful on a valid completion. If no success state was achieved before the timeout is reached (as defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTest#timeoutTicks"),"), then the test automatically fails."),(0,i.kt)("p",null,"There are many abstracted methods within ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestHelper")," which can be used to define a successful state; however, four are extremely important to be aware of."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"#succeed")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The test is marked as successful.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"#succeedIf")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The supplied ",(0,i.kt)("inlineCode",{parentName:"td"},"Runnable")," is tested immediately and succeeds if no ",(0,i.kt)("inlineCode",{parentName:"td"},"GameTestAssertException")," is thrown. If the test does not succeed on the immediate tick, then it is marked as a failure.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"#succeedWhen")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The supplied ",(0,i.kt)("inlineCode",{parentName:"td"},"Runnable")," is tested every tick until timeout and succeeds if the check on one of the ticks does not throw a ",(0,i.kt)("inlineCode",{parentName:"td"},"GameTestAssertException"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"#succeedOnTickWhen")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The supplied ",(0,i.kt)("inlineCode",{parentName:"td"},"Runnable")," is tested on the specified tick and will succeed if no ",(0,i.kt)("inlineCode",{parentName:"td"},"GameTestAssertException")," is thrown. If the ",(0,i.kt)("inlineCode",{parentName:"td"},"Runnable")," succeeds on any other tick, then it is marked as a failure.")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Game Tests are executed every tick until the test is marked as a success. As such, methods which schedule success on a given tick must be careful to always fail on any previous tick.")),(0,i.kt)("h4",{id:"scheduling-actions"},"Scheduling Actions"),(0,i.kt)("p",null,"Not all actions will occur when a test begins. Actions can be scheduled to occur at specific times or intervals:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"#runAtTickTime")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The action is ran on the specified tick.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"#runAfterDelay")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The action is ran ",(0,i.kt)("inlineCode",{parentName:"td"},"x")," ticks after the current tick.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"#onEachTick")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The action is ran every tick.")))),(0,i.kt)("h4",{id:"assertions"},"Assertions"),(0,i.kt)("p",null,"At any time during a Game Test, an assertion can be made to check if a given condition is true. There are numerous assertion methods within ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestHelper"),"; however, it simplifies to throwing a ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestAssertException")," whenever the appropriate state is not met."),(0,i.kt)("h3",{id:"generated-test-methods"},"Generated Test Methods"),(0,i.kt)("p",null,"If Game Test methods need to be generated dynamically, a test method generator can be created. These methods take in no parameters and return a collection of ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFunction"),"s. For a test method generator to be recognized, it must have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTestGenerator")," annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleGameTests {\n  @GameTestGenerator\n  public static Collection<TestFunction> exampleTests() {\n    // Return a collection of TestFunctions\n  }\n}\n")),(0,i.kt)("h4",{id:"testfunction"},"TestFunction"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFunction")," is the boxed information held by the ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTest")," annotation and the method running the test."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Any methods annotated using ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTest")," are translated into a ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFunction")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestRegistry#turnMethodIntoTestFunction"),". That method can be used as a reference for creating ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFunction"),"s without the use of the annotation.")),(0,i.kt)("h3",{id:"batching"},"Batching"),(0,i.kt)("p",null,"Game Tests can be executed in batches instead of registration order. A test can be added to a batch by having the same supplied ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTest#batch")," string."),(0,i.kt)("p",null,"On its own, batching does not provide anything useful. However, batching can be used to perform setup and teardown states on the current level the tests are running in. This is done by annotating a method with either ",(0,i.kt)("inlineCode",{parentName:"p"},"@BeforeBatch")," for setup or ",(0,i.kt)("inlineCode",{parentName:"p"},"@AfterBatch")," for takedown. The ",(0,i.kt)("inlineCode",{parentName:"p"},"#batch")," methods must match the string supplied to the game test."),(0,i.kt)("p",null,"Batch methods are ",(0,i.kt)("inlineCode",{parentName:"p"},"Consumer<ServerLevel>")," references, meaning they take in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerLevel")," and return nothing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class ExampleGameTests {\n  @BeforeBatch(batch = "firstBatch")\n  public static void beforeTest(ServerLevel level) {\n    // Perform setup\n  }\n\n  @GameTest(batch = "firstBatch")\n  public static void exampleTest2(GameTestHelper helper) {\n    // Do stuff\n  }\n}\n')),(0,i.kt)("h2",{id:"registering-a-game-test"},"Registering a Game Test"),(0,i.kt)("p",null,"A Game Test must be registered to be ran in-game. There are two methods of doing so: via the ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTestHolder")," annotation or ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterGameTestsEvent"),". Both registration methods still require the test methods to be annotated with either ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTest"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTestGenerator"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@BeforeBatch"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"@AfterBatch"),"."),(0,i.kt)("h3",{id:"gametestholder"},"GameTestHolder"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTestHolder")," annotation registers any test methods within the type (class, interface, enum, or record). ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTestHolder")," contains a single method which has multiple uses. In this instance, the supplied ",(0,i.kt)("inlineCode",{parentName:"p"},"#value")," must be the mod id of the mod; otherwise, the test will not run under default configurations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@GameTestHolder(MODID)\npublic class ExampleGameTests {\n  // ...\n}\n")),(0,i.kt)("h3",{id:"registergametestsevent"},"RegisterGameTestsEvent"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RegisterGameTestsEvent")," can also register either classes or methods using ",(0,i.kt)("inlineCode",{parentName:"p"},"#register"),". The event listener must be ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/events#creating-an-event-handler"},"added")," to the mod event bus. Test methods registered this way must supply their mod id to ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTest#templateNamespace")," on every method annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTest"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// In some class\npublic void registerTests(RegisterGameTestsEvent event) {\n  event.register(ExampleGameTests.class);\n}\n\n// In ExampleGameTests\n@GameTest(templateNamespace = MODID)\npublic static void exampleTest3(GameTestHelper helper) {\n  // Perform setup\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The value supplied to ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestHolder#value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTest#templateNamespace")," can be different from the current mod id. The configuration within the ",(0,i.kt)("a",{parentName:"p",href:"#enabling-other-namespaces"},"buildscript")," would need to be changed.")),(0,i.kt)("h2",{id:"structure-templates"},"Structure Templates"),(0,i.kt)("p",null,"Game Tests are performed within scenes loaded by structures, or templates. All templates define the dimensions of the scene and the initial data (blocks and entities) that will be loaded. The template must be stored as an ",(0,i.kt)("inlineCode",{parentName:"p"},".nbt")," file within ",(0,i.kt)("inlineCode",{parentName:"p"},"data/<namespace>/structures"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A structure template can be created and saved using a structure block.")),(0,i.kt)("p",null,"The location of the template is specified by a few factors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the namespace of the template is specified."),(0,i.kt)("li",{parentName:"ul"},"If the class should be prepended to the name of the template."),(0,i.kt)("li",{parentName:"ul"},"If the name of the template is specified.")),(0,i.kt)("p",null,"The namespace of the template is determined by ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTest#templateNamespace"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestHolder#value")," if not specified, then ",(0,i.kt)("inlineCode",{parentName:"p"},"minecraft")," if neither is specified."),(0,i.kt)("p",null,"The simple class name is not prepended to the name of the template if the ",(0,i.kt)("inlineCode",{parentName:"p"},"@PrefixGameTestTemplate")," is applied to a class or method with the test annotations and set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Otherwise, the simple class name is made lowercase and prepended and followed by a dot before the template name."),(0,i.kt)("p",null,"The name of the template is determined by ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTest#template"),". If not specified, then the lowercase name of the method is used instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Modid for all structures will be MODID\n@GameTestHolder(MODID)\npublic class ExampleGameTests {\n\n  // Class name is prepended, template name is not specified\n  // Template Location at 'modid:examplegametests.exampletest'\n  @GameTest\n  public static void exampleTest(GameTestHelper helper) { /*...*/ }\n\n  // Class name is not prepended, template name is not specified\n  // Template Location at 'modid:exampletest2'\n  @PrefixGameTestTemplate(false)\n  @GameTest\n  public static void exampleTest2(GameTestHelper helper) { /*...*/ }\n\n  // Class name is prepended, template name is specified\n  // Template Location at 'modid:examplegametests.test_template'\n  @GameTest(template = \"test_template\")\n  public static void exampleTest3(GameTestHelper helper) { /*...*/ }\n\n  // Class name is not prepended, template name is specified\n  // Template Location at 'modid:test_template2'\n  @PrefixGameTestTemplate(false)\n  @GameTest(template = \"test_template2\")\n  public static void exampleTest4(GameTestHelper helper) { /*...*/ }\n}\n")),(0,i.kt)("h2",{id:"running-game-tests"},"Running Game Tests"),(0,i.kt)("p",null,"Game Tests can be run using the ",(0,i.kt)("inlineCode",{parentName:"p"},"/test")," command. The ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," command is highly configurable; however, only a few are of importance to running tests:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Subcommand"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"run")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Runs the specified test: ",(0,i.kt)("inlineCode",{parentName:"td"},"run <test_name>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"runall")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Runs all available tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"runthis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Runs the nearest test to the player within 15 blocks.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"runthese")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Runs tests within 200 blocks of the player.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"runfailed")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Runs all tests that failed in the previous run.")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Subcommands follow the test command: ",(0,i.kt)("inlineCode",{parentName:"p"},"/test <subcommand>"),".")),(0,i.kt)("h2",{id:"buildscript-configurations"},"Buildscript Configurations"),(0,i.kt)("p",null,"Game Tests provide additional configuration settings within a buildscript (the ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file) to run and integrate into different settings."),(0,i.kt)("h3",{id:"enabling-other-namespaces"},"Enabling Other Namespaces"),(0,i.kt)("p",null,"If the buildscript was ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/gettingstarted/#simple-buildgradle-customizations"},"setup as recommended"),", then only Game Tests under the current mod id would be enabled. To enable other namespaces to load Game Tests from, a run configuration must set the property ",(0,i.kt)("inlineCode",{parentName:"p"},"forge.enabledGameTestNamespaces")," to a string specifying each namespace separated by a comma. If the property is empty or not set, then all namespaces will be loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"// Inside a run configuration\nproperty 'forge.enabledGameTestNamespaces', 'modid1,modid2,modid3'\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"There must be no spaces in-between namespaces; otherwise, the namespace will not be loaded correctly.")),(0,i.kt)("h3",{id:"game-test-server-run-configuration"},"Game Test Server Run Configuration"),(0,i.kt)("p",null,"The Game Test Server is a special configuration which runs a build server. The build server returns an exit code of the number of required, failed Game Tests. All failed tests, whether required or optional, are logged. This server can be run using ",(0,i.kt)("inlineCode",{parentName:"p"},"gradlew runGameTestServer"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Important infromation on FG5"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Due to a quirk in how Gradle works, by default, if a task forces a system exit, the Gradle daemon will be killed, causing the Gradle runner to report a build failure. ForgeGradle sets by default a force exit on run tasks such that any subprojects are not executed in sequence. However, as such, the Game Test Server will always fail."),(0,i.kt)("p",{parentName:"admonition"},"This can be fixed by disabling the force exit on the run configuration using the ",(0,i.kt)("inlineCode",{parentName:"p"},"#setForceExit")," method:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"// Game Test Server run configuration\ngameTestServer {\n    // ...\n    setForceExit false\n}\n")))),(0,i.kt)("h3",{id:"enabling-game-tests-in-other-run-configurations"},"Enabling Game Tests in Other Run Configurations"),(0,i.kt)("p",null,"By default, only the ",(0,i.kt)("inlineCode",{parentName:"p"},"client"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"server"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"gameTestServer")," run configurations have Game Tests enabled. If another run configuration should run Game Tests, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"forge.enableGameTest")," property must be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"// Inside a run configuration\nproperty 'forge.enableGameTest', 'true'\n")))}c.isMDXComponent=!0}}]);