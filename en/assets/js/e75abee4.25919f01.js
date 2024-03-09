"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[967],{1300:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(5893),r=t(1151);const i={},s="Data Maps",o={id:"datamaps/index",title:"Data Maps",description:"A registry data map contains data-driven, reloadable objects that can be attached to a registry object.",source:"@site/docs/datamaps/index.md",sourceDirName:"datamaps",slug:"/datamaps/",permalink:"/Neoforge-Korean-Documentation/en/docs/datamaps/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Tag Generation",permalink:"/Neoforge-Korean-Documentation/en/docs/datagen/server/tags"},next:{title:"Built-in Data Maps",permalink:"/Neoforge-Korean-Documentation/en/docs/datamaps/neo_maps"}},d={},c=[{value:"Registration",id:"registration",level:2},{value:"Syncing",id:"syncing",level:2},{value:"JSON Structure and location",id:"json-structure-and-location",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced data maps",id:"advanced-data-maps",level:2},{value:"Creation",id:"creation",level:3},{value:"Mergers",id:"mergers",level:3},{value:"Removers",id:"removers",level:3},{value:"Datagen",id:"datagen",level:2}];function l(e){const a={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"data-maps",children:"Data Maps"}),"\n",(0,n.jsxs)(a.p,{children:["A registry data map contains data-driven, reloadable objects that can be attached to a registry object.",(0,n.jsx)(a.br,{}),"\n","This system allows more easily data-driving game behaviour, as they provide functionality such as syncing or conflict resolution, leading to a better and more configurable user experience."]}),"\n",(0,n.jsx)(a.p,{children:"You can think of tags as registry object \u279c boolean maps, while data maps are more flexible registry object \u279c object maps."}),"\n",(0,n.jsx)(a.p,{children:"A data map can be attached to both static, built-in, registries and dynamic data-driven datapack registries."}),"\n",(0,n.jsxs)(a.p,{children:["Data maps support reloading through the use of the ",(0,n.jsx)(a.code,{children:"/reload"})," command or any other means that reload server resources."]}),"\n",(0,n.jsx)(a.h2,{id:"registration",children:"Registration"}),"\n",(0,n.jsxs)(a.p,{children:["A data map type should be statically created and then registered to the ",(0,n.jsx)(a.code,{children:"RegisterDataMapTypesEvent"})," (which is fired on the ",(0,n.jsx)(a.a,{href:"../concepts/events",children:"mod event bus"}),"). The ",(0,n.jsx)(a.code,{children:"DataMapType"})," can be created using a ",(0,n.jsx)(a.code,{children:"DataMapType$Builder"}),", through ",(0,n.jsx)(a.code,{children:"DataMapType#builder"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["The builder provides a ",(0,n.jsx)(a.code,{children:"synced"})," method which can be used to mark a data map as synced and have it sent to clients."]}),"\n",(0,n.jsxs)(a.p,{children:["A simple ",(0,n.jsx)(a.code,{children:"DataMapType"})," has two generic arguments: ",(0,n.jsx)(a.code,{children:"R"})," (the type of the registry the data map is for) and ",(0,n.jsx)(a.code,{children:"T"})," (the values that are being attached). A data map of ",(0,n.jsx)(a.code,{children:"SomeObject"}),"s that are attached to ",(0,n.jsx)(a.code,{children:"Item"}),"s can, as such, be represented as ",(0,n.jsx)(a.code,{children:"DataMapType<Item, SomeObject>"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Data maps are serialized and deserialized using ",(0,n.jsx)(a.a,{href:"/Neoforge-Korean-Documentation/en/docs/datastorage/codecs",children:"Codecs"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Let's take the following record representing the data map value as an example:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'public record DropHealing(\n        float amount, float chance\n) {\n    public static final Codec<DropHealing> CODEC = RecordCodecBuilder.create(in -> in.group(\n            Codec.FLOAT.fieldOf("amount").forGetter(DropHealing::amount),\n            Codec.floatRange(0, 1).fieldOf("chance").forGetter(DropHealing::chance)\n    ).apply(in, DropHealing::new));\n}\n'})}),"\n",(0,n.jsx)(a.admonition,{type:"warning",children:(0,n.jsxs)(a.p,{children:["The value (",(0,n.jsx)(a.code,{children:"T"}),") should be an ",(0,n.jsx)(a.em,{children:"immutable"})," object, as otherwise weird behaviour can be caused if the object is attached to all entries within a tag (since no copy is created)."]})}),"\n",(0,n.jsxs)(a.p,{children:["For the purposes of this example, we will use this data map to heal players when they drop an item.",(0,n.jsx)(a.br,{}),"\n","The ",(0,n.jsx)(a.code,{children:"DataMapType"})," can be created as such:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'public static final DataMapType<Item, DropHealing> DROP_HEALING = DataMapType.builder(\n        new ResourceLocation("mymod:drop_healing"), Registries.ITEM, DropHealing.CODEC\n).build();\n'})}),"\n",(0,n.jsxs)(a.p,{children:["and then registered to the ",(0,n.jsx)(a.code,{children:"RegisterDataMapTypesEvent"})," using ",(0,n.jsx)(a.code,{children:"RegisterDataMapTypesEvent#register"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"syncing",children:"Syncing"}),"\n",(0,n.jsxs)(a.p,{children:["A synced data map will have its values synced to clients. A data map can be marked as synced using ",(0,n.jsx)(a.code,{children:"DataMapType$Builder#synced(Codec<T> networkCodec, boolean mandatory)"}),".",(0,n.jsx)(a.br,{}),"\n","The values of the data map will then be synced using the ",(0,n.jsx)(a.code,{children:"networkCodec"}),".",(0,n.jsx)(a.br,{}),"\n","If the ",(0,n.jsx)(a.code,{children:"mandatory"})," flag is set to ",(0,n.jsx)(a.code,{children:"true"}),", clients that do not support the data map (including Vanilla clients) will not be able to connect to the server, nor vice-versa. A non-mandatory data map on the other hand is optional, so it will not prevent any clients from joining."]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"A separate network codec allows for packet sizes to be smaller, as you can choose what data to send, and in what format. Otherwise the default codec can be used."})}),"\n",(0,n.jsx)(a.h2,{id:"json-structure-and-location",children:"JSON Structure and location"}),"\n",(0,n.jsxs)(a.p,{children:["Data maps are loaded from a JSON file located at ",(0,n.jsx)(a.code,{children:"mapNamespace/data_maps/registryNamespace/registryPath/mapPath.json"}),", where:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"mapNamespace"})," is the namespace of the ID of the data map"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"mapPath"})," is the path of the ID of the data map"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"registryNamespace"})," is the namespace of the ID of the registry; if the namespace is ",(0,n.jsx)(a.code,{children:"minecraft"}),", this value will be omitted"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"registryPath"})," is the path of the ID of the registry"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["For more information, please ",(0,n.jsx)(a.a,{href:"/Neoforge-Korean-Documentation/en/docs/datamaps/structure",children:"check out the dedicated page"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(a.p,{children:["As data maps can be used on any registry, they can be queried through ",(0,n.jsx)(a.code,{children:"Holder"}),"s, and not through the actual registry objects.",(0,n.jsx)(a.br,{}),"\n","You can query a data map value using ",(0,n.jsx)(a.code,{children:"Holder#getData(DataMapType)"}),". If that object doesn't have a value attached, the method will return ",(0,n.jsx)(a.code,{children:"null"}),"."]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["Only reference holders will return a value in that method. ",(0,n.jsx)(a.code,{children:"Direct"})," holders will ",(0,n.jsx)(a.strong,{children:"not"}),".  Generally, you will only encounter reference holders (which are returned by methods such as ",(0,n.jsx)(a.code,{children:"Registry#wrapAsHolder"}),", ",(0,n.jsx)(a.code,{children:"Registry#getHolder"})," or the different ",(0,n.jsx)(a.code,{children:"builtInRegistryHolder"})," methods)."]})}),"\n",(0,n.jsx)(a.p,{children:"To continue the example above, we can implement our intended behaviour as follows:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"public static void onItemDrop(final ItemTossEvent event) {\n    final ItemStack stack = event.getEntity().getItem();\n    // ItemStack has a getItemHolder method that will return a Holder<Item> which points to the item the stack is of\n    //highlight-next-line\n    final DropHealing value = stack.getItemHolder().getData(DROP_HEALING);\n    // Since getData returns null if the item will not have a drop healing value attached, we guard against it being null\n    if (value != null) {\n        // And here we simply use the values\n        if (event.getPlayer().level().getRandom().nextFloat() > value.chance()) {\n            event.getPlayer().heal(value.amount());\n        }\n    }\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"advanced-data-maps",children:"Advanced data maps"}),"\n",(0,n.jsxs)(a.p,{children:["Advanced data maps are data maps which have additional functionality. Namely, the ability of merging values and selectively removing them, through a remover. Implementing some form of merging and removers is highly recommended for data maps whose values are collection-likes (like ",(0,n.jsx)(a.code,{children:"Map"}),"s or ",(0,n.jsx)(a.code,{children:"List"}),"s)."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"AdvancedDataMapType"})," have one more generic besides ",(0,n.jsx)(a.code,{children:"T"})," and ",(0,n.jsx)(a.code,{children:"R"}),": ",(0,n.jsx)(a.code,{children:"VR extends DataMapValueRemover<R, T>"}),". This additional generic allows you to datagen remove objects with increased type safety."]}),"\n",(0,n.jsx)(a.h3,{id:"creation",children:"Creation"}),"\n",(0,n.jsxs)(a.p,{children:["You create an ",(0,n.jsx)(a.code,{children:"AdvancedDataMapType"})," using ",(0,n.jsx)(a.code,{children:"AdvancedDataMapType#builder"}),". Unlike the normal builder, the builder returned by that method will have two more methods (",(0,n.jsx)(a.code,{children:"merger"})," and ",(0,n.jsx)(a.code,{children:"remover"}),"), and it will return an ",(0,n.jsx)(a.code,{children:"AdvancedDataMapType"}),". Registration methods remain the same."]}),"\n",(0,n.jsx)(a.h3,{id:"mergers",children:"Mergers"}),"\n",(0,n.jsxs)(a.p,{children:["An advanced data map can provide a ",(0,n.jsx)(a.code,{children:"DataMapValueMerger"})," through ",(0,n.jsx)(a.code,{children:"AdvancedDataMapType#merger"}),". This merger will be used to handle conflicts between data packs that attempt to attach a value to the same object.",(0,n.jsx)(a.br,{}),"\n","The merger will be given the two conflicting values, and their sources (as an ",(0,n.jsx)(a.code,{children:"Either<TagKey<R>, ResourceKey<R>>"})," since values can be attached to all entries within a tag, not just individual entries), and is expected to return the value that will actually be attached.",(0,n.jsx)(a.br,{}),"\n",'Generally, mergers should simply merge the values, and should not perform "hard" overwrites unless necessary (i.e. if merging isn\'t possible). If a pack wants to bypass the merger, it can do so by specifying the object-level ',(0,n.jsx)(a.code,{children:"replace"})," field."]}),"\n",(0,n.jsx)(a.p,{children:"Let's imagine a scenario where we have a data map that attaches integers to items:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"public class IntMerger implements DataMapValueMerger<Item, Integer> {\n    @Override\n    public Integer merge(Registry<Item> registry, Either<TagKey<Item>, ResourceKey<Item>> first, Integer firstValue, Either<TagKey<Item>, ResourceKey<Item>> second, Integer secondValue) {\n        //highlight-next-line\n        return firstValue + secondValue;\n    }\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The above merger will merge the values if two datapacks attach to the same object. So if the first pack attaches the value ",(0,n.jsx)(a.code,{children:"12"})," to ",(0,n.jsx)(a.code,{children:"minecraft:carrot"}),", and the second pack attaches the value ",(0,n.jsx)(a.code,{children:"15"})," to ",(0,n.jsx)(a.code,{children:"minecraft:carrot"}),", the final value will be ",(0,n.jsx)(a.code,{children:"27"}),". However, if the second pack specifies the object-level ",(0,n.jsx)(a.code,{children:"replace"})," field, the final value will be ",(0,n.jsx)(a.code,{children:"15"})," as the merger won't be invoked."]}),"\n",(0,n.jsxs)(a.p,{children:["NeoForge provides some default mergers for merging lists, sets and maps in ",(0,n.jsx)(a.code,{children:"DataMapValueMerger"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["The default merger (",(0,n.jsx)(a.code,{children:"DataMapValueMerger#defaultMerger"}),") has the typical behaviour you'd expect from normal data packs, where the newest value (which comes from the highest datapack) overwrites the previous value."]}),"\n",(0,n.jsx)(a.h3,{id:"removers",children:"Removers"}),"\n",(0,n.jsxs)(a.p,{children:["An advanced data map can provide a ",(0,n.jsx)(a.code,{children:"DataMapValueRemover"})," through ",(0,n.jsx)(a.code,{children:"AdvancedDataMapType#remover"}),". The remover will allow selective removals of data map values, effectively decomposition.",(0,n.jsx)(a.br,{}),"\n","While by default a datapack can only remove the whole object attached to a registry entry, with a remover it can remove just speciffic values from the attached object (i.e. just the entry with a given key in the case of a map, or the entry with a specific property in the case of a list)."]}),"\n",(0,n.jsxs)(a.p,{children:["The codec that is passed to the builder will decode remover instances. These removers will then be given the value currently attached and its source, and are expected to create a new object to replace the old value.",(0,n.jsx)(a.br,{}),"\n","Alternatively, an empty ",(0,n.jsx)(a.code,{children:"Optional"})," will lead to the value being completely removed."]}),"\n",(0,n.jsxs)(a.p,{children:["An example of a remover that will remove a value with a specific key from a ",(0,n.jsx)(a.code,{children:"Map"}),"-based data map:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"public record MapRemover(String key) implements DataMapValueRemover<Item, Map<String, String>> {\n    public static final Codec<MapRemover> CODEC = Codec.STRING.xmap(MapRemover::new, MapRemover::key);\n    \n    @Override\n    public Optional<Map<String, String>> remove(Map<String, String> value, Registry<Item> registry, Either<TagKey<Item>, ResourceKey<Item>> source, Item object) {\n        final Map<String, String> newMap = new HashMap<>(value);\n        newMap.remove(key);\n        return Optional.of(newMap);\n    }\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:"With the remover above in mind, we're attaching maps of string to string to items. Take the following data map JSON file:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:'{\n    "values": {\n        //highlight-start\n        "minecraft:carrot": {\n            "somekey1": "value1",\n            "somekey2": "value2"\n        }\n        //highlight-end\n    }\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["That file will attach the map ",(0,n.jsx)(a.code,{children:"[somekey1=value1, somekey2=value2]"})," to the ",(0,n.jsx)(a.code,{children:"minecraft:carrot"})," item. Now, another datapack can come on top of it and remove just the value with the ",(0,n.jsx)(a.code,{children:"somekey1"})," key, as such:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:'{\n    "remove": {\n        // As the remover is decoded as a string, we can use a string as the value here. If it were decoded as an object, we would have needed to use an object.\n        //highlight-next-line\n        "minecraft:carrot": "somekey1"\n    }\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["After the second datapack is read and applied, the new value attached to the ",(0,n.jsx)(a.code,{children:"minecraft:carrot"})," item will be ",(0,n.jsx)(a.code,{children:"[somekey2=value2]"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"datagen",children:"Datagen"}),"\n",(0,n.jsxs)(a.p,{children:["Data maps can be ",(0,n.jsx)(a.a,{href:"../datagen",children:"generated"})," through ",(0,n.jsx)(a.code,{children:"DataMapProvider"}),".",(0,n.jsx)(a.br,{}),"\n","You should extend that class, and then override the ",(0,n.jsx)(a.code,{children:"generate"})," method to create your entries, similar to tag generation."]}),"\n",(0,n.jsx)(a.p,{children:"Considering the drop healing example from the start, we could generate some values as follows:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"public class DropHealingGen extends DataMapProvider {\n\n    public DropHealingGen(PackOutput packOutput, CompletableFuture<HolderLookup.Provider> lookupProvider) {\n        super(packOutput, lookupProvider);\n    }\n\n    @Override\n    protected void gather() {\n        // In the examples below, we do not need to forcibly replace any value as that's the default behaviour since a merger isn't provided, so the third parameter can be false.\n\n        // If you were to provide a merger for your data map, then the third parameter will cause the old value to be overwritten if set to true, without invoking the merger\n        builder(DROP_HEALING)\n                // Always give entities that drop any item in the minecraft:fox_food tag 12 hearts\n                .add(ItemTags.FOX_FOOD, new DropHealing(12, 1f), false)\n                // Have a 10% chance of healing entities that drop an acacia boat by one point\n                .add(Items.ACACIA_BOAT.builtInRegistryHolder(), new DropHealing(1, 0.1f), false);\n    }\n}\n"})}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["There are ",(0,n.jsx)(a.code,{children:"add"})," overloads that accept raw ",(0,n.jsx)(a.code,{children:"ResourceLocation"}),"s if you want to attach values to objects added by optional dependencies. In that case you should also provide ",(0,n.jsx)(a.a,{href:"../resources/server/conditional",children:"a loading condition"})," through the var-args parameter to avoid crashes."]})})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>s});var n=t(7294);const r={},i=n.createContext(r);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);