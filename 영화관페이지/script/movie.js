document.addEventListener("DOMContentLoaded", () => {
  //갤러리 이미지 삽입
  const inwrap = document.querySelector("#inwrap");
  const inbox = document.querySelectorAll(".inbox");

  for (let i = 1; i <= 5; i++) {
    inbox[i - 1].style.backgroundImage = `url('../img/movie-img${i}.jpg')`;
    inbox[i - 1].style.backgroundSize = "100% 500px";
    inbox[i - 1].style.backgroundRepeat = "no-repeat";
  }
  // 영화 이미지 삽입
  const movieImg = document.querySelectorAll(".movie-img");
  for (let i = 1; i <= 8; i++) {
    movieImg[i - 1].style.backgroundImage = `url('../img/movie${i}.jpg')`;
    movieImg[i - 1].style.backgroundSize = "100% 250px";
    movieImg[i - 1].style.backgroundRepeat = "no-repeat";
  }

  // 이벤트 삽입
  // setInterval을 이용에 이미지 전환
  const moveGallery = setInterval(() => {
    inwrap.appendChild(inwrap.firstChild);
  }, 1500);

  // 클릭 이벤트 좌우 화살표 클릭 시 이미지 전환
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  prev.addEventListener("click", () => {
    clearInterval(moveGallery);
    inwrap.insertBefore(inwrap.lastChild, inwrap.firstChild);
  });
  next.addEventListener("click", () => {
    clearInterval(moveGallery);
    inwrap.appendChild(inwrap.firstChild);
  });

  // 마우스 이벤트
  const movieWraps = document.querySelectorAll(".movie-wrap");
  const reserveBoxs = document.querySelectorAll(".reserve");
  for (let i = 0; i <= 8; i++) {
    movieWraps[i].addEventListener("mouseover", () => {
      reserveBoxs[i].style.display = "block";
    });
    movieWraps[i].addEventListener("mouseout", () => {
      reserveBoxs[i].style.display = "none";
    });
  }
}); //
