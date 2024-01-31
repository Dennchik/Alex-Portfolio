import swiperLayout from "../assets/swiper-layout";
swiperLayout('.mainslide__body');
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';

//* import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export default function mainSlide(
	mainslide,
	direction,
	pagination,
	loop,
	grabCursor,
	observer,
	autoHeight,
	mousewheel,
	centeredSlides,
	initialSlide,
	spaceBetween,
	slidesPerView,
	nextEl,
	prevEl,
	scrollbar,
) {
	if (mainslide) {
		new Swiper(mainslide, {
			direction: direction,
			speed: 800,
			loop: loop,
			grabCursor: grabCursor,
			observer: observer,
			autoHeight: autoHeight,
			mousewheel: mousewheel,
			centeredSlides: centeredSlides,
			initialSlide: initialSlide,
			spaceBetween: spaceBetween,
			slidesPerView: slidesPerView,

			pagination: {
				el: pagination,
				// dynamicBullets: true,
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},

			navigation: {
				nextEl: nextEl,
				prevEl: prevEl,
			},

			//? And if we need scrollbar
			scrollbar: {
				el: scrollbar,
			},
		});
	}
}




