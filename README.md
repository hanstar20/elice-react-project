## 수정 히스토리

### 21/08/17

-   axios를 이용해 질문을 받아오고, 질문을 화면에 표시
-   react-router-dom을 이용하여 페이지를 구현함
-   컴퍼넌트화 시킬 수 있는 부분은 컴퍼넌트화 시키기
-   redux를 이용하여 유저 정보를 전역 상태로 저장

### 21/08/18

-   라디오 버튼을 통해 결과값 저장하기
-   결과값을 객체로 저장하고 사용하기 -> 객체로 받는 것보다 순서대로 리스트에 넣는게 사용하기나 정렬하기 편하여 리스트로 사용 (객체 사용하는 것 연습 필요)
-   post를 통해서 결과 받기 -> 결과를 받았으나 그래프를 그릴 수 있는 데이터는 받지 못하여 api 분석이 필요한 상황
-   전체적인 페이지 제작 및 필수 항목 위주로 구현

### 21/08/19

-   postman을 세팅하고 postman을 이용하여 api 분석 후 결과 데이터 저장하기
    -   postman을 통해서 쉽게 request를 보내서 결과값을 알 수 있었고, 그 결과값을 토대로 코딩에 적용
-   progress bar 어떻게 만들지 고민, 검색 그리고 구현
-   와이어프레임과 최대한 비슷한 디자인 구현하기 (최대한 css를 사용할 것)
-   컴퍼넌트를 세분화 시키기
    -   현재 디렉토리 구조는 어떤 파일이 어떤 역할을 하는지 제목으로만 유추해야해서 폴더를 추가하고 새로운 디렉토리 구조로 변경
    -   함수화 하여 새로운 컴퍼넌트로 만들 수 있는 것들은 따로 생성
-   Prettier, ESLint 적용하기
-   학력별, 전공별 직업 정보 가져와서 저장하기

### 21/08/19

-   Finish 페이지, Result 페이지에 필요한 컴퍼넌트 만들기
    -   Finish 페이지 : 간단한 문구가 뜨도록 구현
    -   Result 페이지 : 값은 다 받아왔으나 아직 그래프, 표를 구현하진 못함
-   progress bar 만들어서 Test 페이지에 적영
    -   progress에 사용할 퍼센트는 받아오나 디자인에 미적용
-   와이어프레임과 최대한 비슷한 디자인 구현하기 (최대한 css를 사용할 것)
    -   gatherInfo와 QuestionBox까지 완성

### 21/08/21

-   ExampleDetail을 ExampleDetail.js에 따로 컴퍼넌트로 만들어 적용
-   반복되던 CompleteChecked(5 _ (Number(page) - 1) + 1, 5 _ Number(page) + 1) 를 변수화 시켜 적용
-   page를 표시하는 파일들을 알기 쉽게 뒤에 Page를 붙여 정리

### 21/08/23

-   useParams를 이용한 path 동적 동작 적용하기
-   TitleAndProgress.js 만들어 TitleAndProgress 컴포넌트에 Progress Bar, 퍼센티지, 예시 설명 구현
-   FinishPage 디자인 작업 완료
-   ResultPage 디자인 작업
    -   인적 정보를 표시하는 표 컴포넌트 구현
    -   직업가치관결과 그래프 컴포넌트 구현
-   디자인 작업 추가로 인한 warning 다량 발생, 수정 작업 진행
-   학력별, 전공별 결과 데이터 사용하기 용이하게 데이터 형태 수정
-   학력별 직업, 전공별 직업표 컴포넌트 구현
-   QuestionBox 보기 정렬
-   어플 아이콘 및 타이틀 수정

### 21/08/24

-   GatherInfoPage에서 Tooltip 만들어서 버튼 비활성화 이유 표시하기
-   react-animated-number를 이용해서 Progress Percent 동적으로 변하기
-   transition 이용해서 Progress Bar 천천히 변하기

### 추후 수정해야할 부분

-   findMaxIndex, findMinIndex 로직 수정
