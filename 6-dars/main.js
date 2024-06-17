let stars = document.querySelectorAll(".star");
let refresh = document.querySelector(".refresh");

stars.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.index == "1") {
      stars[0].style.backgroundColor = "gold";
      stars[1].style.backgroundColor = "grey";
      stars[2].style.backgroundColor = "grey";
      stars[3].style.backgroundColor = "grey";
      stars[4].style.backgroundColor = "grey";
    }
    if (item.dataset.index == "2") {
      stars[0].style.backgroundColor = "gold";
      stars[1].style.backgroundColor = "gold";
      stars[2].style.backgroundColor = "grey";
      stars[3].style.backgroundColor = "grey";
      stars[4].style.backgroundColor = "grey";
    }
    if (item.dataset.index == "3") {
      stars[0].style.backgroundColor = "gold";
      stars[1].style.backgroundColor = "gold";
      stars[2].style.backgroundColor = "gold";
      stars[3].style.backgroundColor = "grey";
      stars[4].style.backgroundColor = "grey";
    }
    if (item.dataset.index == "4") {
      stars[0].style.backgroundColor = "gold";
      stars[1].style.backgroundColor = "gold";
      stars[2].style.backgroundColor = "gold";
      stars[3].style.backgroundColor = "gold";
      stars[4].style.backgroundColor = "grey";
    }
    if (item.dataset.index == "5") {
      stars[0].style.backgroundColor = "gold";
      stars[1].style.backgroundColor = "gold";
      stars[2].style.backgroundColor = "gold";
      stars[3].style.backgroundColor = "gold";
      stars[4].style.backgroundColor = "gold";
    }
  });
});
refresh.addEventListener("click", () => {
  stars[0].style.backgroundColor = "grey";
  stars[1].style.backgroundColor = "grey";
  stars[2].style.backgroundColor = "grey";
  stars[3].style.backgroundColor = "grey";
  stars[4].style.backgroundColor = "grey";
});
