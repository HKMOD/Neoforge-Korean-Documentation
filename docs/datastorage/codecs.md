# 코덱

코덱(Codec)은 모장의 [DataFixerUpper(DFU)][DataFixerUpper]에서 사용하는 직렬화 도구로, 객체를 `JsonElement` 또는 `Tag`와 같은 여러 데이터 포맷으로 변환하는 방법을 정의합니다. DFU는 함수형 언어인 하스켈에서 영감을 받아 제작되어 많은 개념이 생소할 수 있습니다.

## 코덱 사용하기

코덱의 주목적은 자바 객체의 구조를 정의하고, 디스크에 저장하고 불러오는 것입니다. `Codec#encodeStart`로 저장, `Codec#parse`로 불러올 수 있습니다.

### DynamicOps

`DynamicOps`는 데이터 포맷의 형태를 정의합니다. `#encodeStart`와 `#parse`는 데이터 포맷의 구조를 알아야 하기에 `DynamicOps`를 인자로 받습니다.   

[DataFixerUpper]는 객체를 [Gson 라이브러리][gson]의 `JsonElement`으로 변환하는 `DynamicOps`를 두 가지 정의합니다: 평범한 JSON 파일을 만드는 `JsonOps#INSTANCE`, JSON 파일을 한 줄에 다 밀어 넣는 `JsonOps#COMPRESSED`

```java
// exampleCodec의 타입은 Codec<ExampleJavaObject>
// exampleObject의 타입은 ExampleJavaObject
// exampleJson의 타입은 JsonElement

// Java 객체를 JsonElement로 변환
exampleCodec.encodeStart(JsonOps.INSTANCE, exampleObject);

// Java 객체를 한 줄짜리 JsonElement로 변환
exampleCodec.encodeStart(JsonOps.COMPRESSED, exampleObject);

// JsonElement을 Java 객체로 불러오기
// (Json 해석에 오류가 없다고 가정)
exampleCodec.parse(JsonOps.INSTANCE, exampleJson);
```

마인크래프트는 `Tag`에 저장된 NBT 데이터를 불러오기 위한 `NbtOps`를 `NbtOps#INSTANCE`로 제공합니다.

```java
// exampleCodec의 타입은 Codec<ExampleJavaObject>
// exampleObject의 타입은 ExampleJavaObject
// exampleNbt의 타입은 Tag

// Java 객체를 Tag로 변환
exampleCodec.encodeStart(NbtOps.INSTANCE, exampleObject);

// Tag를 Java 객체로 불러오기
exampleCodec.parse(NbtOps.INSTANCE, exampleNbt);
```

To handle registry entries, Minecraft provides `RegistryOps`, which contains a lookup provider to get available registry elements. These can be created by `RegistryOps#create` that takes in the `DynamicOps` with the specific type to store the data within and the lookup provider containing access to the available registries. NeoForge extends `RegistryOps` to create `ConditionalOps`: a registry codec lookup that can handle [conditions to load the entry][conditional].

```java
// Let lookupProvider be a HolderLookup.Provider
// Let exampleCodec represent a Codec<ExampleJavaObject>
// Let exampleObject be a ExampleJavaObject
// Let exampleJson be a JsonElement

// Get the registry ops for JsonElement
RegistryOps<JsonElement> ops = RegistryOps.create(JsonOps.INSTANCE, lookupProvider);

// Encode Java object to JsonElement
exampleCodec.encodeStart(ops, exampleObject);

// Decode JsonElement into Java object
exampleCodec.parse(ops, exampleJson);
```

#### 데이터 포맷 변환

`DynamicOps`는 저장된 데이터를 다른 포맷으로 변환하는데 사용할 수도 있습니다. `#convertTo`에 변환될 포맷을 정의한 `DynamicOps`와 변환할 데이터를 전달하시면 됩니다.

```java
// Tag를 JsonElement로 변환
// 여기서 exampleTag는 Tag임
JsonElement convertedJson = NbtOps.INSTANCE.convertTo(JsonOps.INSTANCE, exampleTag);
```

### DataResult

