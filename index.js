// Establecer el índice de la diapositiva en 1
let slideIndex = 1;

// Mostrar las diapositivas
showSlides(slideIndex);

// Controles de siguiente/anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de imagen en miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Presentación de diapositivas automática
function autoSlides() {
  plusSlides(1);
}

// Establecer intervalo para llamar a autoSlides cada 3000 milisegundos (ajustar según sea necesario)
setInterval(autoSlides, 5000);

// Función para mostrar las diapositivas
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Verificar límites de índice
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Ocultar todas las diapositivas
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Quitar la clase "activeDot" de todos los puntos de navegación
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  
  // Mostrar la diapositiva actual y resaltar el punto de navegación correspondiente
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeDot";
}
