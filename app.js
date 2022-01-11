const row = document.querySelector('.header .nav-bar .nav-list .row');



document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#404552';
	} else {
		header.style.backgroundColor = 'transparent';
	}
})