`#encodeStart`와 `#parse`는 데이터 또는 객체가 올바르지 않으면 실패할 수 있기 때문에 결과 또는 오류를 담는 `DataResult`를 반환합니다. 데이터 변환이 성공적이었다면 `#result`가 반환한 `Optional`이 결과를 담을 것이고, 실패한다면 `#error`가 반환한 `Optional`이 오류 메시지를 담는 `PartialResult`를 담을 것입니다. `PartialResult`는 코덱에 따라서 미완성된 결과를 담고 있을 수도 있습니다. 

`DataResult`의 다른 메서드들은 결과 또는 오류를 원하시는 포맷으로 변환하는데 사용됩니다. 그 예로, `#resultOrPartial`는 성공 시 결과를, 실패 시 미완성된 결과를 담는 `Optional`을 반환합니다, 이 메서드는 인자로 `Consumer<String>`을 받는데, 오류 발생 시 오류 메시지로 무엇을 할 것인지를 정합니다.

```java
// exampleCodec의 타입은 Codec<ExampleJavaObject>
// exampleJson의 타입은 JsonElement

// JsonElement로부터 Java 객체 불러오기
DataResult<ExampleJavaObject> result = exampleCodec.parse(JsonOps.INSTANCE, exampleJson);

result
    // 성공하면 결과, 실패하면 오류 메시지 보고하고 미완성된 결과 받아오기
    .resultOrPartial(errorMessage -> /* 오류 메시지 처리 */)
    // 분석 결과가 미완성이든 성공이든 존재한다면 처리하기
    .ifPresent(decodedObject -> /* 불러온 객체 처리 */);
```

## 사전 정의된 Codec들

### 기본 자료형

`Codec` 클래스는 기본 자료형들의 코덱들을 정의합니다.

Codec         | 자료형
:---:         | :---
`BOOL`        | `Boolean`
`BYTE`        | `Byte`
`SHORT`       | `Short`
`INT`         | `Integer`
`LONG`        | `Long`
`FLOAT`       | `Float`
`DOUBLE`      | `Double`
`STRING`      | `String`\*
`BYTE_BUFFER` | `ByteBuffer`
`INT_STREAM`  | `IntStream`
`LONG_STREAM` | `LongStream`
`PASSTHROUGH` | `Dynamic<?>`\*\*
`EMPTY`       | `Unit`\*\*\*

\* `String`은 `Codec#string`또는 `Codec#sizeLimitedString`를 통해 글자 길이에 제한을 둘 수 있습니다.

\*\* `Dynamic`은 `DynamicOps`가 지원하는 포맷의 데이터 값을 표현하는 클래스입니다. 보통 데이터를 다른 포맷으로 변환하는데 쓰입니다.

\*\*\* `Unit`은 `null`을 표현할 때 쓰입니다.

### 바닐라와 네오포지

마인크래프트랑 네오포지는 자주 사용하는 다른 객체들의 코덱 또한 정의합니다, 그 예로 `ResourceLocation`의 `ResourceLocation#CODEC`, `DateTimeFormatter#ISO_INSTANT` 형식을 가지는 `Instant`의 `ExtraCodecs#INSTANT_ISO8601`, `CompoundTag`의 `CompoundTag#CODEC` 등이 있습니다.

:::caution
JSON의 숫자 리스트는 바로 `CompoundTag`로 변환될 수 없습니다. `JsonOps`는 읽은 숫자를 가장 작은 타입으로 해석하는데(64는 `byte`, 384는 `short`), `ListTag`는 모든 숫자의 타입이 동일해야 하므로 각 숫자의 타입이 다르면 오류가 발생합니다.
:::

바닐라와 네오포지에서 사용하는 레지스트리들 또한 코덱이 있습니다(`BuiltInRegistries#BLOCK`은 `Codec<Block>` 사용). `Registry#byNameCodec`랑 `IForgeRegistry#getCodec`은 레지스트리의 객체를 레지스트리 이름, 또는 압축된 정수 id로 변환하는 코덱을 반환합니다. 바닐라 레지스트리는 객체를 레지스트리 이름으로 저장하고, 이를 `Holder`로 감싸 불러오는 `Registry#holderByNameCodec`도 제공합니다.

## 코덱 만들기

코덱을 사용하면 아무 객체나 저장하고 불러올 수 있습니다. 이해를 돕기 위해 변환된 JSON도 같이 보여드리겠습니다.

### 레코드

