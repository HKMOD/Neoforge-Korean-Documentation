"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={},i="Codecs",l={unversionedId:"datastorage/codecs",id:"datastorage/codecs",title:"Codecs",description:"Codecs are a serialization tool from Mojang's [DataFixerUpper] used to describe how objects can be transformed between different formats, such as JsonElements for JSON and Tags for NBT.",source:"@site/docs/datastorage/codecs.md",sourceDirName:"datastorage",slug:"/datastorage/codecs",permalink:"/Neoforge-Korean-Documentation/docs/datastorage/codecs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\uce90\ud328\ube4c\ub9ac\ud2f0",permalink:"/Neoforge-Korean-Documentation/docs/datastorage/capabilities"},next:{title:"\ub808\ubca8 \uc800\uc7a5 \ub370\uc774\ud130",permalink:"/Neoforge-Korean-Documentation/docs/datastorage/saveddata"}},d={},s=[{value:"Using Codecs",id:"using-codecs",level:2},{value:"DynamicOps",id:"dynamicops",level:3},{value:"Format Conversion",id:"format-conversion",level:4},{value:"DataResult",id:"dataresult",level:3},{value:"Existing Codecs",id:"existing-codecs",level:2},{value:"Primitives",id:"primitives",level:3},{value:"Vanilla and Forge",id:"vanilla-and-forge",level:3},{value:"Creating Codecs",id:"creating-codecs",level:2},{value:"Records",id:"records",level:3},{value:"Fields",id:"fields",level:4},{value:"Transformers",id:"transformers",level:3},{value:"Range Codecs",id:"range-codecs",level:4},{value:"Defaults",id:"defaults",level:3},{value:"Unit",id:"unit",level:3},{value:"List",id:"list",level:3},{value:"Map",id:"map",level:3},{value:"Pair",id:"pair",level:3},{value:"Either",id:"either",level:3},{value:"Dispatch",id:"dispatch",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"codecs"},"Codecs"),(0,o.kt)("p",null,"Codecs are a serialization tool from Mojang's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Mojang/DataFixerUpper"},"DataFixerUpper")," used to describe how objects can be transformed between different formats, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonElement"),"s for JSON and ",(0,o.kt)("inlineCode",{parentName:"p"},"Tag"),"s for NBT."),(0,o.kt)("h2",{id:"using-codecs"},"Using Codecs"),(0,o.kt)("p",null,"Codecs are primarily used to encode, or serialize, Java objects to some data format type and decode, or deserialize, formatted data objects back to its associated Java type. This is typically accomplished using ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#encodeStart")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#parse"),", respectively."),(0,o.kt)("h3",{id:"dynamicops"},"DynamicOps"),(0,o.kt)("p",null,"To determine what intermediate file format to encode and decode to, both ",(0,o.kt)("inlineCode",{parentName:"p"},"#encodeStart")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#parse")," require a ",(0,o.kt)("inlineCode",{parentName:"p"},"DynamicOps")," instance to define the data within that format."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Mojang/DataFixerUpper"},"DataFixerUpper")," library contains ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonOps")," to codec JSON data stored in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/gson"},(0,o.kt)("inlineCode",{parentName:"a"},"Gson"),"'s")," ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonElement")," instances. ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonOps")," supports two versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonElement")," serialization: ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonOps#INSTANCE")," which defines a standard JSON file, and ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonOps#COMPRESSED")," which allows data to be compressed into a single string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Let exampleCodec represent a Codec<ExampleJavaObject>\n// Let exampleObject be a ExampleJavaObject\n// Let exampleJson be a JsonElement\n\n// Encode Java object to regular JsonElement\nexampleCodec.encodeStart(JsonOps.INSTANCE, exampleObject);\n\n// Encode Java object to compressed JsonElement\nexampleCodec.encodeStart(JsonOps.COMPRESSED, exampleObject);\n\n// Decode JsonElement into Java object\n// Assume JsonElement was parsed normally\nexampleCodec.parse(JsonOps.INSTANCE, exampleJson);\n")),(0,o.kt)("p",null,"Minecraft also provides ",(0,o.kt)("inlineCode",{parentName:"p"},"NbtOps")," to codec NBT data stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"Tag")," instances. This can be referenced using ",(0,o.kt)("inlineCode",{parentName:"p"},"NbtOps#INSTANCE"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Let exampleCodec represent a Codec<ExampleJavaObject>\n// Let exampleObject be a ExampleJavaObject\n// Let exampleNbt be a Tag\n\n// Encode Java object to Tag\nexampleCodec.encodeStart(JsonOps.INSTANCE, exampleObject);\n\n// Decode Tag into Java object\nexampleCodec.parse(JsonOps.INSTANCE, exampleNbt);\n")),(0,o.kt)("h4",{id:"format-conversion"},"Format Conversion"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DynamicOps")," can also be used separately to convert between two different encoded formats. This can be done using ",(0,o.kt)("inlineCode",{parentName:"p"},"#convertTo")," and supplying the ",(0,o.kt)("inlineCode",{parentName:"p"},"DynamicOps")," format and the encoded object to convert."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Convert Tag to JsonElement\n// Let exampleTag be a Tag\nJsonElement convertedJson = NbtOps.INSTANCE.convertTo(JsonOps.INSTANCE, exampleTag);\n")),(0,o.kt)("h3",{id:"dataresult"},"DataResult"),(0,o.kt)("p",null,"Encoded or decoded data using codecs return a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataResult")," which holds the converted instance or some error data depending on whether the conversion was successful. When the conversion is successful, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," supplied by ",(0,o.kt)("inlineCode",{parentName:"p"},"#result")," will contain the successfully converted object. If the conversion fails, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," supplied by ",(0,o.kt)("inlineCode",{parentName:"p"},"#error")," will contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"PartialResult"),", which holds the error message and a partially converted object depending on the codec."),(0,o.kt)("p",null,"Additionally, there are many methods on ",(0,o.kt)("inlineCode",{parentName:"p"},"DataResult")," that can be used to transform the result or error into the desired format. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"#resultOrPartial")," will return an ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," containing the result on success, and the partially converted object on failure. The method takes in a string consumer to determine how to report the error message if present."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Let exampleCodec represent a Codec<ExampleJavaObject>\n// Let exampleJson be a JsonElement\n\n// Decode JsonElement into Java object\nDataResult<ExampleJavaObject> result = exampleCodec.parse(JsonOps.INSTANCE, exampleJson);\n\nresult\n  // Get result or partial on error, report error message\n  .resultOrPartial(errorMessage -> /* Do something with error message */)\n  // If result or partial is present, do something\n  .ifPresent(decodedObject -> /* Do something with decoded object */);\n")),(0,o.kt)("h2",{id:"existing-codecs"},"Existing Codecs"),(0,o.kt)("h3",{id:"primitives"},"Primitives"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec")," class contains static instances of codecs for certain defined primitives."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Codec"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Java Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"BYTE")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Byte"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"SHORT")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Short"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"INT")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Integer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"LONG")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Long"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"FLOAT")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Float"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"DOUBLE")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Double"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"STRING")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"BYTE_BUFFER")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ByteBuffer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"INT_STREAM")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"IntStream"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"LONG_STREAM")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"LongStream"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"PASSTHROUGH")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Dynamic<?>"),"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"EMPTY")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Unit"),"*","*")))),(0,o.kt)("p",null,"*"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Dynamic")," is an object which holds a value encoded in a supported ",(0,o.kt)("inlineCode",{parentName:"p"},"DynamicOps")," format. These are typically used to convert encoded object formats into other encoded object formats."),(0,o.kt)("p",null,"*","*"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Unit")," is an object used to represent ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," objects."),(0,o.kt)("h3",{id:"vanilla-and-forge"},"Vanilla and Forge"),(0,o.kt)("p",null,"Minecraft and Forge define many codecs for objects that are frequently encoded and decoded. Some examples include ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceLocation#CODEC")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),"s, ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtraCodecs#INSTANT_ISO8601")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Instant"),"s in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTimeFormatter#ISO_INSTANT")," format, and ",(0,o.kt)("inlineCode",{parentName:"p"},"CompoundTag#CODEC")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"CompoundTag"),"s."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"CompoundTag"),"s cannot decode lists of numbers from JSON using ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonOps"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonOps"),", when converting, sets a number to its most narrow type. ",(0,o.kt)("inlineCode",{parentName:"p"},"ListTag"),"s force a specific type for its data, so numbers with different types (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"64")," would be ",(0,o.kt)("inlineCode",{parentName:"p"},"byte"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"384")," would be ",(0,o.kt)("inlineCode",{parentName:"p"},"short"),") will throw an error on conversion.")),(0,o.kt)("p",null,"Vanilla and Forge registries also have codecs for the type of object the registry contains (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Registry#BLOCK")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeRegistries#BLOCKS")," have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec<Block>"),"). ",(0,o.kt)("inlineCode",{parentName:"p"},"Registry#byNameCodec")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"IForgeRegistry#getCodec")," will encode the registry object to their registry name, or an integer identifier if compressed. Vanilla registries also have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Registry#holderByNameCodec")," which encodes to a registry name and decodes to the registry object wrapped in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Holder"),"."),(0,o.kt)("h2",{id:"creating-codecs"},"Creating Codecs"),(0,o.kt)("p",null,"Codecs can be created for encoding and decoding any object. For understanding purposes, the equivalent encoded JSON will be shown."),(0,o.kt)("h3",{id:"records"},"Records"),(0,o.kt)("p",null,"Codecs can define objects through the use of records. Each record codec defines any object with explicit named fields. There are many ways to create a record codec, but the simplest is via ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordCodecBuilder#create"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RecordCodecBuilder#create")," takes in a function which defines an ",(0,o.kt)("inlineCode",{parentName:"p"},"Instance")," and returns an application (",(0,o.kt)("inlineCode",{parentName:"p"},"App"),") of the object. A correlation can be drawn to creating a class ",(0,o.kt)("em",{parentName:"p"},"instance")," and the constructors used to ",(0,o.kt)("em",{parentName:"p"},"apply")," the class to the constructed object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Some object to create a codec for\npublic class SomeObject {\n\n  public SomeObject(String s, int i, boolean b) { /* ... */ }\n\n  public String s() { /* ... */ }\n\n  public int i() { /* ... */ }\n\n  public boolean b() { /* ... */ }\n}\n")),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"Instance")," can define up to 16 fields using ",(0,o.kt)("inlineCode",{parentName:"p"},"#group"),". Each field must be an application defining the instance the object is being made for and the type of the object. The simplest way to meet this requirement is by taking a ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec"),", setting the name of the field to decode from, and setting the getter used to encode the field."),(0,o.kt)("p",null,"A field can be created from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"#fieldOf"),", if the field is required, or ",(0,o.kt)("inlineCode",{parentName:"p"},"#optionalFieldOf"),", if the field is wrapped in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," or defaulted. Either method requires a string containing the name of the field in the encoded object. The getter used to encode the field can then be set using ",(0,o.kt)("inlineCode",{parentName:"p"},"#forGetter"),", taking in a function which given the object, returns the field data."),(0,o.kt)("p",null,"From there, the resulting product can be applied via ",(0,o.kt)("inlineCode",{parentName:"p"},"#apply")," to define how the instance should construct the object for the application. For ease of convenience, the grouped fields should be listed in the same order they appear in the constructor such that the function can simply be a constructor method reference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static final Codec<SomeObject> RECORD_CODEC = RecordCodecBuilder.create(instance -> // Given an instance\n  instance.group( // Define the fields within the instance\n    Codec.STRING.fieldOf("s").forGetter(SomeObject::s), // String\n    Codec.INT.optionalFieldOf("i", 0).forGetter(SomeObject::i), // Integer, defaults to 0 if field not present\n    Codec.BOOL.fieldOf("b").forGetter(SomeObject::b) // Boolean\n  ).apply(instance, SomeObject::new) // Define how to create the object\n);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Encoded SomeObject\n{\n  "s": "value",\n  "i": 5,\n  "b": false\n}\n\n// Another encoded SomeObject\n{\n  "s": "value2",\n  // i is omitted, defaults to 0\n  "b": true\n}\n')),(0,o.kt)("h3",{id:"transformers"},"Transformers"),(0,o.kt)("p",null,"Codecs can be transformed into equivalent, or partially equivalent, representations through mapping methods. Each mapping method takes in two functions: one to transform the current type into the new type, and one to transform the new type back to the current type. This is done through the ",(0,o.kt)("inlineCode",{parentName:"p"},"#xmap")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// A class\npublic class ClassA {\n\n  public ClassB toB() { /* ... */ }\n}\n\n// Another equivalent class\npublic class ClassB {\n\n  public ClassA toA() { /* ... */ }\n}\n\n// Assume there is some codec A_CODEC\npublic static final Codec<ClassB> B_CODEC = A_CODEC.xmap(ClassA::toB, ClassB::toA);\n")),(0,o.kt)("p",null,"If a type is partially equivalent, meaning that there are some restrictions during conversion, there are mapping functions which return a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataResult")," which can be used to return an error state whenever an exception or invalid state is reached."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Is A Fully Equivalent to B"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Is B Fully Equivalent to A"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Transform Method"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"#xmap"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"#flatComapMap"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"No"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"#comapFlatMap"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"No"),(0,o.kt)("td",{parentName:"tr",align:"center"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"#flatXMap"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Given an string codec to convert to a integer\n// Not all strings can become integers (A is not fully equivalent to B)\n// All integers can become strings (B is fully equivalent to A)\npublic static final Codec<Integer> INT_CODEC = Codec.STRING.comapFlatMap(\n  s -> { // Return data result containing error on failure\n    try {\n      return DataResult.success(Integer.valueOf(s));\n    } catch (NumberFormatException e) {\n      return DataResult.error(s + " is not an integer.");\n    }\n  },\n  Integer::toString // Regular function\n);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Will return 5\n"5"\n\n// Will error, not an integer\n"value"\n')),(0,o.kt)("h4",{id:"range-codecs"},"Range Codecs"),(0,o.kt)("p",null,"Range codecs are an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"#flatXMap")," which returns an error ",(0,o.kt)("inlineCode",{parentName:"p"},"DataResult")," if the value is not inclusively between the set minimum and maximum. The value is still provided as a partial result if outside the bounds. There are implementations for integers, floats, and doubles via ",(0,o.kt)("inlineCode",{parentName:"p"},"#intRange"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"#floatRange"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"#doubleRange")," respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public static final Codec<Integer> RANGE_CODEC = Codec.intRange(0, 4); \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Will be valid, inside [0, 4]\n4\n\n// Will error, outside [0, 4]\n5\n")),(0,o.kt)("h3",{id:"defaults"},"Defaults"),(0,o.kt)("p",null,"If the result of encoding or decoding fails, a default value can be supplied instead via ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#orElse")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#orElseGet"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public static final Codec<Integer> DEFAULT_CODEC = Codec.INT.orElse(0); // Can also be a supplied value via #orElseGet\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Not an integer, defaults to 0\n"value"\n')),(0,o.kt)("h3",{id:"unit"},"Unit"),(0,o.kt)("p",null,"A codec which supplies an in-code value and encodes to nothing can be represented using ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#unit"),". This is useful if a codec uses a non-encodable entry within the data object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public static final Codec<IForgeRegistry<Block>> UNIT_CODEC = Codec.unit(\n  () -> ForgeRegistries.BLOCKS // Can also be a raw value\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Nothing here, will return block registry codec\n")),(0,o.kt)("h3",{id:"list"},"List"),(0,o.kt)("p",null,"A codec for a list of objects can be generated from an object codec via ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#listOf"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// BlockPos#CODEC is a Codec<BlockPos>\npublic static final Codec<List<BlockPos>> LIST_CODEC = BlockPos.CODEC.listOf();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Encoded List<BlockPos>\n[\n  [1, 2, 3], // BlockPos(1, 2, 3)\n  [4, 5, 6], // BlockPos(4, 5, 6)\n  [7, 8, 9]  // BlockPos(7, 8, 9)\n]\n")),(0,o.kt)("p",null,"List objects decoded using a list codec are stored in an ",(0,o.kt)("strong",{parentName:"p"},"immutable")," list. If a mutable list is needed, a ",(0,o.kt)("a",{parentName:"p",href:"#transformer-codecs"},"transformer")," should be applied to the list codec."),(0,o.kt)("h3",{id:"map"},"Map"),(0,o.kt)("p",null,"A codec for a map of keys and value objects can be generated from two codecs via ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#unboundedMap"),". Unbounded maps can specify any string-based or string-transformed value to be a key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// BlockPos#CODEC is a Codec<BlockPos>\npublic static final Codec<Map<String, BlockPos>> MAP_CODEC = Codec.unboundedMap(Codec.STRING, BlockPos.CODEC);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Encoded Map<String, BlockPos>\n{\n  "key1": [1, 2, 3], // key1 -> BlockPos(1, 2, 3)\n  "key2": [4, 5, 6], // key2 -> BlockPos(4, 5, 6)\n  "key3": [7, 8, 9]  // key3 -> BlockPos(7, 8, 9)\n}\n')),(0,o.kt)("p",null,"Map objects decoded using a unbounded map codec are stored in an ",(0,o.kt)("strong",{parentName:"p"},"immutable")," map. If a mutable map is needed, a ",(0,o.kt)("a",{parentName:"p",href:"#transformer-codecs"},"transformer")," should be applied to the map codec."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Unbounded maps only support keys that encode/decode to/from strings. A key-value ",(0,o.kt)("a",{parentName:"p",href:"#pair"},"pair")," list codec can be used to get around this restriction.")),(0,o.kt)("h3",{id:"pair"},"Pair"),(0,o.kt)("p",null,"A codec for pairs of objects can be generated from two codecs via ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#pair"),"."),(0,o.kt)("p",null,"A pair codec decodes objects by first decoding the left object in the pair, then taking the remaining part of the encoded object and decodes the right object from that. As such, the codecs must either express something about the encoded object after decoding (such as ",(0,o.kt)("a",{parentName:"p",href:"#records"},"records"),"), or they have to be augmented into a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapCodec")," and transformed into a regular codec via ",(0,o.kt)("inlineCode",{parentName:"p"},"#codec"),". This can typically done by making the codec a ",(0,o.kt)("a",{parentName:"p",href:"#fields"},"field")," of some object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static final Codec<Pair<Integer, String>> PAIR_CODEC = Codec.pair(\n  Codec.INT.fieldOf("left").codec(),\n  Codec.STRING.fieldOf("right").codec()\n);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Encoded Pair<Integer, String>\n{\n  "left": 5,       // fieldOf looks up \'left\' key for left object\n  "right": "value" // fieldOf looks up \'right\' key for right object\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A map codec with a non-string key can be encoded/decoded using a list of key-value pairs applied with a ",(0,o.kt)("a",{parentName:"p",href:"#transformer-codecs"},"transformer"),".")),(0,o.kt)("h3",{id:"either"},"Either"),(0,o.kt)("p",null,"A codec for two different methods of encoding/decoding some object data can be generated from two codecs via ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#either"),"."),(0,o.kt)("p",null,"An either codec attempts to decode the object using the first codec. If it fails, it attempts to decode using the second codec. If that also fails, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataResult")," will only contain the error from the second codec failure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public static final Codec<Either<Integer, String>> EITHER_CODEC = Codec.either(\n  Codec.INT,\n  Codec.STRING\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Encoded Either$Left<Integer, String>\n5\n\n// Encoded Either$Right<Integer, String>\n"value"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This can be used in conjunction with a ",(0,o.kt)("a",{parentName:"p",href:"#transformer-codecs"},"transformer")," to get a specific object from two different methods of encoding.")),(0,o.kt)("h3",{id:"dispatch"},"Dispatch"),(0,o.kt)("p",null,"Codecs can have subcodecs which can decode a particular object based upon some specified type via ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec#dispatch"),". This is typically used in registries which contain codecs, such as rule tests or block placers."),(0,o.kt)("p",null,"A dispatch codec first attempts to get the encoded type from some string key (usually ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"). From there, the type is decoded, calling a getter for the specific codec used to decode the actual object. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"DynamicOps")," used to decode the object compresses its maps, or the object codec itself is not augmented into a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapCodec")," (such as records or fielded primitives), then the object needs to be stored within a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," key. Otherwise, the object is decoded at the same level as the rest of the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Define our object\npublic abstract class ExampleObject {\n\n  // Define the method used to specify the object type for encoding\n  public abstract Codec<? extends ExampleObject> type();\n}\n\n// Create simple object which stores a string\npublic class StringObject extends ExampleObject {\n\n  public StringObject(String s) { /* ... */ }\n\n  public String s() { /* ... */ }\n\n  public Codec<? extends ExampleObject> type() {\n    // A registered registry object\n    // "string":\n    //   Codec.STRING.xmap(StringObject::new, StringObject::s)\n    return STRING_OBJECT_CODEC.get();\n  }\n}\n\n// Create complex object which stores a string and integer\npublic class ComplexObject extends ExampleObject {\n\n  public ComplexObject(String s, int i) { /* ... */ }\n\n  public String s() { /* ... */ }\n\n  public int i() { /* ... */ }\n\n  public Codec<? extends ExampleObject> type() {\n    // A registered registry object\n    // "complex":\n    //   RecordCodecBuilder.create(instance ->\n    //     instance.group(\n    //       Codec.STRING.fieldOf("s").forGetter(ComplexObject::s),\n    //       Codec.INT.fieldOf("i").forGetter(ComplexObject::i)\n    //     ).apply(instance, ComplexObject::new)\n    //   )\n    return COMPLEX_OBJECT_CODEC.get();\n  }\n}\n\n// Assume there is an IForgeRegistry<Codec<? extends ExampleObject>> DISPATCH\npublic static final Codec<ExampleObject> = DISPATCH.getCodec() // Gets Codec<Codec<? extends ExampleObject>>\n  .dispatch(\n    ExampleObject::type, // Get the codec from the specific object\n    Function.identity() // Get the codec from the registry\n  );\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Simple object\n{\n  "type": "string", // For StringObject\n  "value": "value" // Codec type is not augmented from MapCodec, needs field\n}\n\n// Complex object\n{\n  "type": "complex", // For ComplexObject\n\n  // Codec type is augmented from MapCodec, can be inlined\n  "s": "value",\n  "i": 0\n}\n')))}m.isMDXComponent=!0}}]);