let toggle = document.querySelector('.nav-toggle');
let target = document.querySelector('.nav');
toggle.addEventListener('click',(event) => {
	let display = target.style.display;
	if(display === ""){
		target.style.display = "block";
	}else{
		target.style.display= "";
	}
});