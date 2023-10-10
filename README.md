# StuCamp
<br>

## 👀 소셜, 타이머, 지도, 채팅 기능을 한 번에! <br>공부기록 공유 소셜 어플 '스투캠'
![StuCamp_intro](https://github.com/2023-SMHRD-SW-Fullstack-1/StuCamp/assets/130349912/229f9b1e-f114-4c86-9500-becffb642e5e)

<br>
<br>

## 📅 프로젝트 기간
2023-7-31 ~ 2023-8-4 (1주)
<br>
<br>

## ⭐ 주요 기능
* 회원가입 및 로그인
* 카메라 및 갤러리 기능 활용 가능한 피드 작성, 수정, 삭제
* 피드에 대한 댓글 작성/삭제 및 좋아요, 찜하기 기능
* 타이머를 통한 공부 시간 기록 및 캘린더 API 활용 일일 공부시간 출력
* 지도 API 활용 사용자 위치 기반 독서실 위치 공유 
* 오픈 채팅 기능
<br>

## ⛏ 기술스택
![StuCamp_env](https://github.com/2023-SMHRD-SW-Fullstack-1/StuCamp/assets/130349912/707e3486-073c-4bdd-a206-1a409273faa5)
<br>
<br>

## ⚙ 서비스 흐름도
![StuCamp_process](https://github.com/2023-SMHRD-SW-Fullstack-1/StuCamp/assets/130349912/e6fab11f-e0a9-4e5b-86bd-626accb0b76c)
<br>
<br>

## 🖥 시연 영상
https://github.com/2023-SMHRD-SW-Fullstack-1/StuCamp/assets/130349912/77761f92-386d-4d6f-9132-25531ace50e4
<br>
<br>

## 👨‍👩‍👦‍👦 팀원 역할

### * 이지희(팀장)

#### 프로젝트 총괄

#### D.A/M

- 광주데이터 (구 단위로) 서버에서 가져온 데이터 광주로 필터링 및 데이터 처리
- 다각형 지도 표현하기 위해 TmapAPI 를 이용해 좌표 경계값 데이터 수집 및 전처리
  
#### Front-End

- 애니메이션 발자국지도
  
  - 발자국 지도 컴포넌트화 설계
  - 발바닥 객체 설계 및 기본 animation style 지정
  - 지도 좌표 수집
  - 좌표의 거리에 따라 발자국 생성 로직 구현
  - 다음 좌표 각도에 따라 발자국 객체 회전하는 로직 구현
  - 디자인
  
- 카카오 지도


  - 서버에서 가지고 온 데이터 테마별 필터링하여 지도에 표현하는 기능
  - Swiper를 이용한 슬라이더 구현
  - GeolocationAPI 와 Haversine formula 공식을 이용한 위치기반 인증여부 확인 기능
  - 사용자의 인증여부에 따라 다각형 지도 내부의 밝기가 변하는 기능
  - debounce를 이용한 리사이즈 반응형 설계 및 구현
  - mui/material 을 이용한 이미지 리스트 기능
  - 디자인

- 피드 페이지

  - react-infinite-scroll을 이용한 인피니티 스크롤 페이징 기능 구현
  - DB에 저장과 별개로 성능개선을 위한 임시댓글 로직 구현
  - 랭킹 데이터 연결 및 보완
  - 디자인

#### Back-end

- 페이징 기능 설계, API 기능및 SQL구문 작성
- 댓글 기능 설계 및 API기능 및 DB테이블 설계,구현

---

### * 김혁

- git 관리
  
#### Back-End
- DB설계 및 시퀄라이즈 데이터 모델링
- 로그인 기능 구현
- 회원정보 확인, 회원수정 기능 구현
- 찜 등록, 찜 삭제, 단일 유저 찜 조회 기능 구현
- 기록 저장 기능 구현
- 사용자별 기록 조회 기능 구현
  
#### Front-End
- 공부 시간 관련 알고리즘 구현
- MPAndroidChart 를 이용한 기록 통계 구현
- firebase 연동 및 채팅기능 구현

---

### * 신지영

#### Back-End
- DB설계 및 시퀄라이즈 데이터 모델링
- 회원가입 기능 구현
- 회원 탈퇴 기능 구현
- 댓글 추가, 삭제 기능 구현
- 피드 추가, 삭제, 수정 기능 구현
- 좋아요 추가 기능 구현

#### Front-End
- 회원별 좋아요 불러오기, 좋아요 추가 및 해제 기능 구현
- 회원별 찜목록 불러오기, 찜하기/찜취소 기능 구현
- 찜목록 화면 구현 및 찜목록 불러오기 기능 구현
- Android Studio 디자인 수정(마무리)

---

### * 서현록

#### Front-End
- 어플리케이션 프래그먼트 분리 및 연결
- 카메라 촬영 및 사진첩에서 사진 불러오기 기능 연동 게시물 작성 FE 기능 구현
- 게시물 작성 / 수정 / 삭제 화면 구현
- 리사이클러뷰 기능 활용 게시글 동적 리스트 기능 구현
- 어플리케이션 서비스 스타일링 및 화면 디자인 적용

---

### * 신지훈

#### Front-End
- 메인페이지 및 전체적인 디자인 작업
- 마이페이지 구현
  
#### Back-end
- MVC 패턴 설계
- 이메일 닉네임 중복체크, 회원가입 로그인 기능 
- 마이피드, 유저피드 정보 제공 및 정보
- 랜드마크 사진 파일 전송API 설계
- 랭킹 정보제공
- 전체적인 SQL 문 작성
- 회원정보 수정기능

  ---

### * 안영석

#### Front-End
- 카카오 map 활용 지도 API 불러오기
