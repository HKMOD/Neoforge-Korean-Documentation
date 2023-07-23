"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={},r="Menus",l={unversionedId:"gui/menus",id:"gui/menus",title:"Menus",description:"Menus are one type of backend for Graphical User Interfaces, or GUIs; they handle the logic involved in interacting with some represented data holder. Menus themselves are not data holders. They are views which allow to user to indirectly modify the internal data holder state. As such, a data holder should not be directly coupled to any menu, instead passing in the data references to invoke and modify.",source:"@site/docs/gui/menus.md",sourceDirName:"gui",slug:"/gui/menus",permalink:"/Neoforge-Korean-Documentation/en/docs/gui/menus",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Sounds",permalink:"/Neoforge-Korean-Documentation/en/docs/gameeffects/sounds"},next:{title:"Screens",permalink:"/Neoforge-Korean-Documentation/en/docs/gui/screens"}},s={},c=[{value:"<code>MenuType</code>",id:"menutype",level:2},{value:"<code>MenuSupplier</code>",id:"menusupplier",level:3},{value:"<code>IContainerFactory</code>",id:"icontainerfactory",level:3},{value:"<code>AbstractContainerMenu</code>",id:"abstractcontainermenu",level:2},{value:"<code>#stillValid</code> and <code>ContainerLevelAccess</code>",id:"stillvalid-and-containerlevelaccess",level:3},{value:"Data Synchronization",id:"data-synchronization",level:3},{value:"<code>ContainerData</code>",id:"containerdata",level:4},{value:"<code>#quickMoveStack</code>",id:"quickmovestack",level:4},{value:"Opening a Menu",id:"opening-a-menu",level:2},{value:"<code>MenuProvider</code>",id:"menuprovider",level:4},{value:"Common Implementations",id:"common-implementations",level:3},{value:"Block Implementation",id:"block-implementation",level:4},{value:"Mob Implementation",id:"mob-implementation",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"menus"},"Menus"),(0,o.kt)("p",null,"Menus are one type of backend for Graphical User Interfaces, or GUIs; they handle the logic involved in interacting with some represented data holder. Menus themselves are not data holders. They are views which allow to user to indirectly modify the internal data holder state. As such, a data holder should not be directly coupled to any menu, instead passing in the data references to invoke and modify."),(0,o.kt)("h2",{id:"menutype"},(0,o.kt)("inlineCode",{parentName:"h2"},"MenuType")),(0,o.kt)("p",null,"Menus are created and removed dynamically and as such are not registry objects. As such, another factory object is registered instead to easily create and refer to the ",(0,o.kt)("em",{parentName:"p"},"type")," of the menu. For a menu, these are ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuType"),"s."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MenuType"),"s must be ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/registries#methods-for-registering"},"registered"),"."),(0,o.kt)("h3",{id:"menusupplier"},(0,o.kt)("inlineCode",{parentName:"h3"},"MenuSupplier")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuType")," is created by passing in a ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuSupplier")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlagSet")," to its constructor. A ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuSupplier")," represents a function which takes in the id of the container and the inventory of the player viewing the menu, and returns a newly created ",(0,o.kt)("a",{parentName:"p",href:"#abstractcontainermenu"},(0,o.kt)("inlineCode",{parentName:"a"},"AbstractContainerMenu")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// For some DeferredRegister<MenuType<?>> REGISTER\npublic static final RegistryObject<MenuType<MyMenu>> MY_MENU = REGISTER.register("my_menu", () -> new MenuType(MyMenu::new, FeatureFlags.DEFAULT_FLAGS));\n\n// In MyMenu, an AbstractContainerMenu subclass\npublic MyMenu(int containerId, Inventory playerInv) {\n  super(MY_MENU.get(), containerId);\n  // ...\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The container identifier is unique for an individual player. This means that the same container id on two different players will represent two different menus, even if they are viewing the same data holder.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuSupplier")," is usually responsible for creating a menu on the client with dummy data references used to store and interact with the synced information from the server data holder."),(0,o.kt)("h3",{id:"icontainerfactory"},(0,o.kt)("inlineCode",{parentName:"h3"},"IContainerFactory")),(0,o.kt)("p",null,"If additional information is needed on the client (e.g. the position of the data holder in the world), then the subclass ",(0,o.kt)("inlineCode",{parentName:"p"},"IContainerFactory")," can be used instead. In addition to the container id and the player inventory, this also provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"FriendlyByteBuf")," which can store additional information that was sent from the server. A ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuType")," can be created using an ",(0,o.kt)("inlineCode",{parentName:"p"},"IContainerFactory")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"IForgeMenuType#create"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// For some DeferredRegister<MenuType<?>> REGISTER\npublic static final RegistryObject<MenuType<MyMenuExtra>> MY_MENU_EXTRA = REGISTER.register("my_menu_extra", () -> IForgeMenuType.create(MyMenu::new));\n\n// In MyMenuExtra, an AbstractContainerMenu subclass\npublic MyMenuExtra(int containerId, Inventory playerInv, FriendlyByteBuf extraData) {\n  super(MY_MENU_EXTRA.get(), containerId);\n  // Store extra data from buffer\n  // ...\n}\n')),(0,o.kt)("h2",{id:"abstractcontainermenu"},(0,o.kt)("inlineCode",{parentName:"h2"},"AbstractContainerMenu")),(0,o.kt)("p",null,"All menus are extended from ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractContainerMenu"),". A menu takes in two parameters, the ",(0,o.kt)("a",{parentName:"p",href:"#menutype"},(0,o.kt)("inlineCode",{parentName:"a"},"MenuType")),", which represents the type of the menu itself, and the container id, which represents the unique identifier of the menu for the current accessor."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The player can only have 100 unique menus open at once.")),(0,o.kt)("p",null,"Each menu should contain two constructors: one used to initialize the menu on the server and one used to initialize the menu on the client. The constructor used to initialize the menu on the client is the one supplied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuType"),". Any fields that the server menu constructor contains should have some default for the client menu constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Client menu constructor\npublic MyMenu(int containerId, Inventory playerInventory) {\n  this(containerId, playerInventory);\n}\n\n// Server menu constructor\npublic MyMenu(int containerId, Inventory playerInventory) {\n  // ...\n}\n")),(0,o.kt)("p",null,"Each menu implementation must implement two methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"#stillValid")," and ",(0,o.kt)("a",{parentName:"p",href:"#quickmovestack"},(0,o.kt)("inlineCode",{parentName:"a"},"#quickMoveStack")),"."),(0,o.kt)("h3",{id:"stillvalid-and-containerlevelaccess"},(0,o.kt)("inlineCode",{parentName:"h3"},"#stillValid")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"ContainerLevelAccess")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#stillValid")," determines whether the menu should remain open for a given player. This is typically directed to the static ",(0,o.kt)("inlineCode",{parentName:"p"},"#stillValid")," which takes in a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerLevelAccess"),", the player, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," this menu is attached to. The client menu must always return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for this method, which the static ",(0,o.kt)("inlineCode",{parentName:"p"},"#stillValid")," does default to. This implementation checks whether the player is within eight blocks of where the data storage object is located."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerLevelAccess")," supplies the current level and location of the block within an enclosed scope. When constructing the menu on the server, a new access can be created by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerLevelAccess#create"),". The client menu constructor can pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerLevelAccess#NULL"),", which will do nothing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Client menu constructor\npublic MyMenuAccess(int containerId, Inventory playerInventory) {\n  this(containerId, playerInventory, ContainerLevelAccess.NULL);\n}\n\n// Server menu constructor\npublic MyMenuAccess(int containerId, Inventory playerInventory, ContainerLevelAccess access) {\n  // ...\n}\n\n// Assume this menu is attached to RegistryObject<Block> MY_BLOCK\n@Override\npublic boolean stillValid(Player player) {\n  return AbstractContainerMenu.stillValid(this.access, player, MY_BLOCK.get());\n}\n")),(0,o.kt)("h3",{id:"data-synchronization"},"Data Synchronization"),(0,o.kt)("p",null,"Some data needs to be present on both the server and the client to display to the player. To do this, the menu implements a basic layer of data synchronization such that whenever the current data does not match the data last synced to the client. For players, this is checked every tick."),(0,o.kt)("p",null,"Minecraft supports two forms of data synchronization by default: ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemStack"),"s via ",(0,o.kt)("inlineCode",{parentName:"p"},"Slot"),"s and integers via ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSlot"),"s. ",(0,o.kt)("inlineCode",{parentName:"p"},"Slot"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSlot"),"s are views which hold references to data storages that can be be modified by the player in a screen, assuming the action is valid. These can be added to a menu within the constructor through ",(0,o.kt)("inlineCode",{parentName:"p"},"#addSlot")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#addDataSlot"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"Container"),"s used by ",(0,o.kt)("inlineCode",{parentName:"p"},"Slot"),"s are deprecated by Forge in favor of using the ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/datastorage/capabilities#forge-provided-capabilities"},(0,o.kt)("inlineCode",{parentName:"a"},"IItemHandler")," capability"),", the rest of the explanation will revolve around using the capability variant: ",(0,o.kt)("inlineCode",{parentName:"p"},"SlotItemHandler"),".")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"SlotItemHandler")," contains four parameters: the ",(0,o.kt)("inlineCode",{parentName:"p"},"IItemHandler")," representing the inventory the stacks are within, the index of the stack this slot is specifically representing, and the x and y position of where the top-left position of the slot will render on the screen relative to ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractContainerScreen#leftPos")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#topPos"),". The client menu constructor should always supply an empty instance of an inventory of the same size."),(0,o.kt)("p",null,"In most cases, any slots the menu contains is first added, followed by the player's inventory, and finally concluded with the player's hotbar. To access any individual ",(0,o.kt)("inlineCode",{parentName:"p"},"Slot")," from the menu, the index must be calculated based upon the order of which slots were added."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSlot")," is an abstract class which should implement a getter and setter to reference the data stored in the data storage object. The client menu constructor should always supply a new instance via ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSlot#standalone"),"."),(0,o.kt)("p",null,"These, along with slots, should be recreated every time a new menu is initialized."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Although a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSlot")," stores an integer, it is effectively limited to a ",(0,o.kt)("strong",{parentName:"p"},"short")," (-32768 to 32767) because of how it sends the value across the network. The 16 high-order bits of the integer are ignored.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Assume we have an inventory from a data object of size 5\n// Assume we have a DataSlot constructed on each initialization of the server menu\n\n// Client menu constructor\npublic MyMenuAccess(int containerId, Inventory playerInventory) {\n  this(containerId, playerInventory, new ItemStackHandler(5), DataSlot.standalone());\n}\n\n// Server menu constructor\npublic MyMenuAccess(int containerId, Inventory playerInventory, IItemHandler dataInventory, DataSlot dataSingle) {\n  // Check if the data inventory size is some fixed value\n  // Then, add slots for data inventory\n  this.addSlot(new SlotItemHandler(dataInventory, /*...*/));\n\n  // Add slots for player inventory\n  this.addSlot(new Slot(playerInventory, /*...*/));\n\n  // Add data slots for handled integers\n  this.addDataSlot(dataSingle);\n\n  // ...\n}\n")),(0,o.kt)("h4",{id:"containerdata"},(0,o.kt)("inlineCode",{parentName:"h4"},"ContainerData")),(0,o.kt)("p",null,"If multiple integers need to be synced to the client, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerData")," can be used to reference the integers instead. This interface functions as an index lookup such that each index represents a different integer. ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerData"),"s can also be constructed in the data object itself if the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerData")," is added to the menu through ",(0,o.kt)("inlineCode",{parentName:"p"},"#addDataSlots"),". The method creates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSlot")," for the amount of data specified by the interface. The client menu constructor should always supply a new instance via ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleContainerData"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Assume we have a ContainerData of size 3\n\n// Client menu constructor\npublic MyMenuAccess(int containerId, Inventory playerInventory) {\n  this(containerId, playerInventory, new SimpleContainerData(3));\n}\n\n// Server menu constructor\npublic MyMenuAccess(int containerId, Inventory playerInventory, ContainerData dataMultiple) {\n  // Check if the ContainerData size is some fixed value\n  checkContainerDataCount(dataMultiple, 3);\n\n  // Add data slots for handled integers\n  this.addDataSlots(dataMultiple);\n\n  // ...\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerData")," delegates to ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSlot"),"s, these are also limited to a ",(0,o.kt)("strong",{parentName:"p"},"short")," (-32768 to 32767).")),(0,o.kt)("h4",{id:"quickmovestack"},(0,o.kt)("inlineCode",{parentName:"h4"},"#quickMoveStack")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#quickMoveStack")," is the second method that must be implemented by any menu. This method is called whenever a stack has been shift-clicked, or quick moved, out of its current slot until the stack has been fully moved out of its previous slot or there is no other place for the stack to go. The method returns a copy of the stack in the slot being quick moved."),(0,o.kt)("p",null,"Stacks are typically moved between slots using ",(0,o.kt)("inlineCode",{parentName:"p"},"#moveItemStackTo"),", which moves the stack into the first available slot. It takes in the stack to be moved, the first slot index (inclusive) to try and move the stack to, the last slot index (exclusive), and whether to check the slots from first to last (when ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") or from last to first (when ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,o.kt)("p",null,"Across Minecraft implementations, this method is fairly consistent in its logic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Assume we have a data inventory of size 5\n// The inventory has 4 inputs (index 1 - 4) which outputs to a result slot (index 0)\n// We also have the 27 player inventory slots and the 9 hotbar slots\n// As such, the actual slots are indexed like so:\n//   - Data Inventory: Result (0), Inputs (1 - 4)\n//   - Player Inventory (5 - 31)\n//   - Player Hotbar (32 - 40)\n@Override\npublic ItemStack quickMoveStack(Player player, int quickMovedSlotIndex) {\n  // The quick moved slot stack\n  ItemStack quickMovedStack = ItemStack.EMPTY;\n  // The quick moved slot\n  Slot quickMovedSlot = this.slots.get(quickMovedSlotIndex) \n  \n   // If the slot is in the valid range and the slot is not empty\n  if (quickMovedSlot != null && quickMovedSlot.hasItem()) {\n    // Get the raw stack to move\n    ItemStack rawStack = quickMovedSlot.getItem(); \n    // Set the slot stack to a copy of the raw stack\n    quickMovedStack = rawStack.copy();\n\n    /*\n    The following quick move logic can be simplified to if in data inventory,\n    try to move to player inventory/hotbar and vice versa for containers\n    that cannot transform data (e.g. chests).\n    */\n\n    // If the quick move was performed on the data inventory result slot\n    if (quickMovedSlotIndex == 0) {\n      // Try to move the result slot into the player inventory/hotbar\n      if (!this.moveItemStackTo(rawStack, 5, 41, true)) {\n        // If cannot move, no longer quick move\n        return ItemStack.EMPTY;\n      }\n\n      // Perform logic on result slot quick move\n      slot.onQuickCraft(rawStack, quickMovedStack);\n    }\n    // Else if the quick move was performed on the player inventory or hotbar slot\n    else if (quickMovedSlotIndex >= 5 && quickMovedSlotIndex < 41) {\n      // Try to move the inventory/hotbar slot into the data inventory input slots\n      if (!this.moveItemStackTo(rawStack, 1, 5, false)) {\n        // If cannot move and in player inventory slot, try to move to hotbar\n        if (quickMovedSlotIndex < 32) {\n          if (!this.moveItemStackTo(rawStack, 32, 41, false)) {\n            // If cannot move, no longer quick move\n            return ItemStack.EMPTY;\n          }\n        }\n        // Else try to move hotbar into player inventory slot\n        else if (!this.moveItemStackTo(rawStack, 5, 32, false)) {\n          // If cannot move, no longer quick move\n          return ItemStack.EMPTY;\n        }\n      }\n    }\n    // Else if the quick move was performed on the data inventory input slots, try to move to player inventory/hotbar\n    else if (!this.moveItemStackTo(rawStack, 5, 41, false)) {\n      // If cannot move, no longer quick move\n      return ItemStack.EMPTY;\n    }\n\n    if (rawStack.isEmpty()) {\n      // If the raw stack has completely moved out of the slot, set the slot to the empty stack\n      quickMovedSlot.set(ItemStack.EMPTY);\n    } else {\n      // Otherwise, notify the slot that that the stack count has changed\n      quickMovedSlot.setChanged();\n    }\n\n    /*\n    The following if statement and Slot#onTake call can be removed if the\n    menu does not represent a container that can transform stacks (e.g.\n    chests).\n    */\n    if (rawStack.getCount() == quickMovedStack.getCount()) {\n      // If the raw stack was not able to be moved to another slot, no longer quick move\n      return ItemStack.EMPTY;\n    }\n    // Execute logic on what to do post move with the remaining stack\n    quickMovedSlot.onTake(player, rawStack);\n  }\n\n  return quickMovedStack; // Return the slot stack\n}\n")),(0,o.kt)("h2",{id:"opening-a-menu"},"Opening a Menu"),(0,o.kt)("p",null,"Once a menu type has been registered, the menu itself has been finished, and a ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/gui/screens"},"screen")," has been attached, a menu can then be opened by the player. Menus can be opened by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkHooks#openScreen")," on the logical server. The method takes in the player opening the menu, the ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuProvider")," of the server side menu, and optionally a ",(0,o.kt)("inlineCode",{parentName:"p"},"FriendlyByteBuf")," if extra data needs to be synced to the client."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"NetworkHooks#openScreen")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"FriendlyByteBuf")," parameter should only be used if a menu type was created using an ",(0,o.kt)("a",{parentName:"p",href:"#icontainerfactory"},(0,o.kt)("inlineCode",{parentName:"a"},"IContainerFactory")),".")),(0,o.kt)("h4",{id:"menuprovider"},(0,o.kt)("inlineCode",{parentName:"h4"},"MenuProvider")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuProvider")," is an interface that contains two methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"#createMenu"),", which creates the server instance of the menu, and ",(0,o.kt)("inlineCode",{parentName:"p"},"#getDisplayName"),", which returns a component containing the title of the menu to pass to the ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/gui/screens"},"screen"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"#createMenu")," method contains three parameter: the container id of the menu, the inventory of the player who opened the menu, and the player who opened the menu."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuProvider")," can easily be created using ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleMenuProvider"),", which takes in a method reference to create the server menu and the title of the menu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// In some implementation\nNetworkHooks.openScreen(serverPlayer, new SimpleMenuProvider(\n  (containerId, playerInventory, player) -> new MyMenu(containerId, playerInventory),\n  Component.translatable("menu.title.examplemod.mymenu")\n));\n')),(0,o.kt)("h3",{id:"common-implementations"},"Common Implementations"),(0,o.kt)("p",null,"Menus are typically opened on a player interaction of some kind (e.g. when a block or entity is right-clicked)."),(0,o.kt)("h4",{id:"block-implementation"},"Block Implementation"),(0,o.kt)("p",null,"Blocks typically implement a menu by overriding ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockBehaviour#use"),". If on the logical client, the interaction returns ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractionResult#SUCCESS"),". Otherwise, it opens the menu and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractionResult#CONSUME"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuProvider")," should be implemented by overriding ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockBehaviour#getMenuProvider"),". Vanilla methods use this to view the menu in spectator mode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// In some Block subclass\n@Override\npublic MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) {\n  return new SimpleMenuProvider(/* ... */);\n}\n\n@Override\npublic InteractionResult use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult result) {\n  if (!level.isClientSide && player instanceof ServerPlayer serverPlayer) {\n    NetworkHooks.openScreen(serverPlayer, state.getMenuProvider(level, pos));\n  }\n  return InteractionResult.sidedSuccess(level.isClientSide);\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is the simplest way to implement the logic, not the only way. If you want the block to only open the menu under certain conditions, then some data will need to be synced to the client beforehand to return ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractionResult#PASS")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"#FAIL")," if the conditions are not met.")),(0,o.kt)("h4",{id:"mob-implementation"},"Mob Implementation"),(0,o.kt)("p",null,"Mobs typically implement a menu by overriding ",(0,o.kt)("inlineCode",{parentName:"p"},"Mob#mobInteract"),". This is done similarly to the block implementation with the only difference being that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mob")," itself should implement ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuProvider")," to support spectator mode viewing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class MyMob extends Mob implements MenuProvider {\n  // ...\n\n  @Override\n  public InteractionResult mobInteract(Player player, InteractionHand hand) {\n    if (!this.level.isClientSide && player instanceof ServerPlayer serverPlayer) {\n      NetworkHooks.openScreen(serverPlayer, this);\n    }\n    return InteractionResult.sidedSuccess(this.level.isClientSide);\n  }\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Once again, this is the simplest way to implement the logic, not the only way.")))}u.isMDXComponent=!0}}]);