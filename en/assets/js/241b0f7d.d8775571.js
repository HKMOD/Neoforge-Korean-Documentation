"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2415],{6023:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(5893),t=n(1151);const i={},s="Coloring Textures",c={id:"resources/client/models/tinting",title:"Coloring Textures",description:'Many blocks and items in vanilla change their texture color depending on where they are or what properties they have, such as grass. Models support specifying "tint indices" on faces, which are integers that can then be handled by BlockColors and ItemColors. See the wiki for information on how tint indices are defined in vanilla models.',source:"@site/docs/resources/client/models/tinting.md",sourceDirName:"resources/client/models",slug:"/resources/client/models/tinting",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/client/models/tinting",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Item Properties",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/client/models/itemproperties"},next:{title:"\ub370\uc774\ud130\ud329",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/server/"}},l={},d=[{value:"<code>BlockColor</code>/<code>ItemColor</code>",id:"blockcoloritemcolor",level:3},{value:"Creating Color Handlers",id:"creating-color-handlers",level:3}];function a(e){const o={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"coloring-textures",children:"Coloring Textures"}),"\n",(0,r.jsxs)(o.p,{children:['Many blocks and items in vanilla change their texture color depending on where they are or what properties they have, such as grass. Models support specifying "tint indices" on faces, which are integers that can then be handled by ',(0,r.jsx)(o.code,{children:"BlockColor"}),"s and ",(0,r.jsx)(o.code,{children:"ItemColor"}),"s. See the ",(0,r.jsx)(o.a,{href:"https://minecraft.wiki/w/Tutorials/Models#Block_models",children:"wiki"})," for information on how tint indices are defined in vanilla models."]}),"\n",(0,r.jsxs)(o.h3,{id:"blockcoloritemcolor",children:[(0,r.jsx)(o.code,{children:"BlockColor"}),"/",(0,r.jsx)(o.code,{children:"ItemColor"})]}),"\n",(0,r.jsxs)(o.p,{children:["Both of these are single-method interfaces. ",(0,r.jsx)(o.code,{children:"BlockColor"})," takes a ",(0,r.jsx)(o.code,{children:"BlockState"}),", a (nullable) ",(0,r.jsx)(o.code,{children:"BlockAndTintGetter"}),", and a (nullable) ",(0,r.jsx)(o.code,{children:"BlockPos"}),". ",(0,r.jsx)(o.code,{children:"ItemColor"})," takes an ",(0,r.jsx)(o.code,{children:"ItemStack"}),". Both of them take an ",(0,r.jsx)(o.code,{children:"int"})," parameter ",(0,r.jsx)(o.code,{children:"tintIndex"}),", which is the tint index of the face being colored. Both of them return an ",(0,r.jsx)(o.code,{children:"int"}),", a color multiplier. This ",(0,r.jsx)(o.code,{children:"int"})," is treated as 4 unsigned bytes, alpha, red, green, and blue, in that order, from most significant byte to least. For each pixel in the tinted face, the value of each color channel is ",(0,r.jsx)(o.code,{children:"(int)((float) base * multiplier / 255.0)"}),", where ",(0,r.jsx)(o.code,{children:"base"})," is the original value for the channel, and ",(0,r.jsx)(o.code,{children:"multiplier"})," is the associated byte from the color multiplier. Note that blocks do not use the alpha channel. For example, the grass texture, untinted, looks white and gray. The ",(0,r.jsx)(o.code,{children:"BlockColor"})," and ",(0,r.jsx)(o.code,{children:"ItemColor"})," for grass return color multipliers with low red and blue components, but high alpha and green components, (at least in warm biomes) so when the multiplication is performed, the green is brought out and the red/blue diminished."]}),"\n",(0,r.jsxs)(o.p,{children:["If an item inherits from the ",(0,r.jsx)(o.code,{children:"builtin/generated"}),' model, each layer ("layer0", "layer1", etc.) has a tint index corresponding to its layer index.']}),"\n",(0,r.jsx)(o.h3,{id:"creating-color-handlers",children:"Creating Color Handlers"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"BlockColor"}),"s need to be registered to the ",(0,r.jsx)(o.code,{children:"BlockColors"})," instance of the game. ",(0,r.jsx)(o.code,{children:"BlockColors"})," can be acquired through ",(0,r.jsx)(o.code,{children:"RegisterColorHandlersEvent$Block"}),", and an ",(0,r.jsx)(o.code,{children:"BlockColor"})," can be registered by ",(0,r.jsx)(o.code,{children:"#register"}),". Note that this does not cause the ",(0,r.jsx)(o.code,{children:"BlockItem"})," for the given block to be colored. ",(0,r.jsx)(o.code,{children:"BlockItem"}),"s are items and need to be colored with an ",(0,r.jsx)(o.code,{children:"ItemColor"}),"."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"@SubscribeEvent\npublic void registerBlockColors(RegisterColorHandlersEvent.Block event){\n  event.register(myBlockColor, coloredBlock1, coloredBlock2, ...);\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"ItemColor"}),"s need to be registered to the ",(0,r.jsx)(o.code,{children:"ItemColors"})," instance of the game. ",(0,r.jsx)(o.code,{children:"ItemColors"})," can be acquired through ",(0,r.jsx)(o.code,{children:"RegisterColorHandlersEvent$Item"}),", and an ",(0,r.jsx)(o.code,{children:"ItemColor"})," can be registered by ",(0,r.jsx)(o.code,{children:"#register"}),". This method is overloaded to also take ",(0,r.jsx)(o.code,{children:"Block"}),"s, which simply registers the color handler for the item ",(0,r.jsx)(o.code,{children:"Block#asItem"})," (i.e. the block's ",(0,r.jsx)(o.code,{children:"BlockItem"}),")."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"@SubscribeEvent\npublic void registerItemColors(RegisterColorHandlersEvent.Item event){\n  event.register(myItemColor, coloredItem1, coloredItem2, ...);\n}\n"})})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>s});var r=n(7294);const t={},i=r.createContext(t);function s(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);