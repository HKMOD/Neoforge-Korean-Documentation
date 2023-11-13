"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[9766],{823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(5893),d=t(1151);const a={},i="Advancement Generation",o={id:"datagen/server/advancements",title:"Advancement Generation",description:"Advancements] can be generated for a mod by constructing a new AdvancementProvider and providing AdvancementSubProviders. Advancements can either be created and supplied manually or, for convenience, created using Advancement$Builder. The provider must be [added to the DataGenerator.",source:"@site/docs/datagen/server/advancements.md",sourceDirName:"datagen/server",slug:"/datagen/server/advancements",permalink:"/Neoforge-Korean-Documentation/docs/datagen/server/advancements",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Sound Definition Generation",permalink:"/Neoforge-Korean-Documentation/docs/datagen/client/sounds"},next:{title:"Datapack Registry Object Generation",permalink:"/Neoforge-Korean-Documentation/docs/datagen/server/datapackregistries"}},c={},s=[{value:"<code>ForgeAdvancementProvider$AdvancementGenerator</code>",id:"forgeadvancementprovideradvancementgenerator",level:2},{value:"<code>Advancement$Builder</code>",id:"advancementbuilder",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"advancement-generation",children:"Advancement Generation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/resources/server/advancements",children:"Advancements"})," can be generated for a mod by constructing a new ",(0,r.jsx)(n.code,{children:"AdvancementProvider"})," and providing ",(0,r.jsx)(n.code,{children:"AdvancementSubProvider"}),"s. Advancements can either be created and supplied manually or, for convenience, created using ",(0,r.jsx)(n.code,{children:"Advancement$Builder"}),". The provider must be ",(0,r.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/datagen/#data-providers",children:"added"})," to the ",(0,r.jsx)(n.code,{children:"DataGenerator"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["!!! note\nForge provides an extension for the ",(0,r.jsx)(n.code,{children:"AdvancementProvider"})," called ",(0,r.jsx)(n.code,{children:"ForgeAdvancementProvider"})," which integrates better for generating advancements. So, this documentation will use ",(0,r.jsx)(n.code,{children:"ForgeAdvancementProvider"})," along with the sub provider interface ",(0,r.jsx)(n.code,{children:"ForgeAdvancementProvider$AdvancementGenerator"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// On the MOD event bus\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // Tell generator to run only when server data are generating\n        event.includeServer(),\n        output -> new ForgeAdvancementProvider(\n          output,\n          event.getLookupProvider(),\n          event.getExistingFileHelper(),\n          // Sub providers which generate the advancements\n          List.of(subProvider1, subProvider2, /*...*/)\n        )\n    );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"forgeadvancementprovideradvancementgenerator",children:(0,r.jsx)(n.code,{children:"ForgeAdvancementProvider$AdvancementGenerator"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"ForgeAdvancementProvider$AdvancementGenerator"})," is responsible for generating advancements, containing a method which takes in a registry lookup, the writer (",(0,r.jsx)(n.code,{children:"Consumer<Advancement>"}),"), and the existing file helper.."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// In some subclass of ForgeAdvancementProvider$AdvancementGenerator or as a lambda reference\n\n@Override\npublic void generate(HolderLookup.Provider registries, Consumer<Advancement> writer, ExistingFileHelper existingFileHelper) {\n  // Build advancements here\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"advancementbuilder",children:(0,r.jsx)(n.code,{children:"Advancement$Builder"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Advancement$Builder"})," is a convenience implementation for creating ",(0,r.jsx)(n.code,{children:"Advancement"}),"s to generate. It allows the definition of the parent advancement, the display information, the rewards when the advancement has been completed, and the requirements to unlock the advancement. Only the requirements need to be specified to create an ",(0,r.jsx)(n.code,{children:"Advancement"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Although not required, there are a number of methods that are important to know of:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Method"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"parent"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Sets the advancement which this advancement is directly linked to. Can either specify the name of the advancement or the advancement itself if its generated by the modder."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"display"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Sets the information to display to the chat, toast, and advancement screen."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"rewards"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Sets the rewards obtained when this advancement is completed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"addCriterion"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Adds a condition to the advancement."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"requirements"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Specifies if the conditions must all return true or at least one must return true. An additional overload can be used to mix-and-match those operations."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Once an ",(0,r.jsx)(n.code,{children:"Advancement$Builder"})," is ready to be built, the ",(0,r.jsx)(n.code,{children:"#save"})," method should be called which takes in the writer, the registry name of the advancement, and the file helper used to check whether the supplied parent exists."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// In some ForgeAdvancementProvider$AdvancementGenerator#generate(registries, writer, existingFileHelper)\nAdvancement example = Advancement.Builder.advancement()\n  .addCriterion("example_criterion", triggerInstance) // How the advancement is unlocked\n  .save(writer, name, existingFileHelper); // Add data to builder\n'})})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7294);const d={},a=r.createContext(d);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);