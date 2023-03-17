window.addEventListener('DOMContentLoaded', function () {
   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });

      //ДЕФОЛТНЫЕ ЗНАЧЕНИЯ РАДИОКНОПОК КВИЗ
      $("#form__slide1-A").trigger("click");
       $("#form__slide2-A").trigger("click");
        $("#form__slide3-B").trigger("click");
         $("#form__slide4-A").trigger("click");
          $("#form__slide5-A").trigger("click");

      //ДЕФОЛТНЫЕ ЗНАЧЕНИЯ РАДИОКНОПОК КАЛЬКУЛЯТОР  
      $("#calcform__slide1-B").trigger("click");
       $("#calcform__slide2-B").trigger("click");
});
/*
var callmodalbtn = document.getElementById("call__button-wrap");
var callmodal = document.getElementById("modal-orderacall");

console.log(callmodalbtn);
console.log(callmodal);

callmodalbtn.addEventListener("click", function () {
    event.preventDefault(); 
    MicroModal.show('modal-orderacall');
    callmodal.setAttribute('style', 'display: block !important');
});
*/

var closebtnsubmitted = document.getElementsByClassName("submit-button-orderacall-contacts-basket")[0];





//--------------ПЕРЕХОДЫ МОДАЛКА ЗАКАЗАТЬ ЗВОНОК----------------//
var ordercall_btn1 = document.getElementsByClassName("submit-button-desktop-orderacall")[0];

var ordercall_sl1 = document.getElementById('modal-orderacall');
var ordercall_sl2 = document.getElementById('submittedorder');

var close_ordercall_sl1 = document.getElementsByClassName("modal__close-orderacall1")[0];
var close_ordercall_sl2 = document.getElementsByClassName("modal__close-orderacall2")[0];

var body1 = document.getElementsByTagName('body')[0]

//Кнопки перехода
ordercall_btn1.addEventListener("click", function () {
  event.preventDefault(); 
    ordercall_sl1.classList.add('animate');
    ordercall_sl2.classList.add('animate');
    MicroModal.show('submittedorder');
    MicroModal.close('modal-orderacall');
});

//Кнопки закрытия
close_ordercall_sl1.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal-orderacall');
    body1.setAttribute('style', 'overflow-y: scroll');
    location.reload();
});

close_ordercall_sl2.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('submittedorder');
    body1.setAttribute('style', 'overflow-y: scroll');
    location.reload();
});
//-------------------------------------------------------------//

//-----------------ПЕРЕХОДЫ КАЛЬКУЛЯТОР------------------------//

var calc_slide1 = document.getElementsByClassName("calc_slide1")[0];
var calc_slide2 = document.getElementsByClassName("calc_slide2")[0];
var calc_slide3 = document.getElementsByClassName("calc_slide3")[0];
var calc_slide4 = document.getElementsByClassName("calc_slide4")[0];
var calc_slide5 = document.getElementsByClassName("calc_slide5")[0];

var calc_retsl1 = document.getElementsByClassName("calc_retsl1")[0];
var calc_retsl2 = document.getElementsByClassName("calc_retsl2")[0];
var calc_retsl3 = document.getElementsByClassName("calc_retsl3")[0];
var calc_retsl4 = document.getElementsByClassName("calc_retsl4")[0];
var calc_retsl5 = document.getElementsByClassName("calc_retsl5")[0];

var calc_sl1btn = document.getElementById('calc_slide1-btn-next');
var calc_sl2btn = document.getElementById('calc_slide2-btn-next');
var calc_sl3btn = document.getElementById('calc_slide3-btn-next');
var calc_sl4btn = document.getElementById('calc_slide4-btn-next');
var calc_sl5btn = document.getElementById('calc_slide5-btn-next');

var close_calcsl1 = document.getElementsByClassName("modal__close-calcsl1")[0];
var close_calcsl2 = document.getElementsByClassName("modal__close-calcsl2")[0];
var close_calcsl3 = document.getElementsByClassName("modal__close-calcsl3")[0];
var close_calcsl4 = document.getElementsByClassName("modal__close-calcsl4")[0];
var close_calcsl5 = document.getElementsByClassName("modal__close-calcsl5")[0];


