import swiperLayout from "../assets/swiper-layout";
swiperLayout('.mainslide__body');
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';

//* import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export default function mainSlide(
	mainslide = '.mainslide__body',
	pagination = '.hello-page__pagination-number',
	scrollbar = '',
	nextEl = '',
	prevEl = '',
) {
	if (mainslide) {
		new Swiper(mainslide, {
			direction: "vertical",
			speed: 800,
			loop: true,
			// observer: true,
			grabCursor: true,
			spaceBetween: 30,
			mousewheel: true,
			initialSlide: 3,
			slidesPerView: 7,
			autoHeight: true,
			centeredSlides: true,
			updateOnWindowResize: true,

			pagination: {
				el: pagination,
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + ' ' + 'el' + '">' + (index + 1) + "</span>";
				},
			},

			navigation: {
				nextEl: nextEl,
				prevEl: prevEl,
			},

			scrollbar: {
				el: scrollbar,
			},
		});
	}
}




