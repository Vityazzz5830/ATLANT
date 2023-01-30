const keramsit_backet_btn = document.querySelector('.keramsitblocks-menu-item-wrapcontent-btn');
const keramsit_input = document.querySelector('.keramsitblocks-menu-item-wrapcontent-input');
const keramsit_menuwrap = document.querySelector('.keramsitblocks-menu-item-wrapcontent');
const keramsit_menuwrapcont = document.querySelector('.keramsitblocks-menu-item-wrapcontent-container');

keramsit_backet_btn.addEventListener('click', updateButton);

function updateButton() {
  keramsit_backet_btn.classList.toggle("keramsitblocks-menu-item-wrapcontent-btn_none");
  keramsit_input.classList.toggle("keramsitblocks-menu-item-wrapcontent-input-block");
  keramsit_menuwrap.classList.toggle("keramsitblocks-menu-item-wrapcontent-fix");
  keramsit_menuwrapcont.classList.toggle("keramsitblocks-menu-item-wrapcontent-fix");
}




const buttonminus = document.querySelector('.wrapcontent-input-minus');
const buttonplus = document.querySelector('.wrapcontent-input-plus');



function updateMinus(e) {
  buttonminus.nextElementSibling.stepDown();
  buttonminus.nextElementSibling.onchange();
}

buttonminus.addEventListener('click', updateMinus);



function updatePlus(e) {
  buttonplus.previousElementSibling.stepUp();
  buttonplus.previousElementSibling.onchange();
}
 
buttonplus.addEventListener('click', updatePlus);    
    
