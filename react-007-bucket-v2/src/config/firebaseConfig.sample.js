/**
 * google firebase 연동 설정값
 *
 * 다음의 firbaseConfig 내용을 프로젝트의 값으로 변경한 후
 * firebaseConfig.js 로 이름을 변경한 후 프로젝트 실행
 *
 */
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
