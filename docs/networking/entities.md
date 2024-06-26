# 엔티티 통신

네트워크 메시지로 통신하는 것 말고도 엔티티의 데이터를 동기화시켜주는 시스템은 다양합니다.

## 스폰 데이터

1.20.2 이후 여러 패킷을 꾸러미로 보낼 수 있게 되어 엔티티 소환시 추가 데이터를 스폰패킷에 더 효율적으로 같이 실어 보낼 수 있습니다.

You can add extra data to the spawn packet NeoForge sends by implementing the following interface.

### IEntityWithComplexSpawn

만약 클라이언트에 전송한 엔티티의 데이터가 변하지 않는다면 이 인터페이스를 사용하여 소환시에만 추가 데이터를 보내는 것이 권장됩니다. `#writeSpawnData`와 `#readSpawnData`를 재정의하여 버퍼에 추가 데이터를 담을 수 있습니다. 또한 `sendPairingData(...)`를 통해 엔티티가 클라이언트와 짝을 이룰 때 스폰 패킷과 함께 다른 패킷을 전송할 수 있습니다.

## 동적 데이터 파라미터

데이터 파라미터는 마인크래프트가 자동으로 엔티티의 데이터를 동기화 시킬때 주로 사용하는 시스템입니다, 필요하다면 바닐라 코드를 참고하세요.

먼저, 동기화할 데이터를 담는 `EntityDataAccessor<T>`가 필요합니다. 이 객체는 엔티티의 `static final` 필드에 할당하세요. `SynchedEntityData#defineId`에 엔티티의 클래스와 데이터를 직렬화할 `EntityDataSerializer`를 전달하여 생성할 수 있습니다. `EntityDataSerializers`에서 사전 정의된 `EntityDataSerializer`들을 찾아보실 수 있습니다. 

:::caution
데이터 파라미터는 __무조건__ 직접 만드시는 엔티티에만, __그 엔티티 클래스 안에서만__ 사용하셔야 합니다. 다른 엔티티에 파라미터를 추가하시면 그 데이터를 보낼때 사용하는 ID의 동기화를 깨버릴 수 있으며 고치기 어려운 문제를 유발할 수 있습니다.
:::

그 다음 `Entity#defineSynchedData`를 재정의해 `SynchedEntityData.Builder#define`을 각각의 `EntityDataAccessor`와 기본값을 전달하여 호출하세요. 늘 `super` 메서드를 먼저 호출하시는 것을 잊지 마세요!

그다음에는 엔티티의 `entityData` 인스턴스를 통해 데이터 파라미터의 값을 변경하고 읽으실 수 있습니다. 클라이언트에는 변경사항이 자동으로 보내집니다.
