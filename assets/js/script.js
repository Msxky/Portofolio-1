// // MENU NAVBAR
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// PLAY AUDIO BTN
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

// CURSOR
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const cursor3 = document.querySelector(".cursor3");
var timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  cursor.style.display = "block";
  cursor2.style.display = "block";
  cursor3.style.display = "block";

  cursor2.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 500, fill: "forwards" }
  );

  cursor3.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 2000, fill: "forwards" }
  );

  document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
    cursor2.style.display = "none";
    cursor3.style.display = "none";
  });

  function mouseStop() {
    cursor.style.display = "none";
    cursor2.style.display = "none";
    cursor3.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStop, 2000);
});