레코드는 코덱을 만드는 방법중 하나로, 여러 필드들의 집합으로 객체를 구조를 정의합니다. 레코드는 코덱을 만드는 여러 방법을 제공하지만 가장 간단한 것은 `RecordCodecBuilder#create`입니다.  

`RecordCodecBuilder#create`는 `Instance`를 인자로 받고 `App`을 반환하는 람다 함수를 인자로 받습니다.

```java
// 예제에선 아래 클래스의 코덱을 만들어 보겠습니다
public class SomeObject {

    public SomeObject(String s, int i, boolean b) { /* ... */ }

    public String s() { /* ... */ }

    public int i() { /* ... */ }

    public boolean b() { /* ... */ }
}
```

#### 필드

하나의 `Instance`는 최대 16개의 필드를 `#group`으로 정의할 수 있습니다. `#group`의 인자는 각 필드의 타입에 대한 `RecordCodecBuilder`를 표현하는 `App`이어야 합니다. 이를 위해 사전 정의된 코덱을 사용하는 것이 가장 간단한데, 저장할 때 쓸 필드 이름과 객체로부터 필드 값을 가져올 getter를 지정하세요.

코덱으로 필드를 정의하려면 먼저 `#fieldOf`를 호출하세요. 만약 필드의 타입이 `Optional`로 감싸져 있거나, 필드 값 누락 시 사용할 기본값이 있다면 `#optionalFieldOf`를 쓰셔도 됩니다. 두 메서드 다 저장할 때 쓸 필드 이름이 필요합니다. 이후 getter는 `#forGetter`로 지정하실 수 있습니다. 

:::warning
`#optionalFieldOf` will throw an error if there is an element that throws an error when parsing. If the error should be consumed, use `#lenientOptionalFieldOf` instead.
:::

이후, `#group`으로 생성한 Product에 `#apply`를 호출하여 객체의 생성자를 지정하실 수 있습니다. 이때 생성자의 인자들과 `#group`에 전달하신 필드들과 순서가 동일한게 좋습니다.

```java
public static final Codec<SomeObject> RECORD_CODEC = RecordCodecBuilder.create(instance -> // Given an instance
    instance.group( // Define the fields within the instance
        Codec.STRING.fieldOf("s").forGetter(SomeObject::s), // String
        Codec.INT.optionalFieldOf("i", 0).forGetter(SomeObject::i), // Integer, defaults to 0 if field not present
        Codec.BOOL.fieldOf("b").forGetter(SomeObject::b) // Boolean
    ).apply(instance, SomeObject::new) // Define how to create the object
);
```

```json5
// JSON으로 저장된 SomeObject
{
    "s": "value",
    "i": 5,
    "b": false
}

// JSON으로 저장된 또 다른 SomeObject
{
  "s": "value2",
  // i는 누락됨. 기본값 0
  "b": true
}

// JSON으로 저장된 또 다른 SomeObject
{
    "s": "value2",
    // Will throw an error as lenientOptionalFieldOf is not used
    "i": "bad_value",
    "b": true
}
```

### Transformers

코덱은 동등한, 또는 비슷한 다른 코덱으로 변환될 수 있습니다. 다른 코덱으로 변환하는 메서드들은 현재 타입을 다른 타입으로 바꾸는 메서드, 그리고 그 반대를 인자로 받습니다. 그중 대표적으로 `#xmap`이 있습니다.

```java
// 클래스 A
public class ClassA {

    public ClassB toB() { /* ... */ }
}

// 클래스 A와 동등한 클래스 B
public class ClassB {

    public ClassA toA() { /* ... */ }
}

// 클래스 A를 기술하는 A_CODEC이 있다고 가정할 때
public static final Codec<ClassB> B_CODEC = A_CODEC.xmap(ClassA::toB, ClassB::toA);
```

만약 두 타입이 동등하지 않다면, 예를 들어 타입간 변환에 특별한 규칙이 적용되어 실패할 수도 있다면, `DataResult`를 반환하는 메서드를 대신 사용하실 수 있습니다.

| B로 언제나 변환 가능한가? | A로 언제나 변환 가능한가? | Transform Method |
|:---------------:|:---------------:|:-----------------|
|        네        |        네        | `#xmap`          |
|        네        |       아니오       | `#flatComapMap`  |
|       아니오       |        네        | `#comapFlatMap`  |
|       아니오       |       아니오       | `#flatXMap`      |

