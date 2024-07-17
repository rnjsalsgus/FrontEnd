document.addEventListener("DOMContentLoaded", () => {
  // 탭 메뉴 클릭시 다른 탭으로 전환
  const categoris = document.querySelectorAll("#categori li");
  const table = document.querySelectorAll("table tr");

  categoris.forEach((e, idx) => {
    e.addEventListener("click", () => {
      for (let i = 0; i <= 2; i++) {
        table[idx].style.display = "block";
        if (table[i] !== table[idx]) {
          table[i].style.display = "none";
        }
      }
    });
  });

  //클릭 이벤트 선택된 탭 아래 border추가
  categoris.forEach((e, idx) => {
    e.addEventListener("click", () => {
      for (let i = 0; i <= 2; i++) {
        categoris[idx].style.fontWeight = "bold";
        categoris[idx].style.borderBottom = "2px solid black";
        if (categoris[i] !== categoris[idx]) {
          categoris[i].style.fontWeight = "normal";
          categoris[i].style.borderBottom = "none";
        }
      }
    });
  });
});
