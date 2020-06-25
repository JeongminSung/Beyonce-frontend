# behance.net 클론프로젝트

- 2020.5.25-2020.6.5 (2주)
- Github Repository
- WeCode 8기 수강생들의 2차 2주 클론 프로젝트입니다. 3명의 개발자가 함께 협업했습니다. (2 Front-End, 1Back-End)

>Demo
https://youtu.be/G-K1Xp-wdJ0

## 목표
- behance.net 사이트의 interface와 동일하게 화면 구현하기.
- Infinite 스크롤 구현
- Infinite 슬라이더 구현
- 사진 업로드 시 메인페이지에 노출
- svg 아이콘 활용

## 기능
- 카카오 API를 활용한 소셜로그인
- 카카오 소셜로그인을 통해 사용자의 프로필사진 및 데이터 받기
- Limit과 offset으로 한 번에 fetch 받는 데이터의 개 수 조절
- URL 파라미터를 통해 스크롤이 바닥에 닿을 시 다음 데이터를 받아오는 무한 스크롤 구현
- 배열을 조작해 버튼 클릭 시에도 데이터가 끊기지 않는 무한 슬라이더 구현
- react hook를 활용 useState, useEffect 사용
- styled-components를 이용한 글로벌 스타일링, 코드 난독화
- InnerHTML 데이터로 실제 사이트와 똑같은 상세페이지 구현

## 사용한 기술
- Front-End: ReactJS, hooks, styled-components
- Back-End: Django, MySQL(Back-End Repository)
- Deployment: AWS
