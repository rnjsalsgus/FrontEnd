document.addEventListener("DOMContentLoaded", () => {
  const minus = document.querySelector("#minus-btn");
  const plus = document.querySelector("#plus-btn");
  const quantity = document.querySelector("#quantity");

  // 수량 조절 클릭이벤트
  let count = 1;
  plus.addEventListener("click", (e) => {
    e.currentTarget.textContent;
    quantity.textContent = `${++count}`;
  });
  minus.addEventListener("click", (e) => {
    if (count <= 1) {
      quantity.textContent = count;
    } else {
      quantity.textContent = `${--count}`;
    }
  });
});
