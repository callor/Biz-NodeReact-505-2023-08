# NodeJS 서버와 연동되는 React Client

## react 의 실행 port 변경

- NodeJS 서버와 React 개발환경의 Server 의 실행 port 가 모두 3000 으로 서로 겹치는 관계로 여러 문제를 일으킬 수 있다.
- NodeJS 에서 Port 를 변경할수도 있지만, React 의 실행 스크립트를 변경하여 Port 를 변경하자
- `package.json` 파일의 다음 start 스크립트 설정을 변경한다

```json
// 원래 start 스크립트
"start": "react-scripts start",

// Port 를 5000 으로 변경하면 start 하는 스크립트로 변경
"start": "set PORT=5000 && react-scripts start",

// linux, max 환경에서는 다음과 같이 변경
"start": "export PORT=5000 && react-scripts start",
```

## NodeJS Server 와 연동에서 CORS 오류를 방지하기 위한 설정

- `package.json` 에 다음 항목 추가

```json
// 다음 항목 중간에 proxy 추가하기
 "private": true,
 "dependencies": {

 }

// 추가된 코드
 "private": true,
 "proxy":"http://localhost:3000/",
 "dependencies": {
 }

```

## React 프로젝트를 NodeJS 폴더에 포함시키기

- React 프로젝트를 NodeJS 폴더로 이동한다
- 적당한 이름으로 변경한다 : `react-client`
- node의 bin/app.js 의 다음항목을 변경한다

```js
// 기존 코드
app.use(express.static(path.join("public")));

// React Build 폴더를 static 으로 지정하기
app.use(express.static(path.join("react-client/build")));
```

- react-client 에서 build 명령 실행 : `npm run build`

- 이렇게 설정을 하면 NodeJS 의 `http://localhost:3000/` 을 열면 react 의 초기 화면이 열린다

- React 의 코드를 변경하면, 반드시 다시 build 를 실행해 주어야 한다.

## React 의 시작 방법 변경

- 기존의 React 시작방법 : `npm run start`
- 새로운 React 시작방법 : `nodemon --exec "react-script build" `
- 단, 이방법은 기존의 React Hot Loading 기능을 사용하기 어렵다  
  때문에 기존의 Hot Loading 방법을 사용하려면 또하나의 터미널을 열고 `npm run start`를 실행해 준다
- 기본 상태에서는 nodemone 이 계속 재 시작한다. nodemons 현재 react-client 폴더에 있는 어떠한 파일이라도 변경이 되면 자동 재 시작된다. nodemone 의 실행을 다소 제한할 필요가 있다
