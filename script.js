// selecciona todas las cajas
const cajas = document.querySelectorAll(
  ".logo, .icon, .search, .btn, .mini, .card, .thumb, .content, .foot-card"
);

cajas.forEach(caja => {

  caja.addEventListener("click", () => {

    // reinicia animación
    caja.classList.remove("rebote");
    void caja.offsetWidth;

    // agrega rebote
    caja.classList.add("rebote");

  });

});style.css