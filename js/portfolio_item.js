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
    console.log('HI');
}


ymaps.ready(initMap);
ymaps.ready(newMetka);

$('.portfolio-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: false,
  dots: true,
  autoplay: false
});

$('.portfolio__lookmore-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  fade: false,
  infinite: false,
  dots: false,
  autoplay: false,
  prevArrow: $('.portfolio__lookmore-header-leftbtn'),
  nextArrow: $('.portfolio__lookmore-header-rightbtn'),
   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 359,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   ]
});


const video = document.querySelector('.video');

video.addEventListener('canplay', function(e) {
  this.volume = 0.4;
  this.currentTime = 10;
  this.play();
 });