


function showSlides() {
  var slideIndex = 0;
  var i;
  var slides = document.getElementsByName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
var slides = document.getElementsByName("mySlides");

console.log(slides)
showSlides();