# Wanna V : 비건 식당 예약 및 리뷰 서비스 플랫폼

# 들어가기 전: 시연 영상

[![Video Label](https://github.com/user-attachments/assets/8bb1f87f-4e38-4aa3-a6ff-1e2980bbdf71)](https://youtu.be/EcwlBnP6Ajs)


<br>

# 1. 개요
## 기획 배경
### 1. 건강의 적신호
![](https://velog.velcdn.com/images/coo9292/post/76f101e5-fb96-4796-a244-10ff0db887fb/image.svg)
국민의 건강 통계를 조사한 결과 2012년부터 2021년까지 10년 간 성인병 중 대표적인 **당뇨**와 **비만**의 인구가 꾸준히 증가함을 알 수 있었고, 이를 해결해서 국민의 건강을 위한 애플리케이션을 기획하고자 다짐하였음



### 2. Blue Zone 분석
![](https://velog.velcdn.com/images/coo9292/post/d30033f0-e705-40b7-9136-3b97a16d9483/image.svg)
건강과 직결되는 장수와 관련해서 조사한 결과 세계 5대 장수지역이라고 불리는 <span style="color:darkblue">**Blue Zone**</span>의 특징이 채식 위주의 식단을 한다는 사실을 알아냈고, 채식을 장려하기 위해 **비건 서비스**을 만들고자 다짐하였음



### 3. 설문조사

![](https://velog.velcdn.com/images/coo9292/post/8ea0f52f-c5f0-44df-8ad7-0e00aa46d1f4/image.svg) 

- 2024/10/25 ~ 2024/10/29 20~50대 남녀 80명을 대상으로 비건 서비스에 어떤 서비스를 넣으면 좋을지 설문조사 진행
- **예약 기능** 및 **리뷰 기능**을 넣기로 결정 



### 4. 주제 선정
#### 비건 식당 예약 및 리뷰 서비스


<br>


## 플랫폼 분석
### 벤치마킹
![](https://velog.velcdn.com/images/coo9292/post/9d5a7c2f-6e3e-4a79-bfe2-4cef32f19f9e/image.svg)

### 차별점
![](https://velog.velcdn.com/images/coo9292/post/b608d518-dc9b-4a2d-9ae5-84d0b4e3a907/image.svg)

유사 플랫폼인 캐치테이블 , 테이블링의 **디자인 레이아웃** 및 **기능**을 벤치마킹하였고, **영수증 인증 리뷰 작성 , 리워드 제공 , 회원 등급 세분화 , 비건 상품 판매**기능을 추가하여 차별화를 두고자 함

<br>

## 목표
1. **식당 추천 및 검색 조건 필터링** 기능을 활용하여 사용자의 다양한 기호 반영
2. **영수증 기반의 리뷰**로 고객의 신뢰성 확보
3. **리뷰 작성에 따른 리워드 시스템**으로 리뷰 작성 유도 및 고객 유지
4. **이벤트 및 회원등급**을 활용한 고객 관리
5. **비건 상품 판매**를 통해 매출 발생

<br>

## 정책
### 매출 정책
![](https://velog.velcdn.com/images/coo9292/post/edcd5d59-8eca-47db-8165-93411bafcc86/image.png)

식당과의 계약금 및 배너 광고비는 Wanna V에게 100% 지급되고, 식당 예약금은 Wanna V와 식당이 반반 나눔. 고객에게 주는 리워드는 100% Wanna V가 부담하고, 쿠폰을 통한 수익 분배는 반반 나누되, 판매가가 5%가 초과될 경우 Wanna V가 부담 	

### 리워드 정책
![](https://velog.velcdn.com/images/coo9292/post/2a043807-b195-42f7-a063-1f35b2745b7e/image.svg)

회원 등급 및 리뷰의 사진 유무에 따른 세분화된 리워드 지급

### 예약 정책
![](https://velog.velcdn.com/images/coo9292/post/06931953-0fb7-454b-9c11-077ac6ef5359/image.svg)
기본 예약금은 10,000원이고 변경을 원하면 식당 등록 시 예약금을 별도로 지정할 수 있고, 예약 취소 하루 전부터 패널티 발생

<br>

## 특징 및 서비스 이용 방법
![](https://velog.velcdn.com/images/coo9292/post/7391d1d7-1701-4ce1-b8ae-afae89e68b62/image.svg)

![](https://velog.velcdn.com/images/coo9292/post/6cadc3aa-43e1-4b55-b0f0-40e180967a84/image.svg)

고객은 식당 예약 후 식사를 하면 영수증을 발급받음. 그 후 영수증 인증 리뷰를 작성하고, 리워드를 적립받으면 해당 리워드를 사용하여 상품을 구매할 수 있음.

<br>

## 팀원 소개 및 역할 분담
### 내 역할
- 메인 페이지 설계 , 전체 페이지 레이아웃 설계
- 식당 추천 기능(현재 위치 ,)
- 식당 목록 및 검색 필터링 기능 구현
- PPT 제작 및 발표


### ㅇㅈㅇ 팀장 역할
- 상품 관리 , 결제, 챗봇
- 관리자 페이지 대시보드, 리뷰 감정분석
- 서버 , Github 관리, 영상 제작

### ㅂㅇㅁ 팀원 역할
- OCR 인증 및 리뷰 작성
- 마이페이지 설계
- 서버 관리 및 PPT 제작


### ㄴㅇㅎ 팀원 역할
- 식당 예약
- 소셜 로그인
- 이벤트 및 쿠폰 관리 , 영상 제작


<br>

## WBS
![](https://velog.velcdn.com/images/coo9292/post/590e7db0-0081-41bb-b790-4b48abfb537f/image.png)


<br>
<br>

# 2. 화면 설계
## IA
### User
![](https://velog.velcdn.com/images/coo9292/post/030ccdbd-9463-4037-9006-16dc36910494/image.png)

### Admin
![](https://velog.velcdn.com/images/coo9292/post/68ed38b8-00fc-4fc2-8620-762f3e568d2d/image.png)

## 로고 및 UI/UX
![](https://velog.velcdn.com/images/coo9292/post/38ec526e-785b-4ce6-9d67-2914e1356f7d/image.png)
![](https://velog.velcdn.com/images/coo9292/post/608e64df-2422-4418-8417-a50fe8240b57/image.png)

<br>

# 3. 개발 구현
## 기술 스택 및 개발 환경
![](https://velog.velcdn.com/images/coo9292/post/07670e7b-0e66-4946-a441-8c51a164d182/image.png)

<br>

## ERD
![](https://velog.velcdn.com/images/coo9292/post/a7fb5094-f9de-4422-a981-b39dc57727ce/image.png)


## 내 핵심 기능(User 페이지)
### ① 반응형 처리
![](https://velog.velcdn.com/images/coo9292/post/178bb047-31a6-4a26-8c7e-f279eca0bbc8/image.png)
영수증 촬영을 통한 리뷰 인증 서비스 특성을 고려하여 모바일 UI의 애플리케이션으로 설계하였지만, 데스크탑으로도 충분히 이용할 수 있도록 반응형으로 구현



### ② 전체 레이아웃 설계
![](https://velog.velcdn.com/images/coo9292/post/689d0a35-60da-488d-b14e-214f78911538/image.svg)



### ③ 메인 페이지
![](https://velog.velcdn.com/images/coo9292/post/0c9ec096-d986-49c9-93d8-1cd917df7a22/image.png)
![](https://velog.velcdn.com/images/coo9292/post/ed69f7dd-3b0b-4852-a271-30b51297d6e8/image.png)



### ④ 식당 목록 페이지
![](https://velog.velcdn.com/images/coo9292/post/43377e19-54ee-4feb-990e-7b5168b92db8/image.png)
![](https://velog.velcdn.com/images/coo9292/post/a697ce64-3993-4f6e-a57c-155eb5a8c3b8/image.png)



### ⑤ 식당 상세 페이지
![](https://velog.velcdn.com/images/coo9292/post/d400da15-1ef4-49e2-b63b-b5074965fac9/image.png)
![](https://velog.velcdn.com/images/coo9292/post/a013f4bb-95ca-48c5-924b-bde1c88ab44a/image.png)

<br>

## 내 핵심 기능(Admin 페이지)
### ① 전체 레이아웃 설계
![](https://velog.velcdn.com/images/coo9292/post/9ead5086-ecfe-48e1-93fc-0f14f383f4b6/image.png)


### ② 식당 관리 목록 페이지
![](https://velog.velcdn.com/images/coo9292/post/95ad1433-3a41-4180-89ca-23bcf179a678/image.png)

### ③ 식당 관리 상세 페이지
![](https://velog.velcdn.com/images/coo9292/post/3b8c8515-78c8-419d-b71d-41fc4a3474da/image.png)

### ④ 식당 등록 페이지
![](https://velog.velcdn.com/images/coo9292/post/67f9cf8f-6006-4565-b79f-d2074e137afa/image.png)

### ⑤ 식당 수정 페이지
![](https://velog.velcdn.com/images/coo9292/post/f7a6361a-b838-47a6-ba3f-da75ea3f2858/image.png)

<br>

# 4. 구현 결과
## 서비스 아키텍처
![](https://velog.velcdn.com/images/coo9292/post/d564c383-d073-40a3-b7c8-ff8906e05f40/image.png)

<br>

## 개발 원칙
유연하게 유지보수를 하고, 객체지향적인 코드를 설계하고자 팀 내에서 일관된 개발 원칙을 갖고 개발에 임함

### 1. 도메인 주도 설계(DDD , Domain Driven Design) : setter 외부로부터 은닉

#### 설명
- setter를 public으로 외부에 노출시키게 되면, 외부에서 무분별한 변경이 일어날 수 있으므로 개발자의 의도되지 않은 변경이 일어날 수 있고, 시간이 흘러 변경에 대한 원인 추적하기가 어려워질 수 있음
- 즉 변경이 필요한 메서드는 엔티티 내부에 정의하여, 해당 메서드를 통해서만 변경이 일어날 수 있도록 구현하는 게 좋음

#### 예시 : Restaurant 엔티티
![](https://velog.velcdn.com/images/coo9292/post/f7590866-38e9-4bdd-a3bd-9fa9efe8ac8b/image.png)
- 해당 메서드들은 ```Restaurant``` 엔티티의 일부이다. ```Restaurant``` 는 ```BusinessDay``` 및 ```Food```와 1:N 양방향 연관관계를 맺고 있으므로 양방향 연관관계를 설정해주는 작업이 필요함에 따라 **연관관계 설정 메서드 ```addBusinessDay()``` , ``` addFood()```를 엔티티 내부에 정의**하였음
- ```addStatistics()```는 엔티티 내부에 정의한 변경 메서드로 해당 메서드를 통해서만 ```averageRating``` , ```likesCount``` , ```reviewCount```값의 변경이 일어날 수 있음

#### 의의
- **연관관계 설정 메서드** 및 **엔티티 내부에 정의한 변경 메서드로만 변경**이 일어날 수 있음
- 네이밍도 단순 setXxxx()가 아닌 **명확하게 어떤 이름인지 알 수 있기 때문에 변경에 대한 원인을 추적하기 쉬움** 
- 엔티티에 정의된 필드의 변경이 엔티티 내부에서 일어나므로 **객체지향적이고 모듈 간 결합도를 낮추고 응집도를 높일 설계라고 볼 수 있음**
- 이것은 **비즈니스 로직을 서비스 계층이 아닌 도메인에 정의한 것이므로 도메인 모델 패턴을 활용함에 따라 도메인 주도 설계라고 볼 수 있음**

<br>

### 2. 테스트 주도 개발(TDD , Test Driven Development)
![](https://velog.velcdn.com/images/coo9292/post/3882d9c0-9c34-4493-b6a9-f1ac78cf23f7/image.png)
- Service Layor, Data Access Layor에서의 매 기능 구현이 끝나는 즉시 JUnit 5를 통한 테스트 진행
- given - when - then 방식으로 일관된 방향성의 테스트 진행하면서 효율적이었음
- 초반에는 매번 테스트를 진행하면서 개발하는 것이 부담스럽고 힘들었지만, 장기적인 관점에선 에러 발생 빈도가 적고 빠른 개발이 가능했음



<br>

## ★ Trouble Shooting : 객체 생성 시 정적 팩토리 메서드 패턴 사용에 대한 오류
### 개요
- Restaurant 엔티티는 객체 생성과 동시에 Review, Food, BusinessDay, Likes와 같은 다수의 엔티티에 대한 연관관계를 설정해줘야하고 22개의 필드도 설정해줘야함
- 즉 이렇게 복잡한 Restaurant 엔티티의 생성자를 public으로 둬서 외부로부터 무분별하게 생성하게 하면 Restaurant를 설계한 개발자의 의도대로 객체를 생성하지 않을 수 있게 되겠다고 생각하여 **정적 팩토리 메서드**를 도입
- 정적 팩토리 메서드는 객체 생성을 캡슐화할 수 있는 방법으로 클래스 내부에 객체를 생성하는 메서드를 만든 후 ```static```으로 선언하는 기법이므로 ```new```로 생성자를 외부에서 임의로 생성하지 못하게끔 ```protected```로 은닉해서 해당 메서드만 호출하면 개발자가 의도한 방향대로 객체 생성이 가능해짐

- 도메인이 객체 생성에 대한 책임을 짐에 따라 응집도가 증가하며 DDD를 준수하게 됨, 필드 값 설정 작업을 외부가 아닌 내부에서 해결하므로 ```setter```을 은닉하는데도 좋은 설계
- 추후 Restaurant의 객체 생성 관련 유지보수 시에도 해당 메서드만 리팩토링하면 됨
- 이런 많은 장점들을 통해 Restaurant 엔티티 내부에 정적 팩토리 메서드를 정의함

<br>

### 정적 팩토리 메서드 사용 및 발생된 문제
```java
public static Restaurant createRestaurant(String businessNum, String restaurantName, String contact,String description, Set<String> moodTypes, Set<String> containFoodTypes, Set<String> provideServiceTypes, Set<String> restaurantTypes, String image, String roadNameAddress, String landLotAddress, String zipcode, String detailAddress, Boolean canPark, int reservationTimeGap, Boolean isPenalty, List<BusinessDay> businessDays, List<Food> foods) {
    Restaurant restaurant = new Restaurant();
    restaurant.setContact(contact);
    restaurant.setDescription(description);
    restaurant.setBusinessNum(businessNum);
    restaurant.setName(restaurantName);
    restaurant.setMoodTypes(moodTypes);
    restaurant.setContainFoodTypes(containFoodTypes);
    restaurant.setProvideServiceTypes(provideServiceTypes);
    restaurant.setRestaurantTypes(restaurantTypes);
    restaurant.setImage(image);
    restaurant.setAddress(new Address(roadNameAddress, landLotAddress, detailAddress, zipcode));
    restaurant.setCanPark(canPark);
    restaurant.setReservationTimeGap(reservationTimeGap);
    restaurant.setIsPenalty(isPenalty);
    restaurant.setCreatedAt(LocalDate.now());
    restaurant.setUpdatedAt(LocalDate.now());
    businessDays.forEach(restaurant::addBusinessDay);
    foods.forEach(restaurant::addFood);
    return restaurant;
  }
```

- Restaurant 엔티티 내부에 정적 팩토리 메서드```createRestaurant```를 정의
- 많은 값을 설정해줌에 따라 **인자의 순서가 바뀌어도 모른다는 문제가 존재**
- 예를 들어 주소를 입력할 때 roadNameAddress와 zipcode의 순서를 바뀌어서 저장하면 엄청난 Side Effect가 발생
- 이 문제를 해결하기 위해 객체 생성 시 어떤 인자의 값을 넣고있는지 알 수 있게 빌더 패턴을 도입함

<br>

### 빌더 패턴으로 해결
```java
@Entity
@Getter
@Setter(AccessLevel.PRIVATE)
@ToString(exclude = {"foods", "businessDays", "reviews", "likes"})
@Builder //빌더 패턴
public class Restaurant {
	//생략
}
```
- Lombok 라이브러리가 제공해주는 ```@Builder```을 통해 빌더 패턴 적용
- **하지만 해당 패턴을 쓸 경우 맨 처음 정적 팩토리 메서드를 도입한 목적인 개발자가 의도한 방향대로 객체 생성이 다시 불가능해짐**

<br>

### 한계 및 내 생각
- 결국 빌더 패턴을 쓸 경우에는 객체 생성에 대한 제어가 도메인 외부에서 이루어지므로 개발자의 의도대로 객체 생성이 이루어지지 않게 되고 DDD의 목적에도 위배됨
- 그렇다고 정적 팩토리 메서드를 정의하면 잘못된 순서의 인자 할당 문제가 발생함
- 따라서 빌더 패턴과 정적 팩토리 메서드 패턴 간에는 Trade - Off 가 있다고 결론을 내림

<br>

### 빌더 패턴 vs 정적 팩토리 메서드 패턴
![](https://velog.velcdn.com/images/coo9292/post/4686f8e6-31a7-4cf8-af43-d5b16a2d8845/image.svg)

- **빌더 패턴**: 객체 생성 시 설정해줘야되는 값이 많고 호출해야될 연관관계 및 비즈니스 로직 메서드가 적거나 없을 경우
- **정적 팩토리 메서드 패턴**: 객체 생성 시 설정해줘야되는 값이 적거나 없고 호출해야될 연관관계 및 비즈니스 로직 메서드가 많을 경우(ex: Restaurant 엔티티)

> ※ 비즈니스 로직 메서드란 비즈니스 로직이 서비스 계층이 아닌 엔티티 내부에 위치할 경우임

<br>

### 결론: 빌더패턴 사용 + 문서화
빌더 패턴을 통해 객체를 생성하되 주석과 공유 문서를 통해 객체 생성 시 어떤 값을 할당해야될지 안내하는 방법을 선택함

<br>


## ★ Trouble Shooting : @ElementCollection , @CollectionTable의 문제
### 1. 개요 : @ElementCollection , @CollectionTable의 도입
![](https://velog.velcdn.com/images/coo9292/post/ac5b8c15-d9f9-47fe-99a5-28c65017d0a5/image.png)
- 식당 검색 시 많은 체크박스 필터링 조건들이 존재하며 체크박스는 여러 개의 데이터가 식당 테이블에 할당해야하므로 식당이 1이고 체크박스가 N인 1:N 관계의 별도의 테이블을 생성해줘야하는데, **JPA에서 1:N 관계의 테이블을 생성하는 데에는 두 가지 방법이 존재함**
- 첫번째 방법 : ```@Entity```로 엔티티를 별도로 생성 후 ```@OneToMany```로 1:N 연관관계 맺어주기
- 두번째 방법 : ```@ElementCollection , @CollectionTable```
- 일반적으로는 첫번째 패턴이 정형화되지만, **체크박스가 여러 개여서 일일이 각 체크박스에 대한 엔티티를 생성하는 옳지 않다고 생각하였고,** **현재 요구사항에선 체크박스 값이 변경되지도 않아 단순했으므로 체크박스를 엔티티로서 운영하는 것은 무겁다고 판단**

![](https://velog.velcdn.com/images/coo9292/post/3e9a65c2-e968-49eb-a6d0-d364ba389fd2/image.png)

그래서 두번째 방법인 ```@ElementCollection , @CollectionTable```을 사용하기로 결정했지만, 많은 이슈들이 있었음


### ※ @ElementCollection , @CollectionTable이란?
- ```@ElementCollection``` : 컬렉션 필드를 DB에 매핑해주는 어노테이션, 이때 한 테이블에서는 컬렉션을 관리 못하므로 별도의 컬렉션용 테이블로 매핑해줌
- ```@CollectionTable``` : 별도의 컬렉션용 테이블의 테이블명 및 조인 칼럼명 등을 지정할 수 있는 어노테이션
- 즉 ```@ElementCollection``` , ```@CollectionTable```은 컬렉션 매핑 시 같이 쓰임

![](https://velog.velcdn.com/images/coo9292/post/1e33603c-6089-4424-a210-9931448528ab/image.svg)
```java
@ElementCollection
@CollectionTable(name = "CONTAIN_FOOD_TYPE" , joinColumns = @JoinColumn(name = "RESTAURANT_ID"))
private Set<String> containFoodTypes = new HashSet<>();
```
- 컬렉션 테이블은 ```@CollectionTable```에서 name 속성으로 테이블명을 설정할 수 있고, joinColumns로 외래 키명을 설정할 수 있음
- ```RESTAURANT_ID``` : 주인 테이블의 외래 키
- ```CONTAIN_FOOD_TYPES``` : 컬렉션에 삽입되는 값 , 이름은 ```@Column```으로 변경 가능
- <span style="color:#FF4545">두 칼럼은 **복합 키** 형태여야하므로 값이 중복되어선 안됨


### 2. 문제
#### ① JPA가 인식하는 테이블의 스키마와 일치하는 형식으로 매핑해줘야함, 스키마가 조금이라도 다르면 JPA가 테이블을 찾지 못하여 ```SQLGrammarException``` 발생
<img src="https://velog.velcdn.com/images/coo9292/post/eb5efb27-5bb0-4f9c-a6ff-6b42ab021afe/image.png" style="width:30rem">

복합 키 , 칼럼이름 및 타입 전부 일치하게 매핑해줘야됨 , 엔티티를 테이블로 매핑하는 것은 많이 해봐서 무리가 없었지만, 컬렉션 변수를 처음 테이블로 매핑하다보니 어려움이 있었음

#### ② 컬렉션 선언 시 List가 아닌 Set 선언 
<img src="https://velog.velcdn.com/images/coo9292/post/b08f4a1f-d0eb-464f-a1ee-82796bdf4eb4/image.png" style="margin-bottom:0.1rem">

컬렉션 타입 선언 시 주로 사용하던 ```List```가 아닌 ```Set```을 사용해야됨 , 복합 키 특성 상 컬렉션에 삽입되는 각 데이터들 간에 중복이 되면 안되므로 Set으로 선언해야됨(제네릭이 String , Integer, Double와 같은 일반타입 기준)

#### ③ SQL 테스트 시 명시적인 조인을 해줘야하고, 중복된 데이터가 발생함
![](https://velog.velcdn.com/images/coo9292/post/3016872b-b677-4720-8c46-9f68bda62103/image.png)
JPA에선 자동으로 컬렉션에 데이터들 조회해와서 할당해주지만, SQL로 직접 테스트할 경우 각 컬렉션 테이블마다 모든 조인 질의를 전부 작성해줘야했고, 일대다 조인 시, 500개 이상의 중복된 데이터가 조회되었음

#### ★ ④ 변경 시 N+1 발생 
![](https://velog.velcdn.com/images/coo9292/post/240b7743-1c76-41b6-8800-abc5add1516c/image.png)

- 현재 요구사항에선 체크박스의 데이터들이 변경될 일이 없어서 괜찮았지만, **추후 리팩토링을 하거나, 실무의 경우 요구사항이 지속적으로 변경되므로 충분히 변경될 가능성이 농후함.** 
- ```@ElementCollection``` ```@CollectionTable``` 사용 시 **컬렉션 데이터를 변경할 경우 주인 테이블의 id에 해당되는 컬렉션 테이블의 데이터들이 전부 삭제되고 처음부터 하나씩 삽입되는 N+1 문제가 발생되며**, 이는 컬렉션 테이블을 명확하게 식별하는 식별자가 없어서 발생하는 문제임
  
  
### ★ 3. 결론 및 내 생각 
- 편하려고 시작했지만, JPA의 ```@ElementCollection``` , ```@CollectionTable``` 매핑 원칙에 따라 개발자가 직접 설정해줘야하는 부분이 많았음 , 배보다 배꼽이 더 큰 느낌
- 또한 자바에서 테스트 시에는 JPA가 자동으로 컬렉션에 값들을 할당해주니 편리할 순 있어도 SQL로 직접 DB에서 테스트 시에는 조인을 명시해야하는 번거로움이 있었고, 중복된 데이터로 인해 쿼리 튜닝도 추가적으로 필요
- 해당 프로젝트에선 어려움을 겪으면서도 잘 구현해냈지만, 실무 상황이라 가정하였을 때 요구사항이 바뀌어서 데이터를 변경해야한다면, 결국 N+1 문제가 필연적으로 발생함에 따라 컬렉션 필드들을 전부 제거하고, 새로 엔티티를 생성해야함
- SOLID의 OCP에 따라 변경에는 닫혀있고, 확장에는 열려있어야하므로 언젠간 변경할 가능성이 존재하는```@ElementCollection``` , ```@CollectionTable```를 쓰는 것은 OCP를 위배하는 것과 마찬가지
- 결론은 편한 것도 미지수일 뿐더러 추후 위험을 감수하면서까지 쓸 필요는 없다고 판단하여 사용하지 않는 것이 좋아보이고, 처음부터 일대다 관계의 엔티티를 생성하는 방식을 선택할 것임

<br>

## ★ QueryDSL의 편의성
### 개요
Wanna V를 개발하면서 깨달은 QueryDSL 만의 유용한 다른 엔티티들과의 조인하는 방법에 대해 적고자 한다.
  
### MyBatis에서의 조인
```xml
<select id="findById" resultMap="restaurant">
    SELECT *
    FROM RESTAURANT r
    JOIN FOOD f
    ON r.id = f.restaurant_id
    JOIN BUSINESS_DAY b
    ON r.id = b.restaurant_id
    JOIN REVIEW rv
    ON r.id = rv.restaurant_id
    JOIN CONTAIN_FOOD_TYPE ct
  	ON r.id = ct.restaurant_id
    JOIN PROVIDE_SERVICE_TYPE pt
  	ON r.id = pt.restaurant_id
    JOIN RESTAURANT_TYPE rt
  	ON r.id = rt.restaurant_id
    JOIN MOOD_TYPE mt
  	ON r.id = mt.restaurant_id
  	JOIN LIKES l
  	ON r.id = l.restaurant_id
  	JOIN USER u
  	ON l.user_id = u.id
  	//생략
  </select>
```
MyBatis는 SQL Mapper 역할을 **개발자**가 직접 해주면서 직접 SQL을 작성해줘야됨에 따라 조회하려는 모든 테이블을 모두 명시적으로 조인해줘야 조회 가능 

  
### JPA + QueryDSL에서의 조인
```java
  
@Repository
public class RestaurantRepository{
  private final EntityManager em;
  private final JPAQueryFactory query;
  
  @Autowired
  public RestaurantRepository(EntityManager em){
  	this.em = em;
  	this.query = new JPAQueryFactory(em);
  }

  public List<Restaurant> findAll(){
      return query.selectFrom(restaurant).fetch();
  }
  
}
```
- QueryDSL에서는 type-safe하게 자바 메서드만으로 질의를 작성할 수 있음
- **또한 일일이 join()을 명시적으로 호출하지 않아도 주테이블에 대한 연관관계 테이블들의 조인이 원활하게 이루어지는 것을 알 수 있었음**

```java
public List<Restaurant> findAll(){
    return query.selectFrom(restaurant).join(restaurant.reviews, review)
        .leftJoin(restaurant.reviews, review)
        .join(restaurant.foods, food)
        .leftJoin(restaurant.likes , likes)
        .fetch();
  }
```
- 명시적으로 join()을 명시적으로 호출해야하는 시점은 **연관관계 테이블에 대한 QType 객체를 사용할 경우임**
- **즉 where절 , having절에서 연관관계 테이블에 대한 조건을 직접적으로 거는 경우에 해당**
- 만약 where절과 having절에서 restaurant의 연관관계인 review 혹은 food 테이블에 대한 조건을 썼는데 조인을 호출하지 않으면 QueryDSL에서는 연관관계에 대한 데이터를 찾을 수 없어 ```NullPointerException``` 발생

<br>




# 5. 회고
## 협업 과정

### ① 철저한 일정관리를 통한 협업
<img src="https://velog.velcdn.com/images/coo9292/post/9129caa7-3ff8-4311-9ab0-9047d37abc3b/image.png">

### ② 3개의 github repository(admin , user(frontend,backend)로 분리
<img src="https://velog.velcdn.com/images/coo9292/post/078864a1-0237-4ac7-81c1-c218dedf67f9/image.png" style="width:70%">



### ③ 데일리 스크럼을 통한 회의록 작성 및 일주일에 3번 이상 Merge
![](https://velog.velcdn.com/images/coo9292/post/fe55fbb6-e17a-445f-be9e-011ef1d92f08/image.png)



### ④ 668개의 commit
![](https://velog.velcdn.com/images/coo9292/post/7d9bac67-61ff-4727-b15d-b142f77fa8f9/image.png)

<br>

## 개선사항 및 기대효과
![](https://velog.velcdn.com/images/coo9292/post/5e61e8ea-46c2-4827-b083-6bd3dc3402ea/image.png)

<br>

## git message convention
### 🎉 Init (Initialization)
- **설명**: 프로젝트의 초기 설정이나 기본적인 구조 설계
- **예시**: `🎉 Init: set up initial project structure`

### ✨ Feat (Feature)
- **설명**: 새로운 기능을 추가하는 커밋
- **예시**:`✨ Feat: add user login functionality`
ㅇㅇㅇㅇ
### 🐛 Fix (Bug Fix)
- **설명**: 버그를 수정하는 커밋
- **예시**:`🐛 Fix: correct calculation error in tax module`

### 🎨 Style
- **설명**: 기능적 변경이 없으며, 코드의 포맷이나 스타일, 주석 등을 수정
- **예시**:`🎨 Style: format code according to ESLint rules`

### ♻️ Refactor
- **설명**: 코드의 구조를 변경하지만 기능은 변경하지 않는 커밋
- **예시**:`♻️ Refactor: reorganize project structure`

### ✅ Test
- **설명**: 테스트 관련 변경 (테스트 추가, 수정, 제거 등)
- **예시**:`✅ Test: add unit tests for new user service`

### 📝 Docs (Documentation)
- **설명**: 문서화 관련 변경
- **예시**:`📝 Docs: update README with setup instructions`

### 🔒 Security
- **설명**: 보안 관련 수정
- **예시**:`🔒 security: fix XSS vulnerability`

### 🚀 Chore
- **설명**: 기타 잡다한 작업이나 설정 변경
- **예시**:`🚀 chore: upgrade npm packages`

<br>

## ★ 회고 
  
### 기획 및 협업
- 개인으로 프로젝트를 진행할 때는 체계적인 절차 없이 산출물 관리에도 소홀하여 오직 구현에만 급급하여 빨리 완성물을 내야한다는 생각에만 사로잡힌 결과, 오히려 구현하는 데 시간이 더 오래걸렸습니다.
- 하지만 해당 팀 프로젝트에선 기획적인 부분에서의 유사 플랫폼의 벤치마킹을 하며 정책적인 부분들 또한 세밀하게 검토하여 철저하게 산출물 관리를 진행하였고, ERD를 포함한 여러 다이어그램 , Figma를 통한 UI 작업을 진행하며 한단계씩 차근차근 절차를 밟아서 구현한 결과 시간을 많이 단축시킬 수 있었습니다.
- 하지만 아무리 탄탄하게 기획과 설계 및 산출물 관리를 열심히 한다 하더라도 실제로 구현할 때는 보이지 않던 구멍들이 있을 수밖에 없다는 것을 느꼈고, 기획과 설계적인 부분, 그리고 구현적인 부분 양극 사이에서 시간적인 분배를 잘 해야되는 것이 좋은 개발자의 소양일 것이라는 것을 느꼈습니다.
- 또한 개인적으로 독단적으로 이행하는 성향보단 팀 프로젝트에선 귀를 열고 입도 열며 다함께 협업하는 자세를 가지려는 성향을 갖는 사람이 좋은 팀원이고, 프로젝트를 수행함에 있어서도 훨씬 원활할 것임을 느꼈습니다. 
  

### 백엔드
- 제가 맡은 식당 도메인의 필터링 조건은 총 8가지이고, 식당 정렬 조건 및 식당 검색까지 더하면 10가지입니다. 즉 동적 쿼리를 작성해야하는데, JPA로 동적 쿼리를 작성함에 있어서 간편하고 type - safe 및 null - safe한 특성을 갖고 있는 Query DSL 오픈소스를 사용하였습니다. 하지만 처음 사용하는 것이다보니 Query DSL의 문법적인 특성을 추가적으로 공부해야했고 그에 따라 원인 모를 오류들이 속출하며 trouble - shooting을 계속한 끝에 10가지의 필터링 조건이 포함된 동적 쿼리를 완성할 수 있었고 테스트 또한 잘 수행되었습니다.
  
```java
public List<Restaurant> findAll(RestaurantSearchCond restaurantSearchCond , String search){
	//생략
    BooleanBuilder whereBuilder = new BooleanBuilder();
    for (String restaurantType : restaurantTypes) {
      whereBuilder.and(restaurant.restaurantTypes.any().eq(restaurantType));
    }

    for (String moodType : moodTypes) {
      whereBuilder.and(restaurant.moodTypes.any().eq(moodType));
    }
    for (String containFoodType : containFoodTypes) {
      whereBuilder.and(restaurant.containFoodTypes.any().eq(containFoodType));
    }
    for (String provideServiceType : provideServiceTypes) {
      whereBuilder.and(restaurant.provideServiceTypes.any().eq(provideServiceType));
    }

    BooleanBuilder havingBuilder = new BooleanBuilder();
    for (Integer rate : rates) {
      havingBuilder.and(review.rating.avg().goe(rate).and(review.rating.avg().lt(rate + 1)));
    }


    JPAQuery<Restaurant> dynamicQuery = query.selectFrom(restaurant)
        .leftJoin(restaurant.reviews, review)
        .join(restaurant.foods, food)
        .leftJoin(restaurant.likes , likes)
        .where(whereBuilder, eqCanPark(canPark), eqIsOpen(isOpen),
                likeSimilarRoadAddress(roadAddress), mergeRestaurantRegionNameSearch(search))
        .groupBy(restaurant)
        .having(havingBuilder, loeGoePrice(startPrice, endPrice));
    addOrderBy(sortConditions, dynamicQuery);


    return dynamicQuery.fetch();
  }
```
- 하지만 완성하고보니 그냥 JdbcTemplate, MyBatis 같은 SQL Mapper을 사용했으면 QueryDSL의 문법에 대한 추가적인 고생 없이 구현할 수 있었겠다는 생각을 하였지만, 한번 QueryDSL 지식을 습득하고 나니 SQL Mapper을 직접 사용하는 것과는 다르게 굉장히 편리하게 다른 애플리케이션의 동적 조회 쿼리를 구현할 수 있겠다는 생각을 하였습니다
- 구현한 ```findAll```메서드만 호출하면 사용자가 화면에서 조작한 필터링을 바탕으로 동적으로 결과가 나오게끔 구현하였습니다. 하지만 전국에 있는 모든 비건 식당 데이터를 넣을 경우 매번 findAll을 호출하는 것은 성능 상 좋지 않다는 생각을하였고, Redis의 캐싱 기능을 이용하여 성능을 향상시키는 방법으로 리팩토링해나갈 것이고 애플리케이션 내에 카카오 지도를 이동시킬 때마다 해당현재 위치 근처의 식당들이 구현되게 할 것입니다.
  

### 프론트엔드
- 지도 API를 선택할 때 NCP를 쓰다보니 처음에는 네이버 지도 API를 사용하였습니다. 하지만 지도의 마커가 잘 찍히지 않는 문제가 발생되어 카카오 지도로 변경하였고, 커스텀 오버레이를 통해 사용자 친화적인 마커를 구현하는 데에 성공하였습니다.
- 그렇게 정적인 화면은 목표한대로 잘 나왔지만, 동적인 처리가 부족하였음. 식당 조건 필터링 시 체크하는대로 즉각적으로 화면이 랜더링되었으면 좋았지만, 검색하기 버튼을 누른 후 SSR 방식으로 해당 화면이 재 랜더링되게끔 설계하였습니다.
- 또한 모달창을 활용하지 못하여 UX를 고려하지 못하였고, 화면이 넘어가는 방식으로 처리하였는데 이들은 JS 및 React나 Vue JS같은 JS 프레임워크의 지식이 부족의 문제였던 것으로 판단하여 추가적인 js에 대한 공부의 필요성을 느꼈습니다.



### DB
- 이번 프로젝트에서 가장 시간이 많이 소요되었던 부분입니다. SQL이 취약하다보니 QueryDSL을 활용한 데이터 접근 계층의 개발에도 차질이 생겼고, 결국 전체적인 구현이 늦어졌습니다.
- 집계함수를 쓸 경우에는 무조건 GROUP BY 절로 집계의 기준을 잡아줘야하고, 집계 함수가 포함된 조건을 쓸 경우 where 절이 아닌 having 절에 적어야 정상적으로 동작한다는 사실을 알 수 있었습니다.
- 백엔드 개발자는 결국 SQL이 기본이여야한다는 사실을 깨달았고, SQL 공부를 위해 SQL 관련 지속적인 문제를 풀어나갈 계획입니다.


### 테스트
- TDD를 진행함에 따라 JUnit 5 라이브러리를 이용하여 매 기능이 구현될 때마다 테스트를 진행하였습니다.
- 테스트는 given/when/then 패턴을 통하여 일관된 형식을 갖고 진행하였기 때문에 저와 팀원들이 테스트를 수월하게 진행할 수 있었고, 선 테스트를 통해 오류를 바로잡고 후에 개발한 결과 당장은 번거롭고 시간이 길게 느껴졌지만, 결과적으로 봤을 때 개발하는 데 시간이 많이 단축됨을 느꼈습니다.
