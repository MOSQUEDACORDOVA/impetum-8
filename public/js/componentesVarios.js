document.addEventListener("DOMContentLoaded", function () {
  fetch('./components/dependenciasGlobales.html')
    .then(response => response.text())
    .then(data => {
      document.head.innerHTML += data;
    });



});