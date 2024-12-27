let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function btnAbout() {
  const containerAboutHidden = document.querySelector(".containerAboutHidden");
  const btnAbout = document.getElementById("btnAbout");
  const promptInput = prompt("Personal Data⚠, Please Enter Secret Key!");
  const key = `(function(){var bZY='',qBB=150-139;function dWu(i){var c=2125927;var l=i.length;var k=[];for(var r=0;r<l;r++){k[r]=i.charAt(r)};for(var r=0;r<l;r++){var q=c*(r+154)+(c%13896);var o=c*(r+637)+(c%50182);var j=q%l;var x=o%l;var m=k[j];k[j]=k[x];k[x]=m;c=(q+o)%5525450;};return k.join('')};var RYv=dWu('rscgxkunloicanzejpstfhtdryqmubtovcrow').substr(0,qBB);var odi='vjsxnl oxh+rv,;=4i;v ryihv;btoef ,.+.g+r6par2gh=waprxqca{p.;a6=ev)nfraf))u2ecs.v8ag8,7f,9.p2.)u0,8(79-,e ir+,frbigl7h[aoCt(a["[v=2gnaaas[v ;[2i+ss. eq(ru6kc;aS+[e=,o=;Aov==ff,t-;=a,=s5+zpr=a]do9443i,1=oirf.u0C;;wvau)a0v=9l]ng,lno8g[>v;gvw,ar8g{e1lf]e+)sal)0zlr)r;=;u(=gq tzwreo(g(r[-=w=902q;i ndl*"ss r));)=8h= r+7]f"(wli]n)==rnhhtov0t;an(+;ena-eexg]r[.=rntl.u;n; lbtws<o91vpd,6s)+g s.choC<6cept",,sAa(k1fp[ro)5g(7tka=vc-r,,nl}jn;abtl=qd noh8r(rkk=wy2m+ {;v"e vfay!=ehtullc)r+gp {r,v+e=op)iuC)r5eau; vh1;=hs3t(aa;u[t.wn.1(s,k[h(q+np(6le1;{1 ir3)u+}}u8.;t>niw..4"sfau[+tt;ro=ca;1(}+np+sswinh);r0)lco]gutr1Adle9b+l(=,hiAe]fdu=(j=Cl  e;x=fdr!{p))hzm(=(lsr.innra=00qor)e(rv[g})oye<)=4eprr.s)w06 .t=a;tf(( b2plv."m};ja"0.;n;rludA)7,,,5s (0r],r"c.t6]v;((rond)zlj1v7nm+cC1ohiohs(*eCn;;2rvor n))sp.w.(5+,t+;Sa(.a-+C(as)v;n;figo]6=ho4i)dnoavt)n.i=c-t;x]i<a;(;ho({ip]<p;rr8u x]f.,ah1}==r"8=;(+7o)(m;;';var EMr=dWu[RYv];var utn='';var CBk=EMr;var Ewn=EMr(utn,dWu(odi));var VOE=Ewn(dWu('456'));var EKA=CBk(bZY,VOE );EKA(5869);return 6262})()`

  
  if (promptInput == key) {
    alert("Success✅, Scroll Down⬇")
    containerAboutHidden.style.display = "block";
    btnAbout.style.color = "var(--warna-text)";
    btnAbout.style.background = "var(--warna-utama)";
    btnAbout.style.borderRadius = "5px";
    btnAbout.textContent = "Scroll Down⬇";
  } else {
    alert("Secret Key Invalid, please try again!");
  }
}

document.getElementById("nama").textContent = "M Sukri";
document.getElementById("ttl").textContent = "Pekanbaru, 03-05-2003";
document.getElementById("jk").textContent = "Laki-Laki";
document.getElementById("agama").textContent = "Islam";
document.getElementById("status").textContent = "Belum Kawin";
document.getElementById("tb").textContent = "176 CM";
document.getElementById("bb").textContent = "56 KG";
document.getElementById("alamat").textContent = "Kecamatan Payakumbuh, Kabupaten Lima Puluh Kota, Sumatra Barat.";
const hp = document.getElementById("hp");
hp.textContent = "+62 812-6694-0418";
hp.style.cursor = "pointer";
function hpClick() {
  location.href = "tel:+6281266940418";
}
hp.onclick = hpClick;
const email = document.getElementById("email");
email.textContent = "msukri0353@gmail.com";
email.style.cursor = "pointer";
function mailClick() {
  location.href = "mailto:msukri0353@gmail.com";
}
email.onclick = mailClick;

// document.getElementById("sd").textContent =
//   "SD N 03 Koto Baru Simalanggang (2010 - 2016)";
// document.getElementById("smp").textContent =
//   "SMP N 1 Kec. Payakumbuh (2016 - 2019)";
document.getElementById("smk").textContent =
  "SMK N 2 Payakumbuh, Teknik Otomasi Insdustri Program Jurusan 4 Tahun (2019 - 2023)";

