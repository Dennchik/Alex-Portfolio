//* import Swiper bundle with all modules installed 
import '../assets/swiper-layout';
import swiperLayout from "../assets/swiper-layout";
swiperLayout();
import Swiper from 'swiper/bundle';

//* import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export default function mainSlide() {
	if (document.querySelector('.mainslide')) {
		new Swiper('.mainslide__body', {
			mousewheel: true,
			direction: 'vertical',
			loop: true,
			spaceBetween: 20,
			grabCursor: true,
			initialSlide: 3,
			centeredSlides: true,
			slidesPerView: 'auto',
			observer: true,
			observeParents: true,
			// allowTouchMove: false,
			// freeMode: true,

			autoHeight: true,
			speed: 800,

			//? If we need pagination
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true,
				loop: true,
			},

			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// },

			//? And if we need scrollbar
			scrollbar: {
				// el: '.swiper-scrollbar',
			},
		});
	}
}




