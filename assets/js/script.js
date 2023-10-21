let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .image-container .image');

searchBox.oninput = () => {
   images.forEach(hide => hide.style.display = 'none');
   let value = searchBox.value;
   images.forEach(filter => {
      let title = filter.getAttribute('data-title');
      if (value == title) {
         filter.style.display = 'block';
      }
      if (searchBox.value == '') {
         filter.style.display = 'block';
      }
   });
};
// MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
   btnMenuClose = document.getElementById("btnMenuClose"),
   menuResponsive = document.getElementById("menuBar"),
   enlaces = document.getElementById("enlaces");

// Click abrir
btnMenuOpen.addEventListener("click", function () {
   menuResponsive.classList.add("active");
});

// Click cerrar
btnMenuClose.addEventListener("click", function () {
   menuResponsive.classList.remove("active");
});

// Cerrar menu con elementos de enlace
enlaces.addEventListener("click", function () {
   menuResponsive.style.transitionDelay = "0.5s";
   menuResponsive.classList.remove("active");
});
// BOTON SCROLL TOP
var btnTop = document.getElementById("btn-top"),
   logo = document.getElementById("logo");