var body1 = document.getElementsByTagName('body')[0]

//Кнопки закрытия
close_calcsl1.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('calc_slide1');
    body1.setAttribute('style', 'overflow-y: scroll');
});

close_calcsl2.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('calc_slide2');
    body1.setAttribute('style', 'overflow-y: scroll');
});

close_calcsl3.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('calc_slide3');
    body1.setAttribute('style', 'overflow-y: scroll');
});

close_calcsl4.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('calc_slide4');
   body1.setAttribute('style', 'overflow-y: scroll');
});

close_calcsl5.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('calc_slide5');
    body1.setAttribute('style', 'overflow-y: scroll');
});


//Кнопки перехода
calc_sl1btn.addEventListener("click", function () {
  event.preventDefault(); 
    calc_slide1.classList.add('animate');
    calc_slide2.classList.add('animate');
    MicroModal.show('calc_slide2');
    MicroModal.close('calc_slide1');
});

calc_sl2btn.addEventListener("click", function () {
  event.preventDefault(); 
  calc_slide2.classList.add('animate');
  calc_slide3.classList.add('animate');
    MicroModal.show('calc_slide3');
    MicroModal.close('calc_slide2');
});
/*
calc_sl3btn.addEventListener("click", function () {
  event.preventDefault();
  calc_slide3.classList.add('animate'); 
  calc_slide4.classList.add('animate');
    MicroModal.show('calc_slide4');
    MicroModal.close('calc_slide3');
});
*/
/*
calc_sl4btn.addEventListener("click", function () {
  event.preventDefault();
  calc_slide4.classList.add('animate'); 
  calc_slide5.classList.add('animate');
    MicroModal.show('calc_slide5');
    MicroModal.close('calc_slide4');
});
*/
calc_sl5btn.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('calc_slide5');
});

//Кнопки возврата
calc_retsl1.addEventListener("click", function () {
  event.preventDefault(); 
  calc_slide1.classList.add('animate');
    MicroModal.close('calc_slide1');
    body1.setAttribute('style', 'overflow-y: scroll');
});

calc_retsl2.addEventListener("click", function () {
  event.preventDefault(); 
  calc_slide2.classList.add('animate');
    MicroModal.close('calc_slide2');
    MicroModal.show('calc_slide1');
});

calc_retsl3.addEventListener("click", function () {
  event.preventDefault(); 
  calc_slide3.classList.add('animate');
    MicroModal.close('calc_slide3');
     MicroModal.show('calc_slide2');
});

calc_retsl4.addEventListener("click", function () {
  event.preventDefault(); 
  calc_slide4.classList.add('animate');
    MicroModal.close('calc_slide4');
     MicroModal.show('calc_slide3');
});

calc_retsl5.addEventListener("click", function () {
  event.preventDefault(); 
  calc_slide5.classList.add('animate');
    MicroModal.close('calc_slide5');
     MicroModal.show('calc_slide4');
});

//-------------------------------------------------------------//




var bntsl3 = document.getElementById("calc_slide3-btn-next");

bntsl3.addEventListener("click", function () {
   
  var bntsl3_inpA = document.getElementById("calcform__slide3-A");
  var bntsl3_inpB = document.getElementById("calcform__slide3-B");
  var bntsl3_inpC = document.getElementById("calcform__slide3-C");
  var bntsl3_inpD = document.getElementById("calcform__slide3-D");
  var bntsl3_inpE = document.getElementById("calcform__slide3-E");

  console.log(bntsl3_inpA.value);
  console.log(bntsl3_inpB.value);
  console.log(bntsl3_inpC.value);
  console.log(bntsl3_inpD.value);

  if (bntsl3_inpA.value && bntsl3_inpB.value && bntsl3_inpC.value && bntsl3_inpD.value && bntsl3_inpE.value !== ' ') {
    
    console.log('Поля заполнены');
    event.preventDefault();
    calc_slide3.classList.add('animate'); 
    calc_slide4.classList.add('animate');
    MicroModal.show('calc_slide4');
    MicroModal.close('calc_slide3');

  }
  else{
    console.log('Поля пусты');
  }

})


var bntsl4 = document.getElementById("calc_slide4-btn-next");

