import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";

const initModels = (sequelize) => {
  // 모델 생성
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  /**
   * tbl_bbs 와 tbl_files 테이블은 1:N 의 관계가 설정되어 있다
   * sequelize 에서 1:N Association 관계가 설정되어 있을때
   * 그 설정을 model 에 미리 정해 주무로서 SELECT JOIN 이 매우 쉽게
   * 구현될수 있다
   */
  tbl_bbs.hasMany(tbl_files, { as: "F_FILES", foreignKey: "f_bseq" });
  tbl_files.belongsTo(tbl_bbs, {
    as: "F_BBS",
    foreignKey: "f_bseq",
  });

  // 다른 곳에서 model 을 사용할수 있도록 export 준비
  return {
    tbl_bbs,
    tbl_files,
  };
};

export default initModels;
