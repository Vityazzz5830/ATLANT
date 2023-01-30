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