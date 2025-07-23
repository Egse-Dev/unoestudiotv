
const navbar = document.querySelector('#navbar'); // ID correcto
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener("click", () => {
    navbar.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    navbar.classList.remove("visible");
});


const links = document.querySelectorAll('.navbar-link');


links.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("visible");
  });
});
