function showPreloader() {
  document.getElementById("preloader").style.display = "block";
}

function hidePreloader() {
  document.getElementById("preloader").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const extraMenu = document.querySelector('.extra-menu');
  const extraSubmenu = document.querySelector('.extra-submenu');

  extraMenu.addEventListener('click', function () {
    // Toggle the visibility of the submenu
    extraSubmenu.style.display = extraSubmenu.style.display === 'block' ? 'none' : 'block';
  });
});
