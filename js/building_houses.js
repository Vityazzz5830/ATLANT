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
       elemankviz.setAttribute("data-micromodal-close", "");
    }
      
   } else {
       elemankviz.setAttribute("disabled", true);
       elemankviz.removeAttribute("data-micromodal-close");
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
       elemankviz.setAttribute("data-micromodal-close", "");
    }
      
   } else {
       elemankviz.setAttribute("disabled", true);
       elemankviz.removeAttribute("data-micromodal-close");
   }

    checkboxelemankviz.addEventListener('change', function() {
        if (checkboxelemankviz.checked) {
          if (inpAkviz.value && inpBkviz.value != '') {
            elemankviz.removeAttribute("disabled");
              elemankviz.setAttribute("data-micromodal-close", "");
        }
        else {
          elemankviz.setAttribute("disabled", true);
          elemankviz.removeAttribute("data-micromodal-close");
        } 
        }
});
});