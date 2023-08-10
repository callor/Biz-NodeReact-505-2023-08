import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";

const initModels = (sequelize) => {
  // 모델 이름 설정
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  // 다른 곳에서 model 을 사용할수 있도록 export 준비
  return {
    tbl_bbs,
    tbl_files,
  };
};

export default initModels;