```java
// 문자열 코덱을 정수 코덱으로 변환
// 모든 문자열이 정수가 될 순 없지만 (A는 언제나 B로 변환될 수 없지만)
// 모든 정수는 문자열이 될 수 있음 (B는 언제나 A로 변환될 수 있음)
public static final Codec<Integer> INT_CODEC = Codec.STRING.comapFlatMap(
      s -> { // 정수 변환 실패 시 오류를 담는 DataResult를 반환
        try {
            return DataResult.success(Integer.valueOf(s));
        } catch (NumberFormatException e) {
            return DataResult.error(s + " is not an integer.");
        }
      },
      Integer::toString // 일반 함수. DataResult로 감쌀 필요 없음.
);
```

```json5
// 정수 5로 변환 가능
"5"

// 정수가 아니라 오류 발생
"value"
```

#### 범위를 가진 코덱

최소, 최댓값으로 범위를 지정하여 범위 밖의 값이면 오류를 반환하는 코덱을 `#intRange`, `#floatRange`, 그리고 `#doubleRange` 등을 활용해 만들 수 있습니다. 오류 발생 시 미완성된 결과로 범위를 벗어난 값을 담습니다.

```java
public static final Codec<Integer> RANGE_CODEC = Codec.intRange(0, 4); 
```

```json5
// 범위 내의 값. 정상 처리됨.
4

// 범위를 벗어남. 오류 발생.
5
```

#### String Resolver

`Codec#stringResolver` is an implementation of `flatXmap` which maps a string to some kind of object.

```java
public record StringResolverObject(String name) { /* ... */ }

// Assume there is some Map<String, StringResolverObject> OBJECT_MAP
public static final Codec<StringResolverObject> STRING_RESOLVER_CODEC = Codec.stringResolver(StringResolverObject::name, OBJECT_MAP::get);
```

```json5
// Will map this string to its associated object
"example_name"
```

### Defaults

만약 데이터를 읽거나 쓰면서 오류가 발생할 경우 대신 사용할 기본값을 `Codec#orElse` 또는 `Codec#orElseGet`로 지정할 수 있습니다.

```java
public static final Codec<Integer> DEFAULT_CODEC = Codec.INT.orElse(
    errorMessage -> /* Do something with the error message */,
    0 // orElseGet으로 값 대신 Supplier 대신 사용 가능
); 
```

```json5
// 정수 아님. 오류 발생. 기본값 0 사용.
"value"
```

### Unit

언제나 코드로 직접 값을 지정받는 코덱은 `Codec#unit`으로 생성할 수 있습니다. 객체의 필드중 하나가 저장할 수 없는 타입일 때 유용합니다.

```java
public static final Codec<IEventBus> UNIT_CODEC = Codec.unit(
    () -> NeoForge.EVENT_BUS // Supplier 대신 값 바로 사용 가능
);
```

```json5
// 저장 안 됨. 네오포지 이벤트 버스를 바로 반환함.
```

### Lazy Initialized

Sometimes, a codec may rely on data that is not present when it is constructed. In these situations `Codec#lazyInitialized` can be used to for a codec to construct itself on first encoding/decoding. The method takes in a supplied codec.

```java
public static final Codec<IEventBus> LAZY_CODEC = Codec.lazyInitialized(
    () -> Codec.Unit(NeoForge.EVENT_BUS)
);
```

```js
// Nothing here, will return block registry codec
```

### List

리스트를 다루는 코덱은 `Codec#listOf`로 생성할 수 있습니다. `listOf` can also take in integers representing the minimum and maximum size of the list. `sizeLimitedListOf` does the same but only specifies a maximum bound.

```java
// BlockPos#CODEC은 Codec<BlockPos>
public static final Codec<List<BlockPos>> LIST_CODEC = BlockPos.CODEC.listOf();
```

```json5
// 저장된 List<BlockPos>
[
    [1, 2, 3], // BlockPos(1, 2, 3)
    [4, 5, 6], // BlockPos(4, 5, 6)
    [7, 8, 9]  // BlockPos(7, 8, 9)
]
```

코덱이 읽어 들인 리스트는 **불변**입니다. 가변 리스트가 필요하다면 [transformer]를 사용해야 합니다.

