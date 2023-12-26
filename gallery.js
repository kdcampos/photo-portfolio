/* open lightbox */

function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("nav").style.display = "none";
  document.body.style.overflow = 'hidden';
}

/* close lightbox */

document.getElementById("close").onclick = function() {closeModal()};

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById( "nav").style.display = "block";
  document.body.style.overflow = 'visible';
}

/* slides */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}