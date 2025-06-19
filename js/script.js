// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-");
  navMenu.classList.toggle("hidden");
  navMenu.classList.add("dark:bg-dark", "dark:shadow-slate-500");
});

//buat ngembalikan hamburger ketika diklik diluar hamburger
document.addEventListener("click", function (event) {
  const isClickInsideMenu = navMenu.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInsideMenu && !navMenu.classList.contains("hidden")) {
    navMenu.classList.add("hidden");
    hamburger.classList.toggle("hamburger-active");
  }
});

//atau bisa juga
// window.addEventListener('click',function(e){
//   if(e.targ  et != navMenu && e.target != hamburger){
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle("hidden");
//   }
// });

const accessKey = "QyqGHch-Ff0qDgNUBkfg0LzOJOk3x0PAE1Cm0qqNnWc"; // Ganti dengan Access Key milikmu
const photoGaming = "random?query=gaming&orientation=landscape";
const apiUrlGaming = `https://api.unsplash.com/photos/${photoGaming}&client_id=${accessKey}`;

fetch(apiUrlGaming)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari Unsplash API");
    }
    return response.json();
  })
  .then((data) => {
    const img = document.getElementById("gaming-image");
    img.src = data.urls.regular;
    img.alt = data.alt_description || "Gambar dari Unsplash";
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
    document.getElementById("unsplash-image").alt = "Gagal memuat gambar";
  });

const photoProgrammer = "random?query=programmer&orientation=landscape";
const apiUrlProgrammer = `https://api.unsplash.com/photos/${photoProgrammer}&client_id=${accessKey}`;
fetch(apiUrlProgrammer)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari Unsplash API");
    }
    return response.json();
  })
  .then((data) => {
    const img = document.getElementById("programmer-image");
    img.src = data.urls.regular;
    img.alt = data.alt_description || "Gambar dari Unsplash";
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
    document.getElementById("unsplash-image").alt = "Gagal memuat gambar";
  });


const photoKeyboard = "random?query=mechanicalkeyboard&orientation=landscape";
const apiUrlKeyboard = `https://api.unsplash.com/photos/${photoKeyboard}&client_id=${accessKey}`;
fetch(apiUrlKeyboard)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari Unsplash API");
    }
    return response.json();
  })
  .then((data) => {
    const img = document.getElementById("mechanical-image");
    img.src = data.urls.regular;
    img.alt = data.alt_description || "Gambar dari Unsplash";
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
    document.getElementById("unsplash-image").alt = "Gagal memuat gambar";
  });

function web1() {
  location.href = "https://project-nime.vercel.app/";
}
function web2() {
  location.href = "https://roy-cleaner.vercel.app/";
}

// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const scroll = document.querySelector("#scroll");
  const nav = document.querySelector("#nav-menu");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    scroll.classList.remove("hidden");
    scroll.classList.add("flex");
    nav.classList.add("navHam");
  } else {
    header.classList.remove("navbar-fixed");
    scroll.classList.add("hidden");
    scroll.classList.add("flex");
    nav.classList.remove("navHam");
  }
};

//scroll ke atas
function back() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//darkmode
const dark = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

dark.addEventListener("click", function (e) {
  if (dark.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else if (!dark.checked) {
    html.classList.remove("dark");
    localStorage.theme = "Gak dark ";
  }
});

//posisi toggle buat darkmode kalo refresh
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  dark.checked = true;
} else {
  dark.checked = false;
}

//hapus notif sukses
function removeSukses() {
  var sukses = document.getElementById("notif-sukses");
  sukses.classList.toggle("hidden");
}

//hapus notif error
function removeError() {
  var gagal = document.getElementById("notif-gagal");
  gagal.classList.toggle("hidden");
}

// form contact
const scriptURL = "https://script.google.com/macros/s/AKfycbzwA8E-o3WUa5Efo5T-h7Deop8TLS6XCmPYUypdTf9Wm8XeksS6Qj9ymxGDMHdOknS6/exec";

const form = document.forms["form-contact"];
const btnKirim = document.querySelector(".btn-kirim");
const loading = document.querySelector("#loading");
const notifSukses = document.querySelector("#notif-sukses");
const notifGagal = document.querySelector("#notif-gagal");
const hapusNotif1 = document.querySelector("hapus-notif1");
const hapusNotif2 = document.querySelector("hapus-notif2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // munculkan loading
  loading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  notifSukses.classList.add("hidden");
  notifGagal.classList.add("hidden");

  // Mendapatkan nilai dari input
  var formData = new FormData(form);
  var name = formData.get("nama");
  var email = formData.get("email");
  var message = formData.get("pesan");

  //menangkap isi inputan
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Mohon isi semua kolom!");
    loading.classList.toggle("hidden");
    btnKirim.classList.toggle("hidden");
    return; // Menghentikan pengiriman formulir jika ada input kosong
  }

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      loading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      notifSukses.classList.toggle("hidden");
      form.reset();
    })

    .catch((error) => {
      loading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      notifGagal.classList.toggle("hidden");
      console.log(error);
      form.reset();
    });
});
