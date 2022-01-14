const row = document.querySelector('.header .nav-bar .nav-list .row');



document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#404552';
	} else {
		header.style.backgroundColor = 'transparent';
	}
})

let more = document.querySelectorAll(".more");
for (let i = 0; i < more.length; i++) {
	more[i].addEventListener("click", function () {
	more[i].parentNode.classList.toggle("active");
	});
}
