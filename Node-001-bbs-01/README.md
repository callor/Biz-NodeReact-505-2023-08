# Node + Express + MySQL BBS 프로젝트

- 프로젝트 생성 : `npx express-21c [project] -s`

## NodeJS 에서 MySQL 서버에 접속하기 위한 Global Setting

- `MySQL 8.x` 버전 설치 확인
- MySQL 연결을 위한 도구 설치
- 관리자 권한으로 cmd 창을 열고 실행

```bash
npm install -g sequelize-auto
npm install -g mysql2
```

## 기존에 생성된 DB Scheme 로 부터 DB 정보 가져오기

`sequelize-auto -d imageDB -h localhost -u root -x '!Biz8080'`

## models 폴더의 model 파일들 수정

- tbl\*.js 파일들 수정
- init-models.js 파일 수정

## 서버 폴더에서 node_modules 다시 생성(다운로드 실행)

`npm install`

## 서버 Start

`nodemon`
