function openFoodModal() {
  document.getElementById('myFoodModal').style.display = "block";
}

function closeFoodModal() {
  document.getElementById('myFoodModal').style.display = "none";
}

function openDecorationModal() {
  document.getElementById('myDecorationModal').style.display = "block";
}

function closeDecorationModal() {
  document.getElementById('myDecorationModal').style.display = "none";
}

function openWeddingModal() {
  document.getElementById('myWeddingModal').style.display = "block";
}

function closeWeddingModal() {
  document.getElementById('myWeddingModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);
showSlides2(slideIndex);
showSlides3(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function openModal(){
  document.getElementById("myModal").style.display="block";
}

function closeModal(){
  document.getElementById("myModal").style.display="none";
}

function getAllData(){
  var userRef = firebase.database().ref("users/");
  userRef.orderByValue().on("value", function(data){
    data.forEach(function(data) {
      var para = document.createElement("P");
      var demo = document.getElementById("myCarousel3");
      var demo2 = document.getElementById("test");
       var x= document.getElementsByTagName('li');
      var d=document.createElement("LI");
      var y= document.getElementById("test2");
       d.datatarget  = "#myCarousel3";
       d.dataslideto++;
        para.className="item";
        para.innerHTML = data.val().testiment + "<br>" + data.val().name;
        demo2.appendChild(para);
        demo.appendChild(d);
        demo.appendChild(demo2);
        y.appendChild(d);
       });
  });
}
