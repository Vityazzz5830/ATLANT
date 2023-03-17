let btn = document.querySelectorAll('.keramsitblocks-menu-item-wrapcontent-btn');

for (let i=0; i<btn.length; i++){
  btn[i].addEventListener("click", function() {

    let bchild = btn[i].nextElementSibling.children;

	btn[i].classList.toggle("keramsitblocks-menu-item-wrapcontent-btn_none");
	btn[i].nextElementSibling.classList.toggle("keramsitblocks-menu-item-wrapcontent-input-block");
	
    function updateMinus(e) {
	  bchild[0].nextElementSibling.stepDown();
	}

	bchild[0].addEventListener('click', updateMinus);


	function updatePlus(e) {
	  bchild[2].previousElementSibling.stepUp();
	}

	bchild[2].addEventListener('click', updatePlus);

  	}); 
};      