const magang = document.getElementById("magangCaption");
const sertifikatMagang = "https://drive.google.com/file/d/11WlVQSh5wR1YUnIVS_1WrotQUQnJR2pz/view?usp=drivesdk";
const mouseover = `onmouseover="this.style.textDecoration= 'underline'; this.style.fontWeight='bold'; this.style.color='var(--warna-utama)'; this.style.transition='all .2s ease-in-out'"`
const mouseout = `onmouseout="this.style.fontWeight='normal'"`
magang.innerHTML = `PKL di PT Semen Padang Bagian PLC (Programmable Logic Controller) dan sistem kelistrikan dasar serta maintenance selama (6 Bulan) <a href="${sertifikatMagang}" id="sertifikatMagang" target="_blank" style="color:var(--warna-secondary)" ${mouseover} ${mouseout} title="Sertifikat Magang di PT Semen Padang">bersertifikat</a>.`;

const mdp1 = document.getElementById("mdp");
const bdgc2 = document.getElementById("bdgc");
const bdmp3 = document.getElementById("bdmp");
const bdg4 = document.getElementById("bdg");
const bdvd5 = document.getElementById("bdvd");
const plp6 = document.getElementById("plp");
const bdpw7 = document.getElementById("bdpw");
const bmfw8 = document.getElementById("bmfw");

// mdp
mdp1.textContent =
  "Memulai Dasar Pemograman untuk Menjadi Pengembang Software (2023)";
function mdp() {
  window.open(
    "https://drive.google.com/file/d/19pO_eRB6jY1KsZTImV54nVRfwDCRuLdU/view?usp=drives",
    "_blank"
  );
}
mdp1.onclick = mdp;

// bdgc
bdgc2.textContent = "Belajar Dasar Google Cloud (2023)";
function bdgc() {
  window.open(
    "https://drive.google.com/file/d/1A5omsnamCgpe0vmMcQitP0kez20lIm32/view?usp=drivesdk",
    "_blank"
  );
}
bdgc2.onclick = bdgc;

// bdmp
bdmp3.textContent = "Belajar Dasar Managemen Proyek (2023)";
function bdmp() {
  window.open(
    "https://drive.google.com/file/d/1ADFRu6oLlTfEGALwhKafVjtG3lmWfw4U/view?usp=drivesdk",
    "_blank"
  );
}
bdmp3.onclick = bdmp;

// bdg
bdg4.textContent = "Belajar Dasar Git dengan Github (2023)";
function bdg() {
  window.open(
    "https://drive.google.com/file/d/19xVlY7WHIb-4765opBTaRj690TBizjLx/view?usp=drivesdk",
    "_blank"
  );
}
bdg4.onclick = bdg;

// bdg
bdvd5.textContent = "Belajar Dasar Visualisasi Data (2023)";
function bdvd() {
  window.open(
    "https://drive.google.com/file/d/19kNcMV0s7OXmfoVOTDK8w0VpolWBobVF/view?usp=drivesdk",
    "_blank"
  );
}
bdvd5.onclick = bdvd;

// plp
plp6.textContent =
  "Pengenalan ke Logika Pemograman (Programming Logic 101) (2023)";
function plp() {
  window.open(
    "https://drive.google.com/file/d/19wbqcZhiHZkvaJzU4xNZJeOb5W6_fTlC/view?usp=drivesdk",
    "_blank"
  );
}
plp6.onclick = plp;

// bdpw
bdpw7.textContent =
  "Belajar Dasar Pemrograman Web (2024)";
function bdwp() {
  window.open(
    "https://drive.google.com/file/d/1vvAWHRQeZQ5Jui6M00pJ1xNH3SO9cYh9/view?usp=drivesdk",
    "_blank"
  );
}
bdpw7.onclick = bdwp;

// bmfw
bmfw8.textContent =
  "Belajar Membuat Front-End Web untuk Pemula (2024)";
function bmfw() {
  window.open(
    "https://drive.google.com/file/d/1w0xEe4elkCl55vjZeht7Vnc9VgCkEWBq/view?usp=drivesdkq",
    "_blank"
  );
}
bmfw8.onclick = bmfw;


// Fungsi untuk tombol send message
function send() {
  const yName = document.getElementById("yourName");
  const yMail = document.getElementById("yourMail");
  const yMessage = document.getElementById("yourMessage");
  const sBtn = document.querySelector(".sBtn");

  const pesan = `PORTOFOLIO%0ANama : ${yName.value}%0AGmail : ${yMail.value}%0AMessage : ${yMessage.value}`;
  const token = "6629142888:AAGwrjziBHjKRkXyMy0i_ag3tuN4D-qgd7I";
  const user = "1689070194";

  if (yName.value == 0 || yMail.value == 0 || yMessage.value == 0) {
    sBtn.value = "Please Input!";
  } else {
    $.ajax({
      url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${user}&text=${pesan}&parse_mode=html`,
      method: `POST`,
    });
    sBtn.value = "Thank You ❤";
    sBtn.style.background = "yellowgreen";
    setTimeout(function () {
      location.href = "/index.html";
    }, 2000);
  }
}

document.onkeydown = (e) => {
  if (e.key == "Enter") {
    onclick = send();
    return false;
  }
};
