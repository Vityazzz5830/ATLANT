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

/* $("#mark_active").trigger("click");*/

const buttonminus = document.querySelector('.keramsit__item-minus');
const buttonplus = document.querySelector('.keramsit__item-plus');



function updateMinus(e) {
  buttonminus.nextElementSibling.stepDown();
  var price = document.getElementById('price').innerHTML
var count = document.getElementById('imp_num').value

var priceint = Number(price);
var countint = Number(count);

var total = priceint*countint;

var element = document.getElementById("total__summ");
element.innerHTML = total;
}

buttonminus.addEventListener('click', updateMinus);


/* ----------Калькулятор цены------------------*/
function updatePlus(e) {
	buttonplus.previousElementSibling.stepUp();

	var price = document.getElementById('price').innerHTML;
	var count = document.getElementById('imp_num').value;
	var priceint = Number(price);
	var countint = Number(count);

	var total = priceint*countint;

	var element = document.getElementById("total__summ");
	element.innerHTML = total;
}
 
buttonplus.addEventListener('click', updatePlus);    

document.addEventListener("DOMContentLoaded", ready);
	function ready() {
  		var price = document.getElementById('price').innerHTML;
		var count = document.getElementById('imp_num').value;
		var priceint = Number(price);
		var countint = Number(count);

		var total = priceint*countint;

		var element = document.getElementById("total__summ");
		element.innerHTML = total;
}

const input = document.getElementById("imp_num");

input.addEventListener('change', () => {
	var price = document.getElementById('price').innerHTML;
		var count = document.getElementById('imp_num').value;
		var priceint = Number(price);
		var countint = Number(count);

		var total = priceint*countint;

		var element = document.getElementById("total__summ");
		element.innerHTML = total;
});   

/* ----------Конец Калькулятора цены------------------*/

$('.keramsit__item-leftpart-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: false,
  dots: true,
  autoplay: true
});


/*-----------------------------------------------*/
/*
const userName = document.getElementById('name');
const userPhone = document.getElementById('phone');
const userEmail = document.getElementById('email');
const userArea = document.getElementById('textarea');
const button123 = document.getElementById('submit-button contacts__request-leftpart-sendbutton');

function checkForm() {
 button123.disabled = userName.value === '' || userPhone.value === '' || userEmail === '' || userArea === '';
}

checkForm();
*/
/*-----------------------------------------------*/



