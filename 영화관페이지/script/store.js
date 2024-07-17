document.addEventListener("DOMContentLoaded", () => {
  // 콤보이미지 삽입
  const combo = document.querySelector("#combo-container");
  const comboImg = combo.querySelectorAll(".menu-img");
  for (let i = 1; i <= 4; i++) {
    comboImg[i - 1].style.backgroundImage = `url('../img/combo${i}.jpg')`;
    comboImg[i - 1].style.backgroundSize = "300px 300px";
    comboImg[i - 1].style.backgroundRepeat = "no-repeat";
  }
  //팝콘 이미지 삽입
  const popcorn = document.querySelector("#popcorn-container");
  const popcornImg = popcorn.querySelectorAll(".menu-img");
  for (let i = 1; i <= 8; i++) {
    popcornImg[i - 1].style.backgroundImage = `url('../img/popcorn${i}.jpg')`;
    popcornImg[i - 1].style.backgroundSize = "300px 300px";
    popcornImg[i - 1].style.backgroundRepeat = "no-repeat";
  }
  //음료 이미지 삽입
  const beverage = document.querySelector("#beverage-container");
  const beverageImg = beverage.querySelectorAll(".menu-img");
  for (let i = 1; i <= 7; i++) {
    beverageImg[i - 1].style.backgroundImage = `url('../img/beverage${i}.jpg')`;
    beverageImg[i - 1].style.backgroundSize = "300px 300px";
    beverageImg[i - 1].style.backgroundRepeat = "no-repeat";
  }
  //스낵 이미지 삽입
  const snack = document.querySelector("#snack-container");
  const snackImg = snack.querySelectorAll(".menu-img");
  for (let i = 1; i <= 3; i++) {
    snackImg[i - 1].style.backgroundImage = `url('../img/snack${i}.jpg')`;
    snackImg[i - 1].style.backgroundSize = "300px 300px";
    snackImg[i - 1].style.backgroundRepeat = "no-repeat";
  }
  // 클릭 시 탭 메뉴 전환
  const menu = document.querySelectorAll("#store-menu li");
  const container = document.querySelectorAll(".container");

  menu.forEach((e, idx) => {
    e.addEventListener("click", () => {
      for (let i = 0; i <= 3; i++) {
        container[idx].style.display = "block";
        if (container[i] !== container[idx]) {
          container[i].style.display = "none";
        }
      }
    });
  });
}); //
