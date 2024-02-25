const toggle = document.querySelector(".darkMode");
const siang = document.querySelector(".bxs-sun");
const malam = document.querySelector(".bxs-moon");

siang.style.display = "none";

toggle.addEventListener("click", function () {
  document.body.classList.toggle("white-theme");
  if (document.body.classList.contains("white-theme")) {
    siang.style.display = "block";
    malam.style.display = "none";
  } else {
    malam.style.display = "block";
    siang.style.display = "none";
  }
});
