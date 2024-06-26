# 버전 규약

이 문서는 마인크래프트와 네오 포지의 버전 규약에 대해 다루고, 모드의 버전 관리를 위한 도움말을 제공합니다.

## 마인크래프트

마인크래프트는 [유의적 버전 규약(Sementic Versioning, 또는 semver)][semver]을 사용합니다. 이는 `major.minor.patch` 형식을 가지는데, 예를 들어 마인크래프트 1.20.2는 major 버전 1, minor 버전 20, patch 버전 2를 가집니다.

마인크래프트는 2011년에 버전 1.0을 출시했을 때부터 `1`을 major 버전으로 사용해 왔으며, 그전에는 `a1.1` (알파 1.1), `b1.7.3` (베타 1.7.3), 아니면 심지어 `infdev`처럼 무슨 버전인지 알 수도 없는 여러 버전 규약들을 사용했습니다. 마인크래프트는 십 년 넘게 `1`을 major 버전으로 사용해 왔고, 마인크래프트 2는 거의 농담으로 받아들여지니, 해당 major 버전은 미래에 바뀌지 않을 것으로 보입니다.

### 스냅숏

스냅숏은 유의적 버전을 따르지 않습니다. 대신 `YYwWWa` 형식을 따르며, `YY`는 스냅숏 출시 연도의 뒤 두 자리 (예: `23`), `WW`는 스냅숏 출시일이 해당 연도의 몇째 주인지 (예: `01`)를 표기합니다. 예를 들어, `23w01a`는 2023년 첫째 주에 출시된 스냅숏입니다.

뒤 `a` 접미사는 여러 스냅숏이 같은 주에 출시될 경우 구분하기 위해 사용합니다. 두 번째로 출시된 스냅숏은 `b`, 그다음은 `c`를 사용합니다. 그 외에도 [2020년 만우절 이벤트][infinite]때 사용한 `20w14infinite` 등이 있습니다.

### 사전 릴리즈와 릴리즈 후보

스냅숏 개발이 거의 끝나가면, 모장은 이른바 "사전 릴리즈"를 출시합니다. 사전 릴리즈부터는 더 이상 기능이 추가되지 않고 오직 버그 해결에 집중합니다. 사전 릴리즈는 대상 버전 뒤에 `-preX`를 붙입니다. 예를 들어 1.20.2의 사전 릴리즈는 `1.20.2-pre1`이었고, 여러 개의 사전 릴리즈가 존재할 경우 `-pre2`, `-pre3` 형식으로 뒤 숫자를 적습니다.

유사하게, "사전 릴리즈" 개발 또한 끝나가면, 모장은 릴리즈 후보를 출시합니다. 릴리즈 후보 또한 버전 뒤에 `-rc1`이 붙으며 여러 릴리즈 후보가 존재할 경우 `-rc2`, `-rc3` 등을 대신 사용합니다. 릴리즈 후보는 더 이상 발견된 버그가 없다고 가정하고 출시하며, 그럼에도 버그가 발견될 경우 이를 해결하고 다음 릴리즈 후보를 출시합니다.

## 네오 포지

네오 포지는 유의적 버전을 변형해서 사용합니다: major 버전은 마인크래프트의 minor 버전, minor 버전은 마인크래프트의 patch 버전, patch 버전은 네오 포지의 "진짜" 버전을 표기합니다. 예를 들어 네오 포지 20.2.59는 마인크래프트 1.20.2용으로 출시된 60번째(저흰 버전을 0에서부터 셉니다) 버전입니다. 맨 앞의 `1`은 바뀔 일이 없어 보여 사용하지 않습니다, 자세한 사항은 [위 섹션][minecraft]를 참고하세요.

A few places in NeoForge also use [Maven version ranges][mvr], for example the Minecraft and NeoForge version ranges in the [`mods.toml`][modstoml] file. These are mostly, but not fully compatible with semver (the `pre`-tag is not considered by it, for example).

## 모드

버전 규약은 쓰는 사람 나름입니다. 개발 목적, 방식 등에 따라 달라질 수 있습니다. 아래에선 참고하기 좋도록 자주 사용하는 버전 규약들을 제시합니다.

일반적으로 모드의 파일 이름은 `modid-<version>.jar` 형식입니다. 모드의 아이디가 `examplemod`, 버전이 `1.2.3`이면, 모드 파일의 이름은 `examplemod-1.2.3.jar`입니다.

:::note
버전 규약은 단순히 제안 사항이며 무조건 따라야 하는 규칙은 아닙니다. 특히 버전 숫자를 언제, 왜 올려야 할지는 개인의 자유입니다.
:::

### 유의적 버전

유의적 버전 (또는 "semver")는 세 부분으로 나뉩니다: `major.minor.patch`. major 버전은 대규모 업데이트가 있으면 올라가고, minor 버전은 작은 기능이 추가될 때, patch는 버그만 고쳤을 때 올라갑니다.

일반적으로 개발 버전은 `0.x.x` 형식을 쓰며 최초 릴리즈는 `1.0.0`를 씁니다.

그렇지만 무조건 "minor는 기능, patch는 버그"에 쓴다는 법은 없습니다. 마인크래프트 자체도 major 버전은 `1`에 고정하고, 대규모 업데이트는 minor 버전으로, 기능 추가는 patch로, 버그 해결은 스냅숏(위 참고)으로 표기합니다.

