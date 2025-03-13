# 프로젝트 이름 
https://imsodam.github.io/react_pokemon/

## 소개
오픈 API인 pokeapi 를 이용하여, 포켓몬 도감을 만들어보면서 웹 프론트에서 서버와 API 통신을 구현했습니다.
CSS-in-JS(Emotion)를 다뤄보고 컴포넌트 기반 스타일링 방식을 경험했습니다.
react-router-dom, inifinity-scroll 등 여러 라이브러리를 활용하여 프로젝트를 만들었습니다.

## 기능
- 포켓몬 목록 (Poke API)
- 무한 스크롤 기능
- 포켓몬 상세 페이지 (Poke API)
- 페이지 라우팅 (메인 <-> 상세)
- 포켓몬 이미지 테마 변경
   
## 기술 스택
**Frontend:** 
- React - UI 라이브러리
- React Router DOM - 라우팅 관리
- Redux Toolkit - 상태 관리
- React Redux - Redux 상태 관리를 위한 React 바인딩
- Axios - API 호출
- Emotion - 스타일링 (@emotion/react, @emotion/styled)
- React Icons - 아이콘 사용
- Infinite Scroll Hook - 무한 스크롤 구현
- Intersection Observer Hook - 뷰포트 감지


## 폴더 구조
```
📦 poke-dex
├── 📂 src
│   ├── 📂 Common          # UI 컴포넌트
│   ├── 📂 Constant        # 상수값
│   ├── 📂 Detail          # 상세 페이지 컴포넌트
│   ├── 📂 List            # 목록 페이지 컴포넌트
│   ├── 📂 Service         # API 서비스 함수
│   ├── 📂 Store           # Redux 스토어
│   └── App.tsx            # 루트 컴포넌트
└── README.md
```
