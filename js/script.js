// Mengambil elemen navbar dengan class "header navbar"
let navbar = document.querySelector(".header .navbar");

// Memberikan event click pada tombol dengan id "menu-btn"
document.querySelector("#menu-btn").onclick = () => {
  // Tambahkan atau hapus class "active" pada elemen navbar
  navbar.classList.toggle("active");
};

// Memberikan event saat melakukan scroll pada halaman
window.onscroll = () => {
  // Hapus class "active" dari elemen navbar
  navbar.classList.remove("active");
};

// Membuat instance dari objek Swiper untuk slider review
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
