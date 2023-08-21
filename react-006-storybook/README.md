# React StoryBook Project

- React 의 컴포넌트 관리 프로젝트

## StoryBook Project 를 위한 도구 설치와 프로젝트에 storybook 적용하기

- dependency

```bash
    npm install -g storybook
```

- project 적용

```bash
npx create-react-app [project]
cd  [project]
storybook init

```

- 다시 storybook start

```bash
npm run storybook
```

또는

```bash

    npm install -g @storybook/cli
```

```bash
npx create-react-app [project]
cd [project]
getstorybook init

```

## React BucketList Project

- dependecies

```json
"dependencies": {
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0",
    "react-scripts": "5.0.1",
    "react-uuid": "^2.0.0",
    "styled-components": "^6.0.7",
}
```

## React Router DOM 의 Data Router

- v5 까지 사용하던 `BrowserRouter` 와 같은 컴포넌트 방식의 Router 를 대체하고, 데이터(MVP)와 연동되는 Router 를 쉽게 구현할수 있도록 새롭게 v6에서 추가된 함수들
- `BrowserRouter`를 대체하는 `creatBrowserRouter` 등이 있다
- `BrowserRouter`는 App 전체를 감싸는 Provider 역할을 수행하는 컴포넌트이다.
- DataRouter 는 별도의 Provider 를 사용한다.