bntsl4.addEventListener("click", function () {
   
  var bntsl4_inpA = document.getElementById("calcform__slide4-A");
  var bntsl4_inpB = document.getElementById("calcform__slide4-B");
  var bntsl4_inpC = document.getElementById("calcform__slide4-С");
  var bntsl4_inpD = document.getElementById("calcform__slide4-D");
  var bntsl4_inpE = document.getElementById("calcform__slide4-E");

  console.log(bntsl4_inpA.value);
  console.log(bntsl4_inpB.value);
  console.log(bntsl4_inpC.value);
  console.log(bntsl4_inpD.value);

  if (bntsl4_inpA.value && bntsl4_inpB.value && bntsl4_inpC.value && bntsl4_inpD.value && bntsl4_inpE.value !== ' ') {
    
    console.log('Поля заполнены');
    event.preventDefault();
    calc_slide4.classList.add('animate'); 
    calc_slide5.classList.add('animate');
    MicroModal.show('calc_slide5');
    MicroModal.close('calc_slide4');
    /*bntsl3.setAttribute("datamicromodalclose", "");
    bntsl3.setAttribute("data-customopen", "calc_slide4");*/
  }
  else{
    console.log('Поля пусты');
  }

})

//МОДАЛКА ЗАКАЗАТЬ ЗВОНОК ПРОВЕРКА ПОЛЕЙ
var elemancall = document.getElementsByClassName('submit-button-orderacall-contacts')[0];
elemancall.setAttribute("disabled", true);
var checkboxelemancall = document.querySelector('.custom-checkbox-orderacall');    
var inpAcall = document.getElementById("name");
var inpBcall = document.getElementById("phone");
console.log(inpAcall.value);
console.log(inpBcall.value);

inpAcall.addEventListener('change', function() {
   if (inpAcall.value == '') {
      elemancall.setAttribute("disabled", true);
   }
});

inpBcall.addEventListener('change', function() {
   if (inpBcall.value == '') {
      elemancall.setAttribute("disabled", true);
   }
});

checkboxelemancall.addEventListener('change', function() {
   if (checkboxelemancall.checked) {
    if (inpAcall.value && inpBcall.value != '') {
       elemancall.removeAttribute("disabled");
    }
      
   } else {
       elemancall.setAttribute("disabled", true);
   }
});

//ОПРЕДЕЛЕНИЕ НАЖАТОЙ РАДИО КНОПКИ И ВЫВОД ЗНАЧЕНИЯ В КОНСОЛЬ КАЛЬКУЛЯТОР
var radio = document.querySelectorAll('.choice-radio-calc');  

var rightpartbase = document.querySelector('.modal__content-calc_slide1-container-rightpart');

var rightpartfirst = document.querySelector('.modal__content-calc_slide1-container-rightpart-first');
var rightpartsecond = document.querySelector('.modal__content-calc_slide1-container-rightpart-second');
var rightpartthird = document.querySelector('.modal__content-calc_slide1-container-rightpart-third');

for (let i=0; i<radio.length; i++){
   radio[i].addEventListener("click", function () { 
      console.log(radio[i].checked + ' ' + radio[i].id + ' ' + radio[i].value);
   }) 
}

//ОПРЕДЕЛЕНИЕ НАЖАТОЙ РАДИО КНОПКИ И ВЫВОД ЗНАЧЕНИЯ В КОНСОЛЬ КВИЗ
var radiokviz = document.querySelectorAll('.choice-radio-kviz');  

for (let i=0; i<radiokviz.length; i++){
   radiokviz[i].addEventListener("click", function () { 
      console.log(radiokviz[i].checked + ' ' + radiokviz[i].id + ' ' + radiokviz[i].value);
   }) 
}


/*-----input number mask------*/
document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');
    
    var getInputNumbersValue = function (input) {
        // Return stripped input value â€” just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol â€” remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})

/*------------------ТАБ МЕНЮ КАЛЬКУЛЯТОР-------------------*/


/*------------------ТАБ МЕНЮ КАЛЬКУЛЯТОР СЛАЙД 1-------------------*/
$('.js-tab-trigger-slide1').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content-slide1[data-tab="'+ id +'"]');
   
   $('.js-tab-trigger-slide1.active').removeClass('active'); // 1
   $(this).addClass('active'); // 2
   
   $('.js-tab-content-slide1.active').removeClass('active'); // 3
   content.addClass('active'); // 4
});