### Map

키를 다루는 코덱, 그리고 값을 다루는 코덱을 `Codec#unboundedMap`으로 합쳐 맵을 다루는 코덱을 만들 수 있습니다. 이때 키 코덱의 타입은 문자열, 또는 위 `INT_CODEC`처럼 문자열에 기반해야 합니다.

```java
// BlockPos#CODEC은 Codec<BlockPos>
public static final Codec<Map<String, BlockPos>> MAP_CODEC = Codec.unboundedMap(Codec.STRING, BlockPos.CODEC);
```

```json5
// 저장된 Map<String, BlockPos>
{
    "key1": [1, 2, 3], // key1 -> BlockPos(1, 2, 3)
    "key2": [4, 5, 6], // key2 -> BlockPos(4, 5, 6)
    "key3": [7, 8, 9]  // key3 -> BlockPos(7, 8, 9)
}
```

코덱이 읽어 들인 맵은 **불변**입니다. 가변 맵이 필요하시다면 [transformer]를 사용하셔야 합니다.

:::caution
`#unboundedMap`의 키 코덱은 무조건 문자열로 변환할 수 있는 타입을 사용해야 합니다. 문자열로 변환할 수 없는 타입이라면 키-값 쌍[pair]의 리스트를 대신 사용할 수도 있습니다. 
:::

### Pair

두 객체의 쌍의 코덱은 `Codec#pair`로 만들 수 있습니다. 쌍은 [Record][records]와 유사하게 두 개의 코덱을 합쳐 새로운 객체의 구조를 정의하니 아래와 같이 [필드][field] 이름을 지정해야 합니다.

```java
public static final Codec<Pair<Integer, String>> PAIR_CODEC = Codec.pair(
    Codec.INT.fieldOf("left").codec(),
    Codec.STRING.fieldOf("right").codec()
);
```

```json5
// 저장된 Pair<Integer, String>
{
  "left": 5,       // fieldOf looks up 'left' key for left object
  "right": "value" // fieldOf looks up 'right' key for right object
}
```

:::tip
키를 문자열로 변환할 수 없는 맵은 [transformer]를 사용해 키-값 쌍의 리스트를 대신 저장할 수 있습니다.
:::

### Either

데이터를 두 가지 방법으로 읽고 쓸 수 있는 코덱은 `Codec#either`로 만들 수 있습니다.

이러한 코덱들은 주어진 코덱 중 첫 번째 것으로 데이터를 분석하고, 실패하면 두번째 것으로 재시도합니다. 이 또한 실패하면 두 번째 코덱의 오류를 담는 `DataResult`가 반환됩니다.

```java
public static final Codec<Either<Integer, String>> EITHER_CODEC = Codec.either(
    Codec.INT,
    Codec.STRING
);
```

```json5
// 저장된 Either.Left<Integer, String>
5

// 저장된 Either.Right<Integer, String>
"value"
```

:::tip
[transformer]를 활용해 Either의 두 가지 타입을 하나의 타입으로 변환할 수 있습니다.
:::

#### Xor

`Codec#xor` is a special case of the [either] codec where a result is only successful if one of the two methods are processed successfully. If both codecs can be processed, then an error is thrown instead.

```java
public static final Codec<Either<Integer, String>> XOR_CODEC = Codec.xor(
    Codec.INT.fieldOf("number").codec(),
    Codec.STRING.fieldOf("text").codec()
);
```

```json5
// Encoded Either.Left<Integer, String>
{
    "number": 4
}

// Encoded Either.Right<Integer, String>
{
    "text": "value"
}

// Throws an error as both can be decoded
{
    "number": 4,
    "text": "value"
}
```

#### Alternative

`Codec#withAlternative` is a special case of the [either] codec where both codecs are trying to decode the same object, but stored in a different format. The first, or primary, codec will attempt to decode the object. On failure, the second codec will be used instead. Encoding will always use the primary codec.

```java
public static final Codec<BlockPos> ALTERNATIVE_CODEC = Codec.withAlternative(
    BlockPos.CODEC,
    RecordCodecBuilder.create(instance -> instance.group(
        Codec.INT.fieldOf("x").forGetter(BlockPos::getX),
        Codec.INT.fieldOf("y").forGetter(BlockPos::getY),
        Codec.INT.fieldOf("z").forGetter(BlockPos::getZ)
    ), BlockPos::new)
);
```

