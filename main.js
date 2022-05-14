window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
	showNavigationOnScroll()
}

function showNavigationOnScroll() {
	if (scrollY > 0) {
		navigation.classList.add('scroll')
	} else {
		navigation.classList.remove('scroll')
	}
}

function openMenu() {
	document.body.classList.add('menu-expanded')
}

function closeMenu() {
	document.body.classList.remove('menu-expanded')
}

const swiper = new Swiper('.swiper', {
	slidesPerView: 1.1,
	direction: 'horizontal',
	loop: true,
	keyboard: true,
	centeredSlides: true,
	centeredSlidesBounds: true,
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination'
	}
})

const swiperAbout = new Swiper('.swiperAbout', {
	slidesPerView: 1.2,
	direction: 'horizontal',
	loop: true,

	keyboard: true,
	centeredSlides: true,
	centeredSlidesBounds: true,
	grabCursor: true,

	pagination: {
		el: '.swiperAbout-pagination'
	}
})
