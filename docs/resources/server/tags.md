태그
====

태그는 게임속 여러 객체들을 하나로 묶고 이를 통해 추가적인 특성을 부여할 때 사용합니다. 예를 들어 화살들을 하나로 묶는 태그 `arrows`를 아이템에 부여하면 화살 및 쇠뇌를 발사할 때 탄약으로 사용할 수 있습니다.

새로운 태그 정의하기
----------------------------
태그는 모드의 [데이터 팩][datapack]으로 정의합니다. 예를 들어 `modid:foo/tagname`이란 이름의 `TagKey<Block>`은 `/data/<modid>/tags/blocks/foo/tagname.json`로 정의합니다. `Block`, `Item`, `EntityType`, `Fluid`, 그리고 `GameEvent`는 태그 폴더의 이름에 복수형을 사용하고, 나머지는 전부 단수형을 사용합니다. (`EntityType` 태그는 `entity_types` 폴더에 들어있는 반면 `Potion` 태그는 `potion`에 들어갑니다).

태그 또한 데이터의 일종이니 위 위치에 JSON 파일을 추가하여 바닐라 및 다른 모드에서 추가한 태그에 항목을 추가하거나, 아니면 덮어 씌울 수도 있습니다. 예를 들어, 모드에서 새로 추가한 묘목에 `saplings` 태그를 추가하여 다른 묘목처럼 동작하게 하려면 모드의 에셋 폴더에 `/data/minecraft/tags/blocks/saplings.json`을 작성하세요. 그러면 마인크래프트가 데이터 팩을 다시 불러올 때 기존 묘목 태그 목록과 합치거나, `replace` 항목이 `true`로 설정되어 있다면 대체합니다. `replace` 항목은 `true`로 설정될 경우 해당 JSON 파일보다 먼저 태그에 추가된 객체들은 제거됩니다.

만약 태그에 추가된 객체가 존재하지 않을 때, 아래처럼 `required`를 `false`로 지정하지 않는다면 오류가 발생합니다:

```js
{
  "replace": false, // 다른 항목들을 제거하지 않음
  "values": [
    "minecraft:gold_ingot",
    "mymod:my_ingot",
    {
      "id": "othermod:ingot_other",
      "required": false // othermod:ingot_other가 누락되어도 오류가 발생하지 않도록 함.
    }
  ]
}
```

태그 파일의 문법은 [공식 위키][tags]를 참고하세요.

포지는 기존 태그 파일의 문법을 확장합니다: 위 `values` 항목과 같은 형식으로 `remove` 항목을 추가할 수 있습니다. `remove`에 나열된 객체들은 해당 태그가 제거됩니다.

코드에서 태그 사용하기
------------------
클라이언트가 서버에 접속할 시, 서버는 클라이언트에 모든 레지스트리의 태그를 전송합니다. `Block`, `Item`, `EntityType`, `Fluid`, 그리고 `GameEvent`는 태그를 특별하게 관리하는데, `Holder`를 통해 태그를 저장합니다.

:::note
Intrusive `Holder`는 추후 마인크래프트에서 제거될 것으로 추정됩니다. 만약 제거될 예정이라면 아래 메서드를 대신 사용해 `Holder`의 태그를 받아올 수 있습니다.
:::

### ITagManager

Forge wrapped registries provide an additional helper for creating and managing tags through `ITagManager` which can be obtained via `IForgeRegistry#tags`. Tags can be created using using `#createTagKey` or `#createOptionalTagKey`. Tags or registry objects can also be checked for either or using `#getTag` or `#getReverseTag` respectively.

#### 새로 만든 레지스트리

Custom registries can create tags when constructing their `DeferredRegister` via `#createTagKey` or `#createOptionalTagKey` respectively. Their tags or registry objects can then checked for either using the `IForgeRegistry` obtained by calling `DeferredRegister#makeRegistry`.

### Referencing Tags

There are four methods of creating a tag wrapper:

