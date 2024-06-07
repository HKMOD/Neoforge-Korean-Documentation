"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2536],{9625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(5893),i=t(1151);const s={},r="Models",l={id:"resources/client/models/index",title:"Models",description:"Models are JSON files that determine the visual shape and texture(s) of a block or item. A model consists of cuboid elements, each with their own size, that then get assigned a texture to each face.",source:"@site/docs/resources/client/models/index.md",sourceDirName:"resources/client/models",slug:"/resources/client/models/",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/client/models/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"I18n and L10n",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/client/i18n"},next:{title:"Baked Models",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/client/models/bakedmodel"}},a={},d=[{value:"Specification",id:"specification",level:2},{value:"Render Types",id:"render-types",level:3},{value:"Elements",id:"elements",level:3},{value:"Extra Face Data",id:"extra-face-data",level:4},{value:"Overrides",id:"overrides",level:3},{value:"Root Transforms",id:"root-transforms",level:3},{value:"Blockstate Files",id:"blockstate-files",level:2},{value:"Tinting",id:"tinting",level:2},{value:"Registering Additional Models",id:"registering-additional-models",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"models",children:"Models"}),"\n",(0,o.jsx)(n.p,{children:"Models are JSON files that determine the visual shape and texture(s) of a block or item. A model consists of cuboid elements, each with their own size, that then get assigned a texture to each face."}),"\n",(0,o.jsxs)(n.p,{children:["Each item gets an item model assigned to it by its registry name. For example, an item with the registry name ",(0,o.jsx)(n.code,{children:"examplemod:example_item"})," would get the model at ",(0,o.jsx)(n.code,{children:"assets/examplemod/models/item/example_item.json"})," assigned to it. For blocks, this is a bit more complicated, as they get assigned a blockstate file first. See ",(0,o.jsx)(n.a,{href:"#blockstate-files",children:"below"})," for more information."]}),"\n",(0,o.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["See also: ",(0,o.jsx)(n.a,{href:"https://minecraft.wiki/w/Model",children:"Model"})," on the ",(0,o.jsx)(n.a,{href:"https://minecraft.wiki",children:"Minecraft Wiki"})]})}),"\n",(0,o.jsx)(n.p,{children:"A model is a JSON file with the following optional properties in the root tag:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"loader"}),": NeoForge-added. Sets a custom model loader. See ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/resources/client/models/modelloaders",children:"Custom Model Loaders"})," for more information."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"parent"}),": Sets a parent model, in the form of a ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/misc/resourcelocation",children:"resource location"})," relative to the ",(0,o.jsx)(n.code,{children:"models"})," folder. All parent properties will be applied and then overridden by the properties set in the declaring model. Common parents include:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:block/block"}),": The common parent of all block models."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:block/cube"}),": Parent of all models that use a 1x1x1 cube model."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:block/cube_all"}),": Variant of the cube model that uses the same texture on all six sides, for example cobblestone or planks."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:block/cube_bottom_top"}),": Variant of the cube model that uses the same texture on all four horizontal sides, and separate textures on the top and the bottom. Common examples include sandstone or chiseled quartz."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:block/cube_column"}),": Variant of the cube model that has a side texture and a bottom and top texture. Examples include wooden logs, as well as quartz and purpur pillars."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:block/cross"}),": Model that uses two planes with the same texture, one rotated 45\xb0 clockwise and the other rotated 45\xb0 counter-clockwise, forming an X when viewed from above (hence the name). Examples include most plants, e.g. grass, saplings and flowers."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:item/generated"}),": Parent for classic 2D flat item models. Used by most items in the game. Ignores an ",(0,o.jsx)(n.code,{children:"elements"})," block since its quads are generated from the textures."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:item/handheld"}),": Parent for 2D flat item models that appear to be actually held by the player. Used predominantly by tools. Submodel of ",(0,o.jsx)(n.code,{children:"item/generated"}),", which causes it to ignore the ",(0,o.jsx)(n.code,{children:"elements"})," block as well."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:builtin/entity"}),": Specifies no textures other than ",(0,o.jsx)(n.code,{children:"particle"}),". If this is the parent, ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/resources/client/models/bakedmodel#others",children:(0,o.jsx)(n.code,{children:"BakedModel#isCustomRenderer()"})})," returns ",(0,o.jsx)(n.code,{children:"true"})," to allow use of a ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/items/bewlr",children:(0,o.jsx)(n.code,{children:"BlockEntityWithoutLevelRenderer"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Block items commonly (but not always) use their corresponding block models as parent. For example, the cobblestone item model uses the parent ",(0,o.jsx)(n.code,{children:"minecraft:block/cobblestone"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ambientocclusion"}),": Whether to enable ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Ambient_occlusion",children:"ambient occlusion"})," or not. Only effective on block models. Defaults to ",(0,o.jsx)(n.code,{children:"true"}),". If your custom block model has weird shading, try setting this to ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"render_type"}),": See ",(0,o.jsx)(n.a,{href:"#render-types",children:"Render Types"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gui_light"}),": Can be ",(0,o.jsx)(n.code,{children:'"front"'})," or ",(0,o.jsx)(n.code,{children:'"side"'}),". If ",(0,o.jsx)(n.code,{children:'"front"'}),", light will come from the front, useful for flat 2D models. If ",(0,o.jsx)(n.code,{children:'"side"'}),", light will come from the side, useful for 3D models (especially block models). Defaults to ",(0,o.jsx)(n.code,{children:'"side"'}),". Only effective on item models."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"textures"}),": A sub-object that maps names (known as texture variables) to ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/resources/client/textures",children:"texture locations"}),". Texture variables can then be used in ",(0,o.jsx)(n.a,{href:"#elements",children:"elements"}),". They can also be specified in elements, but left unspecified in order for child models to specify them.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Block models should additionally specify a ",(0,o.jsx)(n.code,{children:"particle"})," texture. This texture is used when falling on, running across, or breaking the block."]}),"\n",(0,o.jsxs)(n.li,{children:["Item models can also use layer textures, named ",(0,o.jsx)(n.code,{children:"layer0"}),", ",(0,o.jsx)(n.code,{children:"layer1"}),", etc., where layers with a higher index are rendered above those with a lower index (e.g. ",(0,o.jsx)(n.code,{children:"layer1"})," would be rendered above ",(0,o.jsx)(n.code,{children:"layer0"}),"). Only works if the parent is ",(0,o.jsx)(n.code,{children:"item/generated"}),", and only works for up to 5 layers (",(0,o.jsx)(n.code,{children:"layer0"})," through ",(0,o.jsx)(n.code,{children:"layer4"}),")."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"elements"}),": A list of cuboid ",(0,o.jsx)(n.a,{href:"#elements",children:"elements"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"overrides"}),": A list of ",(0,o.jsx)(n.a,{href:"#overrides",children:"override models"}),". Only effective on item models."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"display"}),": A sub-object that holds the different display options for different ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/resources/client/models/bakedmodel#perspectives",children:"perspectives"}),", see linked article for possible keys. Only effective on item models, but often specified in block models so that item models can inherit the display options. Every perspective is an optional sub-object that may contain the following options, which are applied in that order:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"translation"}),": The translation of the model, specified as ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rotation"}),": The rotation of the model, specified as ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"scale"}),": The scale of the model, specified as ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"right_rotation"}),": NeoForge-added. A second rotation that is applied after scaling, specified as ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"transform"}),": See ",(0,o.jsx)(n.a,{href:"#root-transforms",children:"Root Transforms"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"If you're having trouble finding out how exactly to specify something, have a look at a vanilla model that does something similar."})}),"\n",(0,o.jsx)(n.h3,{id:"render-types",children:"Render Types"}),"\n",(0,o.jsxs)(n.p,{children:["Using the optional NeoForge-added ",(0,o.jsx)(n.code,{children:"render_type"})," field, you can set a render type for your model. If this is not set (as is the case in all vanilla models), the game will fall back to the render types hardcoded in ",(0,o.jsx)(n.code,{children:"ItemBlockRenderTypes"}),". If ",(0,o.jsx)(n.code,{children:"ItemBlockRenderTypes"})," doesn't contain the render type for that block either, it will fall back to ",(0,o.jsx)(n.code,{children:"minecraft:solid"}),". Vanilla provides the following default render types:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:solid"}),": Used for fully solid blocks, such as stone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:cutout"}),": Used for blocks where any pixel is either fully solid or fully transparent, i.e. with either full or no transparency, for example glass."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:cutout_mipped"}),": Variant of ",(0,o.jsx)(n.code,{children:"minecraft:cutout"})," that will scale down textures at large distances to avoid visual artifacts (",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Mipmap",children:"mipmapping"}),"). Does not apply the mipmapping to item rendering, as it is usually undesired on items and may cause artifacts. Used for example by leaves."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:cutout_mipped_all"}),": Variant of ",(0,o.jsx)(n.code,{children:"minecraft:cutout_mipped"})," which applies mipmapping to item models as well."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:translucent"}),": Used for blocks where any pixel may be partially transparent, for example stained glass."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"minecraft:tripwire"}),": Used by blocks with the special requirement of being rendered to the weather target, i.e. tripwire."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Selecting the correct render type is a question of performance to some degree. Solid rendering is faster than cutout rendering, and cutout rendering is faster than translucent rendering. Because of this, you should specify the "strictest" render type applicable for your use case, as it will also be the fastest.'}),"\n",(0,o.jsxs)(n.p,{children:["If you want, you can also add your own render types. To do so, subscribe to the ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/events#event-buses",children:"mod bus"})," ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/events",children:"event"})," ",(0,o.jsx)(n.code,{children:"RegisterNamedRenderTypesEvent"})," and ",(0,o.jsx)(n.code,{children:"#register"})," your render types. ",(0,o.jsx)(n.code,{children:"#register"})," has three or four parameters:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The name of the render type. Will be prefixed with your mod id. For example, using ",(0,o.jsx)(n.code,{children:'"my_cutout"'})," here will provide ",(0,o.jsx)(n.code,{children:"examplemod:my_cutout"})," as a new render type for you to use (provided that your mod id is ",(0,o.jsx)(n.code,{children:"examplemod"}),", of course)."]}),"\n",(0,o.jsxs)(n.li,{children:["The chunk render type. Any of the types in the list returned by ",(0,o.jsx)(n.code,{children:"RenderType.chunkBufferLayers()"})," can be used."]}),"\n",(0,o.jsxs)(n.li,{children:["The entity render type. Must be a render type with the ",(0,o.jsx)(n.code,{children:"DefaultVertexFormat.NEW_ENTITY"})," vertex format."]}),"\n",(0,o.jsxs)(n.li,{children:["Optional: The fabulous render type. Must be a render type with the ",(0,o.jsx)(n.code,{children:"DefaultVertexFormat.NEW_ENTITY"})," vertex format. Will be used instead of the regular entity render type if the graphics mode is set to ",(0,o.jsx)(n.em,{children:"Fabulous!"}),". If omitted, falls back to the regular render type. Generally recommended to set if the render type uses transparency in some way."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"elements",children:"Elements"}),"\n",(0,o.jsx)(n.p,{children:"An element is a JSON representation of a cuboid object. It has the following properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"from"}),": The coordinate of the start corner of the cuboid, specified as ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),". Specified in 1/16 block units. For example, ",(0,o.jsx)(n.code,{children:"[0, 0, 0]"}),' would be the "bottom left" corner, ',(0,o.jsx)(n.code,{children:"[8, 8, 8]"})," would be the center, and ",(0,o.jsx)(n.code,{children:"[16, 16, 16]"}),' would be the "top right" corner of the block.']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"to"}),": The coordinate of the end corner of the cuboid, specified as ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),". Like ",(0,o.jsx)(n.code,{children:"from"}),", this is specified in 1/16 block units."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Values in ",(0,o.jsx)(n.code,{children:"from"})," and ",(0,o.jsx)(n.code,{children:"to"})," are limited by Minecraft to the range ",(0,o.jsx)(n.code,{children:"[-16, 32]"}),". However, it is highly discouraged to exceed ",(0,o.jsx)(n.code,{children:"[0, 16]"}),", as that will lead to lighting and/or culling issues."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"neoforge_data"}),": See ",(0,o.jsx)(n.a,{href:"#extra-face-data",children:"Extra Face Data"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"faces"}),": An object containing data for of up to 6 faces, named ",(0,o.jsx)(n.code,{children:"north"}),", ",(0,o.jsx)(n.code,{children:"south"}),", ",(0,o.jsx)(n.code,{children:"east"}),", ",(0,o.jsx)(n.code,{children:"west"}),", ",(0,o.jsx)(n.code,{children:"up"})," and ",(0,o.jsx)(n.code,{children:"down"}),", respectively. Every face has the following data:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uv"}),": The uv of the face, specified as ",(0,o.jsx)(n.code,{children:"[u1, v1, u2, v2]"}),", where ",(0,o.jsx)(n.code,{children:"u1, v1"})," is the top left uv coordinates and ",(0,o.jsx)(n.code,{children:"u2, v2"})," is the bottom right uv coordinates."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"texture"}),": The texture to use for the face. Must be a texture variable prefixed with a ",(0,o.jsx)(n.code,{children:"#"}),". For example, if your model had a texture named ",(0,o.jsx)(n.code,{children:"wood"}),", you would use ",(0,o.jsx)(n.code,{children:"#wood"})," to reference that texture. Technically optional, will use the missing texture if absent."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rotation"}),": Optional. Rotates the texture clockwise by 90, 180 or 270 degrees."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"cullface"}),": Optional. Tells the render engine to skip rendering the face when there is a full block touching it in the specified direction. The direction can be ",(0,o.jsx)(n.code,{children:"north"}),", ",(0,o.jsx)(n.code,{children:"south"}),", ",(0,o.jsx)(n.code,{children:"east"}),", ",(0,o.jsx)(n.code,{children:"west"}),", ",(0,o.jsx)(n.code,{children:"up"})," or ",(0,o.jsx)(n.code,{children:"down"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"tintindex"}),": Optional. Specifies a tint index that may be used by a color handler, see ",(0,o.jsx)(n.a,{href:"#tinting",children:"Tinting"})," for more information. Defaults to -1, which means no tinting."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"neoforge_data"}),": See ",(0,o.jsx)(n.a,{href:"#extra-face-data",children:"Extra Face Data"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Additionally, it can specify the following optional properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"shade"}),": Only for block models. Optional. Whether the faces of this element should have direction-dependent shading on it or not. Defaults to true."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rotation"}),": A rotation of the object, specified as a sub object containing the following data:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"angle"}),": The rotation angle, in degrees. Can be -45 through 45 in steps of 22.5 degrees."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"axis"}),": The axis to rotate around. It is currently not possible to rotate an object around more than one axis."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"origin"}),": Optional. The origin point to rotate around, specified as ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),". Note that these are absolute values, i.e. they are not relative to the cube's position. If unspecified, will use ",(0,o.jsx)(n.code,{children:"[0, 0, 0]"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"extra-face-data",children:"Extra Face Data"}),"\n",(0,o.jsxs)(n.p,{children:["Extra face data (",(0,o.jsx)(n.code,{children:"neoforge_data"}),") can be applied to both an element and a single face of an element. It is optional in all contexts where it is available. If both element-level and face-level extra face data is specified, the face-level data will override the element-level data. Extra data can specify the following data:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"color"}),": Tints the face with the given color. Must be an ARGB value. Can be specified as a string or as a decimal integer (JSON does not support hex literals). Defaults to ",(0,o.jsx)(n.code,{children:"0xFFFFFFFF"}),". This can be used as a replacement for tinting if the color values are constant."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"block_light"}),": Overrides the block light value used for this face. Defaults to 0."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sky_light"}),": Overrides the sky light value used for this face. Defaults to 0."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ambient_occlusion"}),": Disables or enables ambient occlusion for this face. Defaults to the value set in the model."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Using the custom ",(0,o.jsx)(n.code,{children:"neoforge:item_layers"})," loader, you can also specify extra face data to apply to all the geometry in an ",(0,o.jsx)(n.code,{children:"item/generated"})," model. In the following example, layer 1 will be tinted red and glow at full brightness:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json5",children:'{\n    "loader": "neoforge:item_layers",\n    "parent": "minecraft:item/generated",\n    "textures": {\n        "layer0": "minecraft:item/stick",\n        "layer1": "minecraft:item/glowstone_dust"\n    },\n    "neoforge_data": {\n        "1": {\n            "color": "0xFFFF0000",\n            "block_light": 15,\n            "sky_light": 15,\n            "ambient_occlusion": false\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"overrides",children:"Overrides"}),"\n",(0,o.jsx)(n.p,{children:"Item overrides can assign a different model to an item based on a float value, called the override value. For example, bows and crossbows use this to change the texture depending on how long they have been drawn. Overrides have both a model and a code side to them."}),"\n",(0,o.jsxs)(n.p,{children:["The model can specify one or multiple override models that should be used when the override value is equal to or greater than the given threshold value. For example, the bow uses two different properties ",(0,o.jsx)(n.code,{children:"pulling"})," and ",(0,o.jsx)(n.code,{children:"pull"}),". ",(0,o.jsx)(n.code,{children:"pulling"})," is treated as a boolean value, with 1 being interpreted as pulling and 0 as not pulling, while ",(0,o.jsx)(n.code,{children:"pull"})," represents how much the bow is currently pulled. It then uses these properties to specify usage of three alternative models when charged to below 65% (",(0,o.jsx)(n.code,{children:"pulling"})," 1, no ",(0,o.jsx)(n.code,{children:"pull"})," value), 65% (",(0,o.jsx)(n.code,{children:"pulling"})," 1, ",(0,o.jsx)(n.code,{children:"pull"})," 0.65) and 90% (",(0,o.jsx)(n.code,{children:"pulling"})," 1, ",(0,o.jsx)(n.code,{children:"pull"})," 0.9). If multiple models apply (because the value keeps on becoming bigger), the last element of the list matches, so make sure your order is correct. The overrides look as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json5",children:'{\n    // other stuff here\n    "overrides": [\n        {\n            // pulling = 1\n            "predicate": {\n                "pulling": 1\n            },\n            "model": "item/bow_pulling_0"\n        },\n        {\n            // pulling = 1, pull >= 0.65\n            "predicate": {\n                "pulling": 1,\n                "pull": 0.65\n            },\n            "model": "item/bow_pulling_1"\n        },\n        // pulling = 1, pull >= 0.9\n        {\n            "predicate": {\n                "pulling": 1,\n                "pull": 0.9\n            },\n            "model": "item/bow_pulling_2"\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The code side of things is pretty simple. Assuming that we want to add a property named ",(0,o.jsx)(n.code,{children:"examplemod:property"})," to our item, we would use the following code in a ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/sides",children:"client-side"})," ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/events#registering-an-event-handler",children:"event handler"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@SubscribeEvent\npublic static void onClientSetup(FMLClientSetupEvent event) {\n    event.enqueueWork(() -> { // ItemProperties#register is not threadsafe, so we need to call it on the main thread\n        ItemProperties.register(\n            // The item to apply the property to.\n            ExampleItems.EXAMPLE_ITEM,\n            // The id of the property.\n            new ResourceLocation("examplemod", "property"),\n            // A reference to a method that calculates the override value.\n            // Parameters are the used item stack, the level context, the player using the item,\n            // and a random seed you can use.\n            (stack, level, player, seed) -> someMethodThatReturnsAFloat()\n        );\n    });\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Vanilla Minecraft only allows for float values between 0 and 1. NeoForge patches this to allow arbitrary float values."})}),"\n",(0,o.jsx)(n.h3,{id:"root-transforms",children:"Root Transforms"}),"\n",(0,o.jsxs)(n.p,{children:["Adding the ",(0,o.jsx)(n.code,{children:"transform"})," property at the top level of a model tells the loader that a transformation to all geometry should be applied right before the rotations in a ",(0,o.jsx)(n.a,{href:"#blockstate-files",children:"blockstate file"})," (for block models) or the transformations in a ",(0,o.jsx)(n.code,{children:"display"})," block (for item models) are applied. This is added by NeoForge."]}),"\n",(0,o.jsxs)(n.p,{children:["The root transforms can be specified in two ways. The first way would be as a single property named ",(0,o.jsx)(n.code,{children:"matrix"})," containing a transformation 3x4 matrix (row major order, last row is omitted) in the form of a nested JSON array. The matrix is the composition of the translation, left rotation, scale, right rotation and the transformation origin in that order. An example would look like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json5",children:'{\n    // ...\n    "transform": {\n        "matrix": [\n            [0, 0, 0, 0],\n            [0, 0, 0, 0],\n            [0, 0, 0, 0]\n        ]\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The second way is to specify a JSON object containing any combination of the following entries, applied in that order:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"translation"}),": The relative translation. Specified as a three-dimensional vector (",(0,o.jsx)(n.code,{children:"[x, y, z]"}),") and defaults to ",(0,o.jsx)(n.code,{children:"[0, 0, 0]"})," if absent."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rotation"})," or ",(0,o.jsx)(n.code,{children:"left_rotation"}),": Rotation around the translated origin to be applied before scaling. Defaults to no rotation. Specified in one of the following ways:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A JSON object with a single axis to rotation mapping, e.g. ",(0,o.jsx)(n.code,{children:'{"x": 90}'})]}),"\n",(0,o.jsxs)(n.li,{children:["An array of JSON objects with a single axis to rotation mapping each, applied in the order they are specified in, e.g. ",(0,o.jsx)(n.code,{children:'[{"x": 90}, {"y": 45}, {"x": -22.5}]'})]}),"\n",(0,o.jsxs)(n.li,{children:["An array with three values that each specify the rotation around each axis, e.g. ",(0,o.jsx)(n.code,{children:"[90, 45, -22.5]"})]}),"\n",(0,o.jsxs)(n.li,{children:["An array with four values directly specifying a quaternion, e.g. ",(0,o.jsx)(n.code,{children:"[0.38268346, 0, 0, 0.9238795]"})," (= 45 degrees around the X axis)"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"scale"}),": The scale relative to the translated origin. Specified as a three-dimensional vector (",(0,o.jsx)(n.code,{children:"[x, y, z]"}),") and defaults to ",(0,o.jsx)(n.code,{children:"[1, 1, 1]"})," if absent."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"post_rotation"})," or ",(0,o.jsx)(n.code,{children:"right_rotation"}),": Rotation around the translated origin to be applied after scaling. Defaults to no rotation. Specified the same as ",(0,o.jsx)(n.code,{children:"rotation"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"origin"}),": Origin point used for rotation and scaling. The transformation is also moved here as a final step. Specified either as a three-dimensional vector (",(0,o.jsx)(n.code,{children:"[x, y, z]"}),") or using one of the three builtin values ",(0,o.jsx)(n.code,{children:'"corner"'})," (= ",(0,o.jsx)(n.code,{children:"[0, 0, 0]"}),"), ",(0,o.jsx)(n.code,{children:'"center"'})," (= ",(0,o.jsx)(n.code,{children:"[0.5, 0.5, 0.5]"}),") or ",(0,o.jsx)(n.code,{children:'"opposing-corner"'})," (= ",(0,o.jsx)(n.code,{children:"[1, 1, 1]"}),", default)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"blockstate-files",children:"Blockstate Files"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["See also: ",(0,o.jsx)(n.a,{href:"https://minecraft.wiki/w/Tutorials/Models#Block_states",children:"Blockstate files"})," on the ",(0,o.jsx)(n.a,{href:"https://minecraft.wiki",children:"Minecraft Wiki"})]})}),"\n",(0,o.jsx)(n.p,{children:"Blockstate files are used by the game to assign different models to different [blockstates]. There must be exactly one blockstate file per block registered to the game. Specifying block models for blockstates works in two mutually exclusive ways: via variants or via multipart."}),"\n",(0,o.jsxs)(n.p,{children:["Inside a ",(0,o.jsx)(n.code,{children:"variants"})," block, there is an element for each blockstate. This is the predominant way of associating blockstates with models, used by the vast majority of blocks."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The key is the string representation of the blockstate without the block name, so for example ",(0,o.jsx)(n.code,{children:'"type=top,waterlogged=false"'})," for a non-waterlogged top slab, or ",(0,o.jsx)(n.code,{children:'""'})," for a block with no properties. It is worth noting that unused properties may be omitted. For example, if the ",(0,o.jsx)(n.code,{children:"waterlogged"})," property has no influence on the model chosen, two objects ",(0,o.jsx)(n.code,{children:"type=top,waterlogged=false"})," and ",(0,o.jsx)(n.code,{children:"type=top,waterlogged=true"})," may be collapsed into one ",(0,o.jsx)(n.code,{children:"type=top"})," object. This also means that an empty string is valid for every block."]}),"\n",(0,o.jsxs)(n.li,{children:["The value is either a single model object or an array of model objects. If an array of model objects is used, a model will be randomly chosen from it. A model object consists of the following data:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"model"}),": A path to a model file location, relative to the namespace's ",(0,o.jsx)(n.code,{children:"models"})," folder, for example ",(0,o.jsx)(n.code,{children:"minecraft:block/cobblestone"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"x"})," and ",(0,o.jsx)(n.code,{children:"y"}),": Rotation of the model on the x-axis/y-axis. Limited to steps of 90 degrees. Optional each, defaults to 0."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uvlock"}),": Whether to lock the UVs of the model when rotating or not. Optional, defaults to false."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"weight"}),": Only useful with arrays of model objects. Gives the object a weight, used when choosing a random model object. Optional, defaults to 1."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In contrast, inside a ",(0,o.jsx)(n.code,{children:"multipart"})," block, elements are combined depending on the properties of the blockstate. This method is mainly used by fences and walls, who enable the four directional parts based on boolean properties. A multipart element consists of two parts: a ",(0,o.jsx)(n.code,{children:"when"})," block and an ",(0,o.jsx)(n.code,{children:"apply"})," block."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"when"})," block specifies either a string representation of a blockstate or a list of properties that must be met for the element to apply. The lists can either be named ",(0,o.jsx)(n.code,{children:'"OR"'})," or ",(0,o.jsx)(n.code,{children:'"AND"'}),", performing the respective logical operation on its contents. Both single blockstate and list values can additionally specify multiple actual values by separating them with ",(0,o.jsx)(n.code,{children:"|"})," (for example ",(0,o.jsx)(n.code,{children:"facing=east|facing=west"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"apply"})," block specifies the model object or an array of model objects to use. This works exactly like with a ",(0,o.jsx)(n.code,{children:"variants"})," block."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tinting",children:"Tinting"}),"\n",(0,o.jsxs)(n.p,{children:["Some blocks, such as grass or leaves, change their texture color based on their location and/or properties. ",(0,o.jsx)(n.a,{href:"#elements",children:"Model elements"})," can specify a tint index on their faces, which will allow a color handler to handle the respective faces. The code side of things works through two events, one for block color handlers and one for item color handlers. They both work pretty similar, so let's have a look at a block handler first:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// Client-side mod bus event handler\n@SubscribeEvent\npublic static void registerBlockColorHandlers(RegisterColorHandlersEvent.Block event) {\n    // Parameters are the block's state, the level the block is in, the block's position, and the tint index.\n    // The level and position may be null.\n    event.register((state, level, pos, tintIndex) -> {\n        // Replace with your own calculation. See the BlockColors class for vanilla references.\n        // Colors are in ARGB format. Generally, if the tint index is -1, it means that no tinting\n        // should take place and a default value should be used instead.\n        return 0xFFFFFFFF;\n    });\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Item handlers work pretty much the same, except for some naming and the lambda parameters:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// Client-side mod bus event handler\n@SubscribeEvent\npublic static void registerItemColorHandlers(RegisterColorHandlersEvent.Item event) {\n    // Parameters are the item stack and the tint index.\n    event.register((stack, tintIndex) -> {\n        // Like above, replace with your own calculation. Vanilla values are in the ItemColors class.\n        // Also like above, tint index -1 means no tint and should use a default value instead.\n        return 0xFFFFFFFF;\n    });\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Be aware that the ",(0,o.jsx)(n.code,{children:"item/generated"})," model specifies tint indices for its various layers - ",(0,o.jsx)(n.code,{children:"layer0"})," has tint index 0, ",(0,o.jsx)(n.code,{children:"layer1"})," has tint index 1, etc. Also, remember that block items are items, not blocks, and require an item color handler to be colored."]}),"\n",(0,o.jsx)(n.h2,{id:"registering-additional-models",children:"Registering Additional Models"}),"\n",(0,o.jsxs)(n.p,{children:["Models that are not associated with a block or item in some way, but are still required in other contexts (e.g. ",(0,o.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/blockentities/ber",children:"block entity renderers"}),"), can be registered through ",(0,o.jsx)(n.code,{children:"ModelEvent.RegisterAdditional"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// Client-side mod bus event handler\n@SubscribeEvent\npublic static void registerAdditional(ModelEvent.RegisterAdditional event) {\n    event.register(new ResourceLocation("examplemod", "block/example_unused_model"));\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);