/*------------------ТАБ МЕНЮ КАЛЬКУЛЯТОР СЛАЙД 3-------------------*/
$('.js-tab-trigger-slide3').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content-slide3[data-tab="'+ id +'"]');
   
   $('.js-tab-trigger-slide3.active').removeClass('active'); // 1
   $(this).addClass('active'); // 2
   
   $('.js-tab-content-slide3.active').removeClass('active'); // 3
   content.addClass('active'); // 4
});


/*------------------ТАБ МЕНЮ КАЛЬКУЛЯТОР СЛАЙД 4-------------------*/
$('.js-tab-trigger-slide4').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content-slide4[data-tab="'+ id +'"]');
   
   $('.js-tab-trigger-slide4.active').removeClass('active'); // 1
   $(this).addClass('active'); // 2
   
   $('.js-tab-content-slide4.active').removeClass('active'); // 3
   content.addClass('active'); // 4
});

/*------------------------------------------------*/



/*--------------КАЛЬКУЛЯТОР СЛАЙД 3 INPUT NUMBER---------------*/
const buttonminuscalcsl3 = document.querySelector('.calcform__slide3-minus');
const buttonpluscalcsl3 = document.querySelector('.calcform__slide3-plus');

function updateMinusCalcsl3(e) {
   buttonminuscalcsl3.nextElementSibling.stepDown();
}

buttonminuscalcsl3.addEventListener('click', updateMinusCalcsl3);

function updatePlusCalcsl3(e) {
   buttonpluscalcsl3.previousElementSibling.stepUp();
}
 
buttonpluscalcsl3.addEventListener('click', updatePlusCalcsl3);   

/*--------------КАЛЬКУЛЯТОР СЛАЙД 4 INPUT NUMBER---------------*/


let fieldcalc = document.querySelectorAll('.calc_inp_number_sl4');
console.log(fieldcalc);

for (let i=0; i<fieldcalc.length; i++){

    let plus = fieldcalc[i].nextElementSibling;
    let minus = fieldcalc[i].previousElementSibling;

    function updateMinusCalcsl4(e) {
     minus.nextElementSibling.stepDown();
   }
   minus.addEventListener('click', updateMinusCalcsl4);

   function updatePlusCalcsl4(e) {
     plus.previousElementSibling.stepUp();
   }
   plus.addEventListener('click', updatePlusCalcsl4);
};      

/*--------------КАЛЬКУЛЯТОР СЛАЙД 5---------------*/


/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
/*const menu = document.querySelector("#menu").cloneNode(1);*/

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

/*

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});



// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}



*/












var catalogbtnwrap = document.getElementById('catalog_btnwrap');
var hambcatalogwrap = document.getElementById('hambcatalogwrap');

console.log(catalogbtnwrap);
console.log(hambcatalogwrap);

catalog_btnwrap.addEventListener("click", hambCatalogwrap);
//hambcatalogwrap.addEventListener("mouseout", hambCatalogwrapmouseover);

// Выполняем действия при клике ..
function hambCatalogwrap(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  hambcatalogwrap.classList.toggle("opencatalogwrap");
  catalog_btnwrap.classList.toggle("catalog_btnwrap_active");
}


function hambCatalogwrapmouseover(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  hambcatalogwrap.classList.remove("opencatalogwrap");
}


document.addEventListener('keydown', function(e) {
  if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
    hambcatalogwrap.classList.remove("opencatalogwrap");
  }
});





var bat = document.getElementsByClassName("bat")[0];
var batmenu = document.getElementsByClassName("batmenu")[0];

console.log(batmenu);
console.log(bat);

bat.addEventListener("click", function () {
  batmenu.classList.toggle("opencatalogwrap");
  bat.classList.toggle("catalog_btnwrap_active");
});

document.addEventListener('keydown', function(e) {
  if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
    hambcatalogwraptu.classList.remove("opencatalogwrap");
  }
});
