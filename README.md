## 수정 히스토리

### 8/21

-   ExampleDetail을 ExampleDetail.js에 따로 컴퍼넌트로 만들어 적용
-   반복되던 CompleteChecked(5 _ (Number(page) - 1) + 1, 5 _ Number(page) + 1) 를 변수화 시켜 적용
-   page를 표시하는 파일들을 알기 쉽게 뒤에 Page를 붙여 정리

### 8/23

-   useParams를 이용한 path 동적 동작 적용하기
-   TitleAndProgress.js 만들어 TitleAndProgress 컴포넌트에 Progress Bar, 퍼센티지, 예시 설명 구현
-   FinishPage 디자인 작업 완료
-   ResultPage 디자인 작업
    -   인적 정보를 표시하는 표 컴포넌트 구현
    -   직업가치관결과 그래프 컴포넌트 구현
-   디자인 작업 추가로 인한 warning 다량 발생, 수정 작업 진행
-   학력별, 전공별 결과 데이터 사용하기 용이하게 데이터 형태 수정
-   학력별 직업, 전공별 직업표 컴포넌트 구현

### 추후 수정해야할 부분

-   findMaxIndex, findMinIndex 로직 수정
-   QuestionBox 보기 정렬
-   GatherInfoPage 버튼 오버시 비활성화 이유 만들기
-   nav 창 만들어서 이동할 수 있게 만들기
-   어플 아이콘 및 타이틀 수정
