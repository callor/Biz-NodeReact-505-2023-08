import express from "express";
const router = express.Router();
// import { Router } from "express";
// const router = Router();

import multer from "multer";
import fs from "fs";

import DB from "../models/index.js";
// const tbl_bbs = DB.models.tbl_bbs;
// const tbl_files = DB.models.tbl_files;

// 구조분해하여 객체로부터 변수를 독립하고,
//  다른 이름으로 사용하기
//  다른이름 변수를 :이름 형식으로 추가
const { tbl_bbs: BBS, tbl_files: FILES } = DB.models;

/**
 * bbs API Router 설정
 * 보통 API 서버는 view 가 없이 JSON(또는 XML) 데이터를 client 로
 * return 하는 서버를 말한다.(Spring Rest Server)
 *
 * res.send() 또는 res.json() 함수로 마감한다
 *
 *
 */

const Hello = {
  title: "반가워 나 Node 야!",
  message: "Hello NodeJS BBS World",
};

// 파일을 전송하기 위한 설정값 만들기
const storageOption = {
  filename: (req, file, cb) => {
    const originName = file.originalname;
    const filePrix = `${Date.now()}-${Math.round(
      Math.random() * 100000
    )}`;
    const fileName = `${filePrix}-${originName}`;
    console.log(fileName);
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    // 파일을 저장할 폴더가 없으면 새로 생성하라
    // 업로드 폴더는 app.js 에서 선언한 uploadPath 값을 참조한다
    console.log(req.uploadPath);
    if (!fs.existsSync(req.uploadPath)) {
      fs.mkdirSync(req.uploadPath);
    }
    cb(null, req.uploadPath);
  },
};
const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage });

router.get("/", async (req, res) => {
  res.json(Hello);
});

router.post(
  "/insert",
  uploadMiddleWare.array("b_images"),
  async (req, res) => {
    const body = req.body;
    // multer MiddleWare 가 파일 관련 데이터를 필터링하고, 처리한 후
    // 관련정보를 req.file 객체에 담아준다
    const files = req.files;
    const bbsDto = JSON.parse(body.bbs);
    console.log("body ", files, bbsDto);

    // files 이미지들 중에서 대표이미지는 첫번째 이미지 이다
    bbsDto.b_image = files[0].filename;
    bbsDto.b_origin_image = files[0].originalname;
    const result = await BBS.create(bbsDto);

    // 이미지 정보 생성 : 대표이지를 제외한 나머지만
    // tbl_files 에 저장하기
    for (let i = 1; i < files.length; i++) {
      const fileDto = {};
      fileDto.f_image = files[i].filename;
      fileDto.f_origin_image = files[i].originalname;
      fileDto.f_bseq = result.b_seq;
      await FILES.create(fileDto);
    }
    res.send("OK");
  }
);

export default router;
