// Tiny Slider

const slider = tns({
	container: '#tinySlider',
	autoWidth: true,

	items: 4,
	loop: true, // Ломакет работу с lazyload
	gutter: 24,
	// edgePadding: 24,
	mouseDrag: true,
	//lazyload: true,
	swipeAngle: false,
	speed: 400,
	autoHeight: true,

	// Если есть контейнер с кастомными контролами
	// controlsContainer: '.locations__controls',
	// nav: false,
	controls: false
});

/*
// Еще кастомные контролы
// Кнопки управления слайдером
const prevMobile = document.querySelector('.locations__controls--mobile .prev');
const nextMobile = document.querySelector('.locations__controls--mobile .next');

// Обращаемся к кнопкам и по событию клика вешаем на них методы перелистывания слайдера вперед и назад
prevMobile.onclick = function () {
	slider.goTo('prev');
};

nextMobile.onclick = function () {
	slider.goTo('next');
};
*/
