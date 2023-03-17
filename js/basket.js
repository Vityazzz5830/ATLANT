/*document.addEventListener("DOMContentLoaded", ready);
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
*/
/* ----------Конец Калькулятора цены------------------*/



let btn = document.querySelectorAll('.backet__menu-list-item-summary-input');
let inputnum = document.querySelectorAll('.input_num');
let element = document.querySelectorAll(".total__summ");

for (let i=0; i<btn.length; i++){

	//Калькулятор цены при загрузке страницы
	let priceone = btn[i].previousElementSibling.children[0].firstChild.innerText;
	let count = btn[i].children[1].value;
	let totalsumm = btn[i].nextElementSibling.children[0].firstChild;
	//Преобразования в int
	let priceint = Number(priceone);
	let countint = Number(count);

	let div = priceint*countint;
	console.log(div);
	//Вывод значений в консоль
	/*console.log('Цена ', priceint);
	console.log('Количество ', countint);
	console.log('Сумма', div);*/

	element.innerText = div;
    document.querySelector('.total__summ').innerHTML = element.innerText;



	let bchild = btn[i].children;
	
    function updateMinus(e) {
		bchild[0].nextElementSibling.stepDown();
		

		//Калькулятор цены при нажатии на минус/плюс
		let priceone = btn[i].previousElementSibling.children[0].firstChild.innerText;
		let count = btn[i].children[1].value;
		let totalsumm = btn[i].nextElementSibling.children[0].firstChild;
		//Преобразования в int
		let priceint = Number(priceone);
		let countint = Number(count);

		let div = priceint*countint;
		//Вывод значений в консоль
		console.log('Цена ', priceint);
		console.log('Количество ', countint);
		console.log('Сумма', div);

		totalsumm.innerHTML = div;
	}

	bchild[0].addEventListener('click', updateMinus);

	function updatePlus(e) {
		bchild[2].previousElementSibling.stepUp();

		//Калькулятор цены при нажатии на минус/плюс
		let priceone = btn[i].previousElementSibling.children[0].firstChild.innerText;
		let count = btn[i].children[1].value;
		let totalsumm = btn[i].nextElementSibling.children[0].firstChild;
		console.log(totalsumm);
		//Преобразования в int
		let priceint = Number(priceone);
		let countint = Number(count);

		let div = priceint*countint;
		//Вывод значений в консоль
		console.log('Цена ', priceint);
		console.log('Количество ', countint);
		console.log('Сумма', div);

		totalsumm.innerHTML = div;
	}

	bchild[2].addEventListener('click', updatePlus);

	function updateInput(e) {
		//Калькулятор цены при нажатии на минус
		let priceone = btn[i].previousElementSibling.children[0].firstChild.innerText;
		let count = btn[i].children[1].value;
		let totalsumm = btn[i].nextElementSibling.children[0].firstChild.innerText;
		//Преобразования в int
		let priceint = Number(priceone);
		let countint = Number(count);

		let div = priceint*count;
		//Вывод значений в консоль
		console.log('Цена ', priceint);
		console.log('Количество ', countint);
		console.log('Сумма', div);

		totalsumm.innerText = div;
		document.querySelector('.total__summ').innerHTML = div;
	}

	bchild[1].addEventListener('change', updateInput);	
};      



//--------------ПЕРЕХОДЫ МОДАЛКА ЗАКАЗАТЬ ЗВОНОК КОРЗИНА----------------//
var ordercallbasket_btn1 = document.getElementsByClassName("submit-button-orderacall-contacts-basket")[0];

var ordercallbasket_sl1 = document.getElementById('modal-orderacall2');
var ordercallbasket_sl2 = document.getElementById('orderplaced');

var close_ordercallbasket_sl1 = document.getElementsByClassName("modal__close-orderacall2")[0];
var close_ordercallbasket_sl2 = document.getElementsByClassName("modal__close-orderplaced")[0];

var body1 = document.getElementsByTagName('body')[0]

//Кнопки перехода
ordercallbasket_btn1.addEventListener("click", function () {
  event.preventDefault(); 
    ordercallbasket_sl1.classList.add('animate');
    ordercallbasket_sl2.classList.add('animate');
    MicroModal.show('orderplaced');
    MicroModal.close('modal-orderacall2');
});

//Кнопки закрытия
close_ordercallbasket_sl1.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal-orderacall2');
    body1.setAttribute('style', 'overflow-y: scroll');
    location.reload();
});

close_ordercallbasket_sl2.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('orderplaced');
    body1.setAttribute('style', 'overflow-y: scroll');
    location.reload();
});




//МОДАЛКА ЗАКАЗАТЬ ЗВОНОК ПРОВЕРКА ПОЛЕЙ КОРЗИНА
var elemancallbasket = document.getElementById("btnsend2");
elemancallbasket.setAttribute("disabled", true);
var checkboxelemancallbasket = document.querySelector('.custom-checkbox-orderacall-basket');    
var inpAcallbasket = document.getElementById("name2");
var inpBcallbasket = document.getElementById("phone2");
console.log(inpAcallbasket.value);
console.log(inpBcallbasket.value);

inpAcallbasket.addEventListener('change', function() {
   if (inpAcallbasket.value == '') {
      elemancallbasket.setAttribute("disabled", true);
   }
});

inpBcallbasket.addEventListener('change', function() {
   if (inpBcallbasket.value == '') {
      elemancallbasket.setAttribute("disabled", true);
   }
});

checkboxelemancallbasket.addEventListener('change', function() {
   if (checkboxelemancallbasket.checked) {
    if (inpAcallbasket.value && inpBcallbasket.value != '') {
       elemancallbasket.removeAttribute("disabled");
    }
      
   } else {
       elemancallbasket.setAttribute("disabled", true);
   }
});





var close_modalorderacall2basket = document.getElementsByClassName("modal__close-orderacall2")[1];

close_modalorderacall2basket.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('submittedorder');
    body1.setAttribute('style', 'overflow-y: scroll');

});