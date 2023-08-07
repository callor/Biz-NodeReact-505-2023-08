import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  // view 폴더에 index.pug 라는 파일을 찾아서 Rendering 하여 응답하라
  res.render("index", { title: "callor.com Express" });
});

export default router;
