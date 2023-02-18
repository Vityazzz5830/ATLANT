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