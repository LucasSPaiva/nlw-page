const swiper = new Swiper('.swiper', {
	slidesPerView: 1.3,
	direction: 'horizontal',
	loop: true,
	mousewheel: true,
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

	mousewheel: true,
	keyboard: true,
	centeredSlides: true,
	centeredSlidesBounds: true,
	grabCursor: true,

	pagination: {
		el: '.swiperAbout-pagination'
	}
})
