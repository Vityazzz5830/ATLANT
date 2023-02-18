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



/*
document.querySelectorAll('choice-radio').onclick = function checkType(node) {

}

function checkType(node) {
    console.log(node.checked + ' ' + node.id + node.textContent);
}


*/