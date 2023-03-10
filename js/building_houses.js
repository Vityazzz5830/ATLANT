function initMap (){
    map = new ymaps.Map("yandexmap", {

    center: [56.778159, 54.138875],
    zoom: 17,
    controls: []
    });
}

function newMetka (){
    var myPlacemark = new ymaps.Placemark([56.778335, 54.138852], {}, {
    preset: 'islands#redPocketCircleIcon'
});
    map.geoObjects.add(myPlacemark); 
}

ymaps.ready(initMap);
ymaps.ready(newMetka);

$('.whykeramsit-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  fade: false,
  infinite: false,
  dots: false,
  autoplay: false,
  prevArrow: $('.whykeramsit-header-leftbtn'),
  nextArrow: $('.whykeramsit-header-rightbtn'),
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick"
    },
   ]
});

/*
var elemantwo = document.getElementsByClassName('submit-button-kviz')[0];
elemantwo.setAttribute("disabled", true);
var checkboxtwo = document.querySelector('.custom-checkbox-kvizclass'); 

checkboxtwo.addEventListener('change', function() {
   if (checkboxtwo.checked) {
       elemantwo.removeAttribute("disabled");
   } else {
       elemantwo.setAttribute("disabled", true);
   }
});

window.addEventListener('DOMContentLoaded', function () {
      if (checkboxtwo.checked) {
         elemantwo.removeAttribute("disabled");
      } 

      else {
         elemantwo.setAttribute("disabled", true);
      }
});
*/

//КВИЗ ПРОВЕРКА ПОЛЕЙ
var elemankviz = document.getElementsByClassName('submit-button-kviz')[0];
elemankviz.setAttribute("disabled", true);
var checkboxelemankviz = document.querySelector('.custom-checkbox-kvizclass');    
var inpAkviz = document.getElementById("name_inkviz");
var inpBkviz = document.getElementById("phone_inkviz");
console.log(inpAkviz.value);
console.log(inpBkviz.value);

inpAkviz.addEventListener('change', function() {
   if (inpAkviz.value == '') {
      elemankviz.setAttribute("disabled", true);
   }
});

inpBkviz.addEventListener('change', function() {
   if (inpBkviz.value == '') {
      elemankviz.setAttribute("disabled", true);
   }
});

checkboxelemankviz.addEventListener('change', function() {
   if (checkboxelemankviz.checked) {
    if (inpAkviz.value && inpBkviz.value != '') {
       elemankviz.removeAttribute("disabled");
       /*elemankviz.setAttribute("data-micromodal-close", "");*/
    }
      
   } else {
       elemankviz.setAttribute("disabled", true);
       /*elemankviz.removeAttribute("data-micromodal-close");*/
   }
});



//КВИЗ ПРОВЕРКА ПОЛЕЙ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
document.addEventListener("DOMContentLoaded", function () {
    var elemankviz = document.getElementsByClassName('submit-button-kviz')[0];
    elemankviz.setAttribute("disabled", true);
    var checkboxelemankviz = document.querySelector('.custom-checkbox-kvizclass');    
    var inpAkviz = document.getElementById("name_inkviz");
    var inpBkviz = document.getElementById("phone_inkviz");
    console.log(inpAkviz.value);
    console.log(inpBkviz.value);

    inpAkviz.addEventListener('change', function() {
      if (inpAkviz.value == '') {
          elemankviz.setAttribute("disabled", true);

      }
    });

    inpBkviz.addEventListener('change', function() {
      if (inpBkviz.value == '') {
          elemankviz.setAttribute("disabled", true);
      }
    });


    if (checkboxelemankviz.checked) {
    if (inpAkviz.value && inpBkviz.value != '') {
       elemankviz.removeAttribute("disabled");
       /*elemankviz.setAttribute("data-micromodal-close", "");*/
    }
      
   } else {
       elemankviz.setAttribute("disabled", true);
       /*elemankviz.removeAttribute("data-micromodal-close");*/
   }

    checkboxelemankviz.addEventListener('change', function() {
        if (checkboxelemankviz.checked) {
          if (inpAkviz.value && inpBkviz.value != '') {
            elemankviz.removeAttribute("disabled");
              /*elemankviz.setAttribute("data-micromodal-close", "");*/
        }
        else {
          elemankviz.setAttribute("disabled", true);
          /*elemankviz.removeAttribute("data-micromodal-close");*/
        } 
        }
});
});




/*-----------КВИЗ ПЕРЕХОДЫ----------------------*/

var kvizsl1 = document.getElementsByClassName("kviz_slide1")[0];
var kvizsl2 = document.getElementsByClassName("kviz_slide2")[0];
var kvizsl3 = document.getElementsByClassName("kviz_slide3")[0];
var kvizsl4 = document.getElementsByClassName("kviz_slide4")[0];
var kvizsl5 = document.getElementsByClassName("kviz_slide5")[0];
var kvizsl6 = document.getElementsByClassName("kviz_slide6")[0];
var kvizsl7 = document.getElementsByClassName("kviz_slide7")[0];

