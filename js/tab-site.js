window.addEventListener("load", () => {
  const tabLinks = document.querySelectorAll(".tab-nav li a");
  const tabitems = document.querySelectorAll(".tabitem");
  tabLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // 1. 메뉴 active 제거
      tabLinks.forEach((tl) => tl.classList.remove("active"));
      //   2. 내용 active 제거
      tabitems.forEach((ti) => ti.classList.remove("active"));
      //   3. 클릭한 메뉴 active add
      link.classList.add("active");
      tabitems[index].classList.add("active");
      //   4. 연결 된 콘텐츠 찾기
      const linkTarget = document.querySelector(link.getAttribute("href"));
      linkTarget.classList.add("active")
    });
  });
});
