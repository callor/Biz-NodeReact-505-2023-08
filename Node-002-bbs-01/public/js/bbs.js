document.addEventListener("DOMContentLoaded", () => {
  const btn_insert = document.querySelector("button.bbs.insert");
  btn_insert?.addEventListener("click", () => {
    // GET /bbs/insert 요청하기
    document.location.href = "/bbs/insert";
  });
});
