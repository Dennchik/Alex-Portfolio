import swiperLayout from "../assets/swiper-layout";
swiperLayout('.mainslide__body');
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';

//* import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export default function mainSlide(mainslide, pagination,
	nextEl,
	prevEl,
	scrollbar,
) {
	if (mainslide) {
		new Swiper(mainslide, {
			direction: 'vertical',
			speed: 800,
			loop: true,
			grabCursor: true,
			observer: true,
			autoHeight: true,
			mousewheel: true,
			centeredSlides: true,
			initialSlide: 2,
			spaceBetween: 30,
			slidesPerView: 7,
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

			//? And if we need scrollbar
			scrollbar: {
				el: scrollbar,
			},
		});
	}
}