Method                          | For
:---:                           | :---
`*Tags#create`                  | `BannerPattern`, `Biome`, `Block`, `CatVariant`, `DamageType`, `EntityType`, `FlatLevelGeneratorPreset`, `Fluid`, `GameEvent`, `Instrument`, `Item`, `PaintingVariant`, `PoiType`, `Structure`, and `WorldPreset` where `*` represents one of these types.
`ITagManager#createTagKey`      | Forge wrapped vanilla registries, registries can be obtained from `ForgeRegistries`.
`DeferredRegister#createTagKey` | Custom forge registries.
`TagKey#create`                 | Vanilla registries without forge wrappers, registries can be obtained from `Registry`.

Registry objects can check their tags or registry objects either through their `Holder` or through `ITag`/`IReverseTag` for vanilla or forge registry objects respectively.

Vanilla registry objects can grab their associated holder using either `Registry#getHolder` or `Registry#getHolderOrThrow` and then compare if the registry object has a tag using `Holder#is`.

Forge registry objects can grab their tag definition using either `ITagManager#getTag` or `ITagManager#getReverseTag` and then compare if a registry object has a tag using `ITag#contains` or `IReverseTag#containsTag` respectively.

Tag-holding registry objects contain a method called `#is` in either their registry object or state-aware class to check whether the object belongs to a certain tag.

As an example:
```java
public static final TagKey<Item> myItemTag = ItemTags.create(new ResourceLocation("mymod", "myitemgroup"));

public static final TagKey<Potion> myPotionTag = ForgeRegistries.POTIONS.tags().createTagKey(new ResourceLocation("mymod", "mypotiongroup"));

public static final TagKey<VillagerType> myVillagerTypeTag = TagKey.create(Registries.VILLAGER_TYPE, new ResourceLocation("mymod", "myvillagertypegroup"));

// In some method:

ItemStack stack = /*...*/;
boolean isInItemGroup = stack.is(myItemTag);

Potion potion = /*...*/;
boolean isInPotionGroup  = ForgeRegistries.POTIONS.tags().getTag(myPotionTag).contains(potion);

ResourceKey<VillagerType> villagerTypeKey = /*...*/;
boolean isInVillagerTypeGroup = BuiltInRegistries.VILLAGER_TYPE.getHolder(villagerTypeKey).map(holder -> holder.is(myVillagerTypeTag)).orElse(false);
```

Conventions
-----------

There are several conventions that will help facilitate compatibility in the ecosystem:

* If there is a Vanilla tag that fits your block or item, add it to that tag. See the [list of Vanilla tags][taglist].
* If there is a Forge tag that fits your block or item, add it to that tag. The list of tags declared by Forge can be seen on [GitHub][forgetags].
* If there is a group of something you feel should be shared by the community, use the `forge` namespace instead of your mod id.
* Tag naming conventions should follow Vanilla conventions. In particular, item and block groupings are plural instead of singular (e.g. `minecraft:logs`, `minecraft:saplings`).
* Item tags should be sorted into subdirectories according to their type (e.g. `forge:ingots/iron`, `forge:nuggets/brass`, etc.).


Migration from OreDictionary
----------------------------

* For recipes, tags can be used directly in the vanilla recipe format (see below).
* For matching items in code, see the section above.
* If you are declaring a new type of item grouping, follow a couple naming conventions:
  * Use `domain:type/material`. When the name is a common one that all modders should adopt, use the `forge` domain.
  * For example, brass ingots should be registered under the `forge:ingots/brass` tag and cobalt nuggets under the `forge:nuggets/cobalt` tag.


Using Tags in Recipes and Advancements
--------------------------------------

Tags are directly supported by Vanilla. See the respective Vanilla wiki pages for [recipes] and [advancements] for usage details.

[datapack]: ./index.md
[tags]: https://minecraft.wiki/w/Tag#JSON_format
[taglist]: https://minecraft.wiki/w/Tag#List_of_tags
[forgetags]: https://github.com/neoforged/NeoForge/tree/1.20.x/src/generated/resources/data/forge/tags
[recipes]: https://minecraft.wiki/w/Recipe#JSON_format
[advancements]: https://minecraft.wiki/w/Advancement