```json5
// Normal method to decode BlockPos
[ 1, 2, 3 ]

// Alternative method to decode BlockPos
{
    "x": 1,
    "y": 2,
    "z": 3
}
```

### Recursive

Sometimes, an object may reference an object of the same type as a field. For example, `EntityPredicate` takes in an `EntityPredicate` for the vehicle, passenger, and targeted entity. In this case, `Codec#recursive` can be used to supply the codec as part of a function to create the codec.

```java
// Define our recursive object
public record RecursiveObject(Optional<RecursiveObject> inner) { /* ... */ }

public static final Codec<RecursiveObject> RECURSIVE_CODEC = Codec.recursive(
    RecursiveObject.class.getSimpleName(), // This is for the toString method
    recursedCodec -> RecordCodecBuilder.create(instance -> instance.group(
        recursedCodec.optionalFieldOf("inner").forGetter(RecursiveObject::inner)
    ).apply(instance, RecursiveObject::new))
);
```

```json5
// An encoded recursive object
{
    "inner": {
        "inner": {}
    }
}
```

### Dispatch

타입에 따라 다른 하위 코덱을 사용하는 코덱은 `Codec#dispatch`로 만들 수 있습니다. 대개 코덱을 담는 레지스트리에서 많이 사용합니다.

이러한 코덱은 먼저 구체적인 타입을 다루는 코덱을 저장된 데이터에서 불러오고(보통 `type`으로 이를 지정합니다.), 불러온 코덱으로 나머지 데이터를 불러와 객체를 완성합니다. 이때 사용한 `DynamicOps`가 맵을 압축하여 저장하거나, 하위 코덱 중 필드 이름을 부여하지 않는 것이 있다면 자동으로 `value`를 키로 사용합니다.
```java
// 기반 클래스 지정
public abstract class ExampleObject {

    // 저장할 때 쓸 타입을 지정하는 메서드
    public abstract MapCodec<? extends ExampleObject> type();
}

// 문자열 하나를 저장하는 클래스
public class StringObject extends ExampleObject {

    public StringObject(String s) { /* ... */ }

    public String s() { /* ... */ }
  
    public MapCodec<? extends ExampleObject> type() {
        // A registered registry object
        // "string":
        //   Codec.STRING.xmap(StringObject::new, StringObject::s).fieldOf("string")
        return STRING_OBJECT_CODEC.get();
    }
}

// 문자열과 정수를 저장하는 복잡한 클래스
public class ComplexObject extends ExampleObject {

    public ComplexObject(String s, int i) { /* ... */ }

    public String s() { /* ... */ }

    public int i() { /* ... */ }

    public MapCodec<? extends ExampleObject> type() {
        // A registered registry object
        // "complex":
        //   RecordCodecBuilder.mapCodec(instance ->
        //     instance.group(
        //       Codec.STRING.fieldOf("s").forGetter(ComplexObject::s),
        //       Codec.INT.fieldOf("i").forGetter(ComplexObject::i)
        //     ).apply(instance, ComplexObject::new)
        //   )
        return COMPLEX_OBJECT_CODEC.get();
    }
}

// Assume there is an Registry<MapCodec<? extends ExampleObject>> DISPATCH
public static final Codec<ExampleObject> = DISPATCH.byNameCodec() // Gets Codec<MapCodec<? extends ExampleObject>>
    .dispatch(
        ExampleObject::type, // Get the codec from the specific object
        Function.identity() // Get the codec from the registry
    );
```

```json5
// Simple object
{
    "type": "string", // 타입이 StringObject라고 지정
    "value": "value" // Codec type is not augmented from MapCodec, needs field
}

// ComplexObject
{
  "type": "complex", // 타입이 ComplexObject라고 지정

  // Codec type is augmented from MapCodec, can be inlined
  "s": "value",
  "i": 0
}
```

[DataFixerUpper]: https://github.com/Mojang/DataFixerUpper
[gson]: https://github.com/google/gson
[conditional]: ../resources/server/conditional.md
[transformer]: #transformer-codecs
[pair]: #pair
[records]: #records
[field]: #fields
[either]: #either