var kvizretsl1 = document.getElementsByClassName("kvizretsl1")[0];
var kvizretsl2 = document.getElementsByClassName("kvizretsl2")[0];
var kvizretsl3 = document.getElementsByClassName("kvizretsl3")[0];
var kvizretsl4 = document.getElementsByClassName("kvizretsl4")[0];
var kvizretsl5 = document.getElementsByClassName("kvizretsl5")[0];
var kvizretsl6 = document.getElementsByClassName("kvizretsl6")[0];

var kvizsl1btn = document.getElementById('kviz_slide1-btn-next');
var kvizsl2btn = document.getElementById('kviz_slide2-btn-next');
var kvizsl3btn = document.getElementById('kviz_slide3-btn-next');
var kvizsl4btn = document.getElementById('kviz_slide4-btn-next');
var kvizsl5btn = document.getElementById('kviz_slide5-btn-next');
var kvizsl6btn = document.getElementById('kviz_slide6-btn-next');

var close_kviz1 = document.getElementsByClassName("modal__close1")[0];
var close_kviz2 = document.getElementsByClassName("modal__close2")[0];
var close_kviz3 = document.getElementsByClassName("modal__close3")[0];
var close_kviz4 = document.getElementsByClassName("modal__close4")[0];
var close_kviz5 = document.getElementsByClassName("modal__close5")[0];
var close_kviz6 = document.getElementsByClassName("modal__close6")[0];
var close_kviz7 = document.getElementsByClassName("modal__close7")[0];

var body1 = document.getElementsByTagName('body')[0]

//Кнопки закрытия
close_kviz1.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('kviz_slide1');
    body1.setAttribute('style', 'overflow-y: scroll');
});

close_kviz2.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('kviz_slide2');
    body1.setAttribute('style', 'overflow-y: scroll');
});

close_kviz3.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('kviz_slide3');
    body1.setAttribute('style', 'overflow-y: scroll');
});

close_kviz4.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('kviz_slide4');
   body1.setAttribute('style', 'overflow-y: scroll');
});

close_kviz5.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('kviz_slide5');
    body1.setAttribute('style', 'overflow-y: scroll');
});

close_kviz6.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('kviz_slide6');
   body1.setAttribute('style', 'overflow-y: scroll');
});

close_kviz7.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('kviz_slide7');
    body1.setAttribute('style', 'overflow-y: scroll');
});


//Кнопки перехода
kvizsl1btn.addEventListener("click", function () {
  event.preventDefault(); 
    kvizsl1.classList.add('animate');
     kvizsl2.classList.add('animate');
    MicroModal.show('kviz_slide2');
    MicroModal.close('kviz_slide1');
});

kvizsl2btn.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl2.classList.add('animate');
   kvizsl3.classList.add('animate');
    MicroModal.show('kviz_slide3');
    MicroModal.close('kviz_slide2');
});

kvizsl3btn.addEventListener("click", function () {
  event.preventDefault();
  kvizsl3.classList.add('animate'); 
   kvizsl4.classList.add('animate');
    MicroModal.show('kviz_slide4');
    MicroModal.close('kviz_slide3');
});

kvizsl4btn.addEventListener("click", function () {
  event.preventDefault();
  kvizsl4.classList.add('animate'); 
   kvizsl5.classList.add('animate');
    MicroModal.show('kviz_slide5');
    MicroModal.close('kviz_slide4');
});

kvizsl5btn.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl5.classList.add('animate');
   kvizsl6.classList.add('animate');
    MicroModal.show('kviz_slide6');
    MicroModal.close('kviz_slide5');
});

kvizsl6btn.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl6.classList.add('animate');
   kvizsl7.classList.add('animate');
    MicroModal.show('kviz_slide7');
    MicroModal.close('kviz_slide6');
});

//Кнопки возврата
kvizretsl1.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl1.classList.add('animate');
    MicroModal.close('kviz_slide1');
});

kvizretsl2.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl2.classList.add('animate');
    MicroModal.close('kviz_slide2');
    MicroModal.show('kviz_slide1');
});

kvizretsl3.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl3.classList.add('animate');
    MicroModal.close('kviz_slide3');
     MicroModal.show('kviz_slide2');
});

kvizretsl4.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl4.classList.add('animate');
    MicroModal.close('kviz_slide4');
     MicroModal.show('kviz_slide3');
});

kvizretsl5.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl5.classList.add('animate');
    MicroModal.close('kviz_slide5');
     MicroModal.show('kviz_slide4');
});

kvizretsl6.addEventListener("click", function () {
  event.preventDefault(); 
  kvizsl6.classList.add('animate');
    MicroModal.close('kviz_slide6');
     MicroModal.show('kviz_slide5');
});