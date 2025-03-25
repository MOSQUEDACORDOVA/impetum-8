document.addEventListener("DOMContentLoaded", function () {
  fetch('./components/dependenciasGlobales.html')
    .then(response => response.text())
    .then(data => {
      document.head.innerHTML += data;
    });

  fetch('./components/itemsMenuMovil.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('itemsMenuMovil').innerHTML = data;
    });

  fetch('./components/itemsRedesMenuMovil.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('itemsRedesMenuMovil').innerHTML = data;
    });

  fetch('./components/itemsMenuFooter.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('itemsMenuFooter').innerHTML = data;
    });
    
  fetch('./components/itemsRedesFooter.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('itemsRedesFooter').innerHTML = data;
    });

});