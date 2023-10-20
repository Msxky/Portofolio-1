// // BTN-MENU
 let menuIcon = document.querySelector("#menu-icon");
 let navbar = document.querySelector(".navbar");

 menuIcon.onclick = () => {
 menuIcon.classList.toggle("bx-x");
 navbar.classList.toggle("active");
 };

// // HAPUS ICON MENU SETELAH DI KLIK
// menuIcon.classList.remove("bx-x");
// navbar.classList.remove("active");

// PLAY AUDIO BTN
// var audio = new Audio("../audionya mine.mp3");
const btn = document.getElementById("btn");
const audio = document.getElementById("audio");

function trigger() {
  if (audio.paused) {
    btn.style.cursor = "pointer";
    audio.play();
    btn.innerHTML = "PAUSE";
    btn.style.color = "#FFFFFF";
    btn.style.backgroundColor = "#111";
    btn.style.border = " 2px solid #FFFFFF";
  } else {
    audio.pause();
    btn.textContent = "PLAY";
    btn.style.color = "#111";
    btn.style.backgroundColor = "#FFFFFF";
    btn.style.border = " 2px solid var(--warna-utama)";
  }
}
