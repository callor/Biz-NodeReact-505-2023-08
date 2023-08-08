document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav.main");
  nav?.addEventListener("click", (e) => {
    const navItem = e.target;
    const className = navItem.className;

    if (navItem.tagName === "LI") {
      // className 이 home 이면 URL = "/"
      // 아니면 URL = className 을 실행
      const URL = (className === "home" && "/") || `/${className}`;
      document.location.href = URL;
    }
  });
});
