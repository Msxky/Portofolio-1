let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function btnAbout() {
  const containerAboutHidden = document.querySelector(".containerAboutHidden");
  const btnAbout = document.getElementById("btnAbout");
  const promptInput = prompt("Secret Key!");
  const key = 123;

  if (promptInput == key) {
    containerAboutHidden.style.display = "block";
    btnAbout.style.color = "var(--warna-text)";
    btnAbout.style.background = "var(--warna-utama)";
    btnAbout.style.borderRadius = "5px";
    btnAbout.textContent = "Scroll Down⬇";
  } else {
    alert("Secret Key Invalid");
  }
}

document.getElementById("sd").textContent =
  "SD N 03 Koto Baru Simalanggang (2010 - 2016)";
document.getElementById("smp").textContent =
  "SMP N 1 Kec. Payakumbuh (2016 - 2019)";
document.getElementById("smk").textContent =
  "SMK N 2 Payakumbuh, Otomasi insdustri Program Jurusan 4 Tahun (2019 - 2023)";
document.getElementById("magangCaption").textContent =
  "Magang di PT Semen Padang Bagian otomasi program leader PLC (Programmable Logic Controller) dan sistem kelistrikan dasar selama (6 Bulan) bersertifikat.";
