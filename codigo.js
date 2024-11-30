let prevScrollPos = window.pageYOffset;  // Posición de scroll previa
const navbar = document.querySelector('.navbar');  // Barra de navegación
const navbarHeight = navbar.offsetHeight;  // Altura de la barra de navegación

// Evento de desplazamiento
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;  // Posición de scroll actual

    // Si el usuario está subiendo, muestra la barra
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";  // Muestra la barra en la parte superior
        navbar.style.bottom = "auto";  // Asegura que no se mueva al fondo en pantallas grandes
    } else {
        // Si el usuario está bajando, oculta la barra
        navbar.style.top = `-${navbarHeight}px`;  // La barra se oculta al subirla hacia arriba
        navbar.style.bottom = "auto";  // Evita que la barra se mueva al fondo en móviles
    }

    // Actualiza la posición previa de desplazamiento
    prevScrollPos = currentScrollPos;
};
