window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
	showNavigationOnScroll()

	activateMenuAtCurrentSection(home)
	activateMenuAtCurrentSection(services)
	activateMenuAtCurrentSection(depositions)
	activateMenuAtCurrentSection(about)
	activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
	const targetLine = scrollY + innerHeight / 2

	const sectionTop = section.offsetTop
	const sectionHeight = section.offsetHeight
	const sectionEndsAt = sectionTop + sectionHeight

	const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
	const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

	const sectionBoundaries =
		sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

	const sectionId = section.getAttribute('id')

	const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

	menuElement.classList.remove('active')
	if (sectionBoundaries) {
		menuElement.classList.add('active')
	}
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
	slidesPerView: 3,
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
