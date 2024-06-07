"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[728],{5045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var o=t(5893),a=t(1151);const s={},d="Data Components",c={id:"items/datacomponents",title:"Data Components",description:"Data components are key-value pairs within a map used to store data on an ItemStack. Each piece of data, such as firework explosions or tools, are stored as actual objects on the stack, making the values visible and operable without having to dynamically transform a general encoded instance (e.g., CompoundTag, JsonElement).",source:"@site/docs/items/datacomponents.md",sourceDirName:"items",slug:"/items/datacomponents",permalink:"/Neoforge-Korean-Documentation/docs/items/datacomponents",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"BlockEntityWithoutLevelRenderer",permalink:"/Neoforge-Korean-Documentation/docs/items/bewlr"},next:{title:"\uc0c1\ud638\uc791\uc6a9 \ud30c\uc774\ud504\ub77c\uc778",permalink:"/Neoforge-Korean-Documentation/docs/items/interactionpipeline"}},i={},r=[{value:"<code>DataComponentType</code>",id:"datacomponenttype",level:2},{value:"Creating Custom Data Components",id:"creating-custom-data-components",level:3},{value:"The Component Map",id:"the-component-map",level:2},{value:"<code>PatchedDataComponentMap</code>",id:"patcheddatacomponentmap",level:3},{value:"The Component Holder",id:"the-component-holder",level:2},{value:"<code>MutableDataComponentHolder</code>",id:"mutabledatacomponentholder",level:3},{value:"Adding Default Data Components to Items",id:"adding-default-data-components-to-items",level:2},{value:"Using Custom Component Holders",id:"using-custom-component-holders",level:2},{value:"<code>DataComponentPatch</code> and Codecs",id:"datacomponentpatch-and-codecs",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"data-components",children:"Data Components"}),"\n",(0,o.jsxs)(n.p,{children:["Data components are key-value pairs within a map used to store data on an ",(0,o.jsx)(n.code,{children:"ItemStack"}),". Each piece of data, such as firework explosions or tools, are stored as actual objects on the stack, making the values visible and operable without having to dynamically transform a general encoded instance (e.g., ",(0,o.jsx)(n.code,{children:"CompoundTag"}),", ",(0,o.jsx)(n.code,{children:"JsonElement"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"datacomponenttype",children:(0,o.jsx)(n.code,{children:"DataComponentType"})}),"\n",(0,o.jsxs)(n.p,{children:["Each data component has an associated ",(0,o.jsx)(n.code,{children:"DataComponentType<T>"}),", where ",(0,o.jsx)(n.code,{children:"T"})," is the component value type. The ",(0,o.jsx)(n.code,{children:"DataComponentType"})," represents a key to reference the stored component value along with some codecs to handle reading and writing to the disk and network, if desired."]}),"\n",(0,o.jsxs)(n.p,{children:["A list of existing components can be found within ",(0,o.jsx)(n.code,{children:"DataComponents"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"creating-custom-data-components",children:"Creating Custom Data Components"}),"\n",(0,o.jsxs)(n.p,{children:["The component value associated with the ",(0,o.jsx)(n.code,{children:"DataComponentType"})," must implement ",(0,o.jsx)(n.code,{children:"hashCode"})," and ",(0,o.jsx)(n.code,{children:"equals"})," and should be considered ",(0,o.jsx)(n.strong,{children:"immutable"})," when stored."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Component values can very easily be implemented using a record. Record fields are immutable and implement ",(0,o.jsx)(n.code,{children:"hashCode"})," and ",(0,o.jsx)(n.code,{children:"equals"}),"."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// A record example\npublic record ExampleRecord(int value1, boolean value2) {}\n\n// A class example\npublic class ExampleClass {\n\n    private final int value1;\n    // Can be mutable, but care needs to be taken when using\n    private boolean value2;\n\n    public ExampleClass(int value1, boolean value2) {\n        this.value1 = value1;\n        this.value2 = value2;\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(this.value1, this.value2);\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (obj == this) {\n            return true;\n        } else {\n            return obj instanceof ExampleClass ex\n                && this.value1 == ex.value1\n                && this.value2 == ex.value2;\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A standard ",(0,o.jsx)(n.code,{children:"DataComponentType"})," can be created via ",(0,o.jsx)(n.code,{children:"DataComponentType#builder"})," and built using ",(0,o.jsx)(n.code,{children:"DataComponentType.Builder#build"}),". The builder contains three settings: ",(0,o.jsx)(n.code,{children:"persistent"}),", ",(0,o.jsx)(n.code,{children:"networkSynchronized"}),", ",(0,o.jsx)(n.code,{children:"cacheEncoding"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"persistent"})," specifies the ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/datastorage/codecs",children:(0,o.jsx)(n.code,{children:"Codec"})})," used to read and write the component value to disk. ",(0,o.jsx)(n.code,{children:"networkSynchronized"})," specifies the ",(0,o.jsx)(n.code,{children:"StreamCodec"})," used to read and write the component across the network. If ",(0,o.jsx)(n.code,{children:"networkSynchronized"})," is not specified, then the ",(0,o.jsx)(n.code,{children:"Codec"})," provided in ",(0,o.jsx)(n.code,{children:"persistent"})," will be wrapped and used as the ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/networking/streamcodecs",children:(0,o.jsx)(n.code,{children:"StreamCodec"})}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Either ",(0,o.jsx)(n.code,{children:"persistent"})," or ",(0,o.jsx)(n.code,{children:"networkSynchronized"})," must be provided in the builder; otherwise, a ",(0,o.jsx)(n.code,{children:"NullPointerException"})," will be thrown. If no data should be sent across the network, then set ",(0,o.jsx)(n.code,{children:"networkSynchronized"})," to ",(0,o.jsx)(n.code,{children:"StreamCodec#unit"}),", providing the default component value."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"cacheEncoding"})," caches the encoding result of the ",(0,o.jsx)(n.code,{children:"Codec"})," such that any subsequent encodes uses the cached value if the component value hasn't changed. This should only be used if the component value is expected to rarely or never change."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"DataComponentType"})," are registry objects and must be ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/registries",children:"registered"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// Using ExampleRecord(int, boolean)\n// Only one Codec and/or StreamCodec should be used below\n// Multiple are provided for an example\n\n// Basic codec\npublic static final Codec<ExampleRecord> BASIC_CODEC = RecordCodecBuilder.create(instance ->\n    instance.group(\n        Codec.INT.fieldOf("value1").forGetter(ExampleRecord::value1),\n        Codec.BOOL.fieldOf("value2").forGetter(ExampleRecord::value2)\n    ).apply(instance, ExampleRecord::new)\n);\npublic static final StreamCodec<ByteBuf, ExampleRecord> BASIC_STREAM_CODEC = StreamCodec.composite(\n    ByteBufCodecs.INT, ExampleRecord::value1,\n    ByteBufCodecs.BOOL, ExampleRecord::value2,\n    ExampleRecord::new\n);\n\n// Unit stream codec if nothing should be sent across the network\npublic static final StreamCodec<ByteBuf, ExampleRecord> UNIT_STREAM_CODEC = StreamCodec.unit(new ExampleRecord(0, false));\n\n\n// In another class\npublic static final DeferredRegister<DataComponentType<?>> REGISTRAR = DeferredRegister.create(Registries.DATA_COMPONENT_TYPE, "examplemod");\n\npublic static final DeferredHolder<DataComponentType<?>, DataComponentType<ExampleRecord>> BASIC_EXAMPLE = REGISTRAR.register("basic",\n    () -> DataComponentType.builder()\n        // The codec to read/write the data to disk\n        .persistent(BASIC_CODEC)\n        // The codec to read/write the data across the network\n        .networkSynchronized(BASIC_STREAM_CODEC)\n        .build()\n);\n\n/// Component will not be saved to disk\npublic static final DeferredHolder<DataComponentType<?>, DataComponentType<ExampleRecord>> TRANSIENT_EXAMPLE = REGISTRAR.register("transient",\n    () -> DataComponentType.builder()\n        .networkSynchronized(BASIC_STREAM_CODEC)\n        .build()\n);\n\n// No data will be synced across the network\npublic static final DeferredHolder<DataComponentType<?>, DataComponentType<ExampleRecord>> NO_NETWORK_EXAMPLE = REGISTRAR.register("no_network",\n    () -> DataComponentType.builder()\n        .persistent(BASIC_CODEC)\n        // Note we use a unit stream codec here\n        .networkSynchronized(UNIT_STREAM_CODEC)\n        .build()\n);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"the-component-map",children:"The Component Map"}),"\n",(0,o.jsxs)(n.p,{children:["All data components are stored within a ",(0,o.jsx)(n.code,{children:"DataComponentMap"}),", using the ",(0,o.jsx)(n.code,{children:"DataComponentType"})," as the key and the object as the value. ",(0,o.jsx)(n.code,{children:"DataComponentMap"})," functions similarly to a read-only ",(0,o.jsx)(n.code,{children:"Map"}),". As such, there are methods to ",(0,o.jsx)(n.code,{children:"#get"})," an entry given its ",(0,o.jsx)(n.code,{children:"DataComponentType"})," or provide a default if not present (via ",(0,o.jsx)(n.code,{children:"#getOrDefault"}),")."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// For some DataComponentMap map\n\n// Will get dye color if component is present\n// Otherwise null\n@Nullable\nDyeColor color = map.get(DataComponents.BASE_COLOR);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"patcheddatacomponentmap",children:(0,o.jsx)(n.code,{children:"PatchedDataComponentMap"})}),"\n",(0,o.jsxs)(n.p,{children:["As the default ",(0,o.jsx)(n.code,{children:"DataComponentMap"})," only provides methods for read-based operations, write-based operations are supported using the subclass ",(0,o.jsx)(n.code,{children:"PatchedDataComponentMap"}),". This includes ",(0,o.jsx)(n.code,{children:"#set"}),"ting the value of a component or ",(0,o.jsx)(n.code,{children:"#remove"}),"ing it altogether."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"PatchedDataComponentMap"})," stores changes using a prototype and patch map. The prototype is a ",(0,o.jsx)(n.code,{children:"DataComponentMap"})," that contains the default components and their\nvalues this map should have. The patch map is a map of ",(0,o.jsx)(n.code,{children:"DataComponentType"}),"s to ",(0,o.jsx)(n.code,{children:"Optional"})," values that contain the changes made to the default components."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// For some PatchedDataComponentMap map\n\n// Sets the base color to white\nmap.set(DataComponents.BASE_COLOR, DyeColor.WHITE);\n\n// Removes the base color by\n// - Removing the patch if no default is provided\n// - Setting an empty optional if there is a default\nmap.remove(DataComponents.BASE_COLOR);\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["Both the prototype and patch map are part of the hash code for the ",(0,o.jsx)(n.code,{children:"PatchedDataComponentMap"}),". As such, any component values within the map should be treated as ",(0,o.jsx)(n.strong,{children:"immutable"}),". Always call ",(0,o.jsx)(n.code,{children:"#set"})," or one of its referring methods discussed below after modifying the value of a data component."]})}),"\n",(0,o.jsx)(n.h2,{id:"the-component-holder",children:"The Component Holder"}),"\n",(0,o.jsxs)(n.p,{children:["All instances that can hold data components implement ",(0,o.jsx)(n.code,{children:"DataComponentHolder"}),". ",(0,o.jsx)(n.code,{children:"DataComponentHolder"})," is effectively a delegate to the read-only methods within ",(0,o.jsx)(n.code,{children:"DataComponentMap"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// For some ItemStack stack\n\n// Delegates to 'DataComponentMap#get'\n@Nullable\nDyeColor color = stack.get(DataComponents.BASE_COLOR);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"mutabledatacomponentholder",children:(0,o.jsx)(n.code,{children:"MutableDataComponentHolder"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MutableDataComponentHolder"})," is an interface provided by NeoForge to support write-based methods to the component map. All implementations within Vanilla and NeoForge store data components using a ",(0,o.jsx)(n.code,{children:"PatchedDataComponentMap"}),", so the ",(0,o.jsx)(n.code,{children:"#set"})," and ",(0,o.jsx)(n.code,{children:"#remove"})," methods also have delegates with the same name."]}),"\n",(0,o.jsxs)(n.p,{children:["In addition, ",(0,o.jsx)(n.code,{children:"MutableDataComponentHolder"})," also provides an ",(0,o.jsx)(n.code,{children:"#update"})," method which handles getting the component value or the provided default if none is set, operating on the value, and then setting it back to the map. The operator is either a ",(0,o.jsx)(n.code,{children:"UnaryOperator"}),", which takes in the component value and returns the component value, or a ",(0,o.jsx)(n.code,{children:"BiFunction"}),", which takes in the component value and another object and returns the component value."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// For some ItemStack stack\n\nFireworkExplosion explosion = stack.get(DataComponents.FIREWORK_EXPLOSION);\n\n// Modifying the component value\nexplosion = explosion.withFadeColors(new IntArrayList(new int[] {1, 2, 3}));\n\n// Since we modified the component value, 'set' should be called afterward\nstack.set(DataComponents.FIREWORK_EXPLOSION, explosion);\n\n// Update the component value (calls 'set' internally)\nstack.update(\n    DataComponents.FIREWORK_EXPLOSION,\n    // Default value if no component value is present\n    FireworkExplosion.DEFAULT,\n    // Return a new FireworkExplosion to set\n    explosion -> explosion.withFadeColors(new IntArrayList(new int[] {4, 5, 6}))\n);\n\nstack.update(\n    DataComponents.FIREWORK_EXPLOSION,\n    // Default value if no component value is present\n    FireworkExplosion.DEFAULT,\n    // An object that is supplied to the function\n    new IntArrayList(new int[] {7, 8, 9}),\n    // Return a new FireworkExplosion to set\n    FireworkExplosion::withFadeColors\n);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"adding-default-data-components-to-items",children:"Adding Default Data Components to Items"}),"\n",(0,o.jsxs)(n.p,{children:["Although data components are stored on an ",(0,o.jsx)(n.code,{children:"ItemStack"}),", a map of default components can be set on an ",(0,o.jsx)(n.code,{children:"Item"})," to be passed to the ",(0,o.jsx)(n.code,{children:"ItemStack"})," as a prototype when constructed. A component can be added to the ",(0,o.jsx)(n.code,{children:"Item"})," via ",(0,o.jsx)(n.code,{children:"Item.Properties#component"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// For some DeferredRegister.Items REGISTRAR\npublic static final Item COMPONENT_EXAMPLE = REGISTRAR.register("component",\n    // register is used over other overloads as the DataComponentType has not been registered yet\n    () -> new Item(\n        new Item.Properties()\n        .component(BASIC_EXAMPLE.value(), new ExampleRecord(24, true))\n    )\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If the data component should be added to an existing item that belongs to Vanilla or another mod, then ",(0,o.jsx)(n.code,{children:"ModifyDefaultComponentEvent"})," should be listened for on the ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/events#event-buses",children:(0,o.jsx)(n.strong,{children:"mod event bus"})}),". The event provides the ",(0,o.jsx)(n.code,{children:"modify"})," and ",(0,o.jsx)(n.code,{children:"modifyMatching"})," methods which allows the ",(0,o.jsx)(n.code,{children:"DataComponentPatch.Builder"})," to be modified for the associated items. The builder can either ",(0,o.jsx)(n.code,{children:"#set"})," components or ",(0,o.jsx)(n.code,{children:"#remove"})," existing components."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// Listened to on the mod event bus\n@SubscribeEvent\npublic void modifyComponents(ModifyDefaultComponentsEvent event) {\n    // Sets the component on melon seeds\n    event.modify(Items.MELON_SEEDS, builder ->\n        builder.set(BASIC_EXAMPLE.value(), new ExampleRecord(10, false))\n    );\n\n    // Removes the component for any items that have a crafting item\n    event.modifyMatching(\n        item -> item.hasCraftingRemainingItem(),\n        builder -> builder.remove(DataComponents.BUCKET_ENTITY_DATA)\n    );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"using-custom-component-holders",children:"Using Custom Component Holders"}),"\n",(0,o.jsxs)(n.p,{children:["To create a custom data component holder, the holder object simply needs to implement ",(0,o.jsx)(n.code,{children:"MutableDataComponentHolder"})," and implement the missing methods. The holder object must contain a field representing the ",(0,o.jsx)(n.code,{children:"PatchedDataComponentMap"})," to implement the associated methods."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"public class ExampleHolder implements MutableDataComponentHolder {\n\n    private int data;\n    private final PatchedDataComponentMap components;\n\n    // Overloads can be provided to supply the map itself\n    public ExampleHolder() {\n        this.data = 0;\n        this.components = new PatchedDataComponentMap(DataComponentMap.EMPTY);\n    }\n\n    @Override\n    public DataComponentMap getComponents() {\n        return this.components;\n    }\n\n    @Nullable\n    @Override\n    public <T> T set(DataComponentType<? super T> componentType, @Nullable T value) {\n        return this.components.set(componentType, value);\n    }\n\n    @Nullable\n    @Override\n    public <T> T remove(DataComponentType<? extends T> componentType) {\n        return this.components.remove(componentType);\n    }\n\n    @Override\n    public void applyComponents(DataComponentPatch patch) {\n        this.components.applyPatch(patch);\n    }\n\n    @Override\n    public void applyComponents(DataComponentMap components) {\n        this.components.setAll(p_330402_);\n    }\n\n    // Other methods\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"datacomponentpatch-and-codecs",children:[(0,o.jsx)(n.code,{children:"DataComponentPatch"})," and Codecs"]}),"\n",(0,o.jsxs)(n.p,{children:["To persist components to disk or send information across the network, the holder could send the entire ",(0,o.jsx)(n.code,{children:"DataComponentMap"}),". However, this is generally a waste of information as any defaults will already be present wherever the data is sent to. So, instead, we use a ",(0,o.jsx)(n.code,{children:"DataComponentPatch"})," to send the associated data. ",(0,o.jsx)(n.code,{children:"DataComponentPatch"}),"es only contain the patch information of the component map without any defaults. The patches are then applied to the prototype in the receiver's location."]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"DataComponentPatch"})," can be created from a ",(0,o.jsx)(n.code,{children:"PatchedDataComponentMap"})," via ",(0,o.jsx)(n.code,{children:"#patch"}),". Likewise, ",(0,o.jsx)(n.code,{children:"PatchedDataComponentMap#fromPatch"})," can construct a ",(0,o.jsx)(n.code,{children:"PatchedDataComponentMap"})," given the prototype ",(0,o.jsx)(n.code,{children:"DataComponentMap"})," and a ",(0,o.jsx)(n.code,{children:"DataComponentPatch"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public class ExampleHolder implements MutableDataComponentHolder {\n\n    public static final Codec<ExampleHolder> CODEC = RecordCodecBuilder.create(instance ->\n        instance.group(\n            Codec.INT.fieldOf("data").forGetter(ExampleHolder::getData),\n            DataCopmonentPatch.CODEC.optionalFieldOf("components", DataComponentPatch.EMPTY).forGetter(holder -> holder.components.asPatch())\n        ).apply(instance, ExampleHolder::new)\n    );\n\n    public static final StreamCodec<RegistryFriendlyByteBuf, ExampleHolder> STREAM_CODEC = StreamCodec.composite(\n        ByteBufCodecs.INT, ExampleHolder::getData,\n        DataComponentPatch.STREAM_CODEC, holder -> holder.components.asPatch(),\n        ExampleHolder::new\n    );\n\n    // ...\n\n    public ExampleHolder(int data, DataComponentPatch patch) {\n        this.data = data;\n        this.components = PatchedDataComponentMap.fromPatch(\n            // The prototype map to apply to\n            DataComponentMap.EMPTY,\n            // The associated patches\n            patch\n        );\n    }\n\n    // ...\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/networking/payload",children:"Syncing the holder data across the network"})," and reading/writing the data to disk must be done manually."]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>d});var o=t(7294);const a={},s=o.createContext(a);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);