버전 숫자의 크기는 모드가 얼마나 자주 업데이트 되냐에 따라 바뀔 수 있습니다. 예를 들어 [Supplementaries][supplementaries]는 글 작성 시점 기준으로 버전 `2.6.31`입니다. 필요하다면 숫자 세 개, 심지어는 네 개를 쓰셔도 됩니다.

### "간소화된", 또는 "확장된" 유의적 버전

유의적 버전은 가끔 숫자 두 개만으로 표현하기도 합니다. 이는 "간소화된" 표기법이며, `major.minor` 형식입니다. 업데이트를 자주 하지 않는 단순한 모드들이 사용하기도 합니다.

"확장된" 유의적 버전은 `1.0.0.0`처럼 숫자 네 개를 사용합니다. 상황에 따라 `major.api.minor.patch`, 또는 `major.minor.patch.hotfix`와 같은 형식을 사용합니다, 표준은 아니라 쓰는 사람마다 다릅니다.

`major.api.minor.patch`의 경우, `major`와 `api`는 서로 분리되어 독립적으로 숫자를 올릴 수 있습니다. [Mekanism][mekanism]과 같이 다른 모드가 쓸 수 있는 API를 제공하는 모드에서 이 형식을 사용합니다.

`major.minor.patch.hotfix`의 경우, patch 버전을 두 개로 나눕니다. 대표적으로 [Create][create]에서 이 형식을 사용하며, 버전은 글 작성 시간 기준으로 0.5.1f입니다. Create는 유의적 버전과의 호환성을 유지하기 위해 hotfix는 점으로 나눈 숫자로 표기하지 않고 알파벳으로 표기합니다.

:::info
위 두 방식은 공식적으로 유의적 버전의 일부가 아닙니다.
:::

### 알파, 베타, 릴리즈

마인크래프트와 유사하게 모드도 `알파/베타/릴리즈` 단계로 나눌 수 있습니다. `알파`는 불안정/실험 버전을 의미하며(`실험`, `스냅샵` 버전으로 부르기도 함), `beta`는 어느 정도 안정된 버전, `release`는 안정된 버전(`안정` 버전이라고 부르기도 함)입니다.

몇몇 모드는 major 버전을 마인크래프트 버전 업데이트 할 때 올리기도 합니다. 예를 들어 [JEI][jei]는 1.19.2엔 `13.x.x.x`를 사용했고, 1.19.4에선 `14.x.x.x`를, 1.20.1에선 `15.x.x.x`를 사용했습니다. (1.19.3과 1.20.0용 JEI는 없습니다.) 다른 모드는 모드 버전 뒤에 태그를 붙이기도 하는데, 예를 들어 [Minecolonies][minecolonies]는 글 작성 시간 기준으로 `1.1.328-BETA`입니다.

### 마인크래프트 버전 포함하기

대체로, 명확한 구분을 위해서 마인크래프트 버전을 파일 이름에 포함하기도 합니다. 이때 대다수가 모드 버전 뒤보단 앞에 마인크래프트 버전을 적습니다. 예를 들어, 1.20.2의 JEI `16.0.0.28`은 `jei-1.20.2-16.0.0.28` 또는 `jei-16.0.0.28-1.20.2` 식으로 적을 수 있습니다.

### 모드로더 종류 포함하기

네오 포지는 유일한 모드 로더가 아니며, 많은 모드들은 여러 플랫폼을 대상으로 개발됩니다. 그래서 같은 모드의, 같은 버전이지만, 다른 모드로더에서 구동되는 모드 파일끼리는 구분할 필요가 있습니다.

일반적으로 모드 이름 중간에 모드 로더 이름을 포함하여 구분합니다. `jei-neoforge-1.20.2-16.0.0.28`, `jei-1.20.2-neoforge-16.0.0.28`, `jei-1.20.2-16.0.0.28-neoforge` 셋 중 어느 형식을 사용해도 무관합니다. 다른 모드로더의 경우 `neoforge`를 `forge`, `fabric`, `quilt` 등으로 바꾸시면 됩니다.

### Maven 사용 시 유의할 점

종속성 라이브러리를 공유할 때 사용하는 Maven은 유의적 버전과 호환되나 약간 다른 규약을 사용합니다. 무슨 버전 규약을 사용하시든, [Maven 버전 범위 (MVR)][mvr]과 호환되는 형식을 사용하셔야 합니다, 그렇지 않으면 모드 간 종속성에 문제가 생길 수 있습니다!

[create]: https://www.curseforge.com/minecraft/mc-mods/create
[infinite]: https://minecraft.wiki/w/Java_Edition_20w14∞
[jei]: https://www.curseforge.com/minecraft/mc-mods/jei
[mekanism]: https://www.curseforge.com/minecraft/mc-mods/mekanism
[minecolonies]: https://www.curseforge.com/minecraft/mc-mods/minecolonies
[minecraft]: #마인크래프트
[neoforgemodstoml]: modfiles.md#neoforgemodstoml
[mvr]: https://maven.apache.org/enforcer/enforcer-rules/versionRanges.html
[mvr]: https://maven.apache.org/ref/3.5.2/maven-artifact/apidocs/org/apache/maven/artifact/versioning/ComparableVersion.html
[neoforge]: #네오-포지
[semver]: https://semver.org/lang/ko/
[supplementaries]: https://www.curseforge.com/minecraft/mc-mods/supplementaries
