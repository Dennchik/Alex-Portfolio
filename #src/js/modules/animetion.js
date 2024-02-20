import anime from '../application/anime.js';
//* ------------------------------- Greed --------------------------------------
export function menuKeyframes(el) {
	anime({
		targets: el,
		translateX: [
			{ value: 0, duration: 1000, delay: 0 }
		],
		translateY: [
			{ value: 0, duration: 500, delay: 500 }
		],
		scaleX: [
			{ value: 0.7, duration: 100, delay: 0, easing: 'easeOutExpo' },
			{ value: 1, duration: 900 },
		],
		scaleY: [
			{ value: 0.5, duration: 50, delay: 0, easing: 'easeOutExpo' },
			{ value: 1, duration: 900 }
		],
		easing: 'easeOutElastic(1, .8)',
	});
};
//* ------------------------------- Greed --------------------------------------
// export function animePage(el) {
// 	anime({
// 		targets: el,
// 		opacity: 1,
// 		// direction: 'alternate',
// 		translateX: [
// 			{ value: 0, duration: 1000, delay: 300 }
// 		],
// 		scaleX: [
// 			{ value: 3, duration: 100, delay: 300, easing: 'easeInExpo' },
// 			{ value: 1, duration: 900 }
// 		],
// 		// scale: anime.stagger([0.7, 1.1], { from: 'center' }),
// 		// opacity: anime.stagger([0, 0], { from: 'center' }),
// 		delay: anime.stagger(10, { start: 100 }),
// 		easing: 'easeOutElastic(1, .8)',
// 	});
// };
export function animePage(el) {
	anime({
		targets: el,
		delay: anime.stagger(100),
		translateX: [700, 0],
		delay: 300,
	});
};
//* ------------------------------ My name -------------------------------------
export let myname = anime({
	targets: '.hello-page__my-name span',
	opacity: 1,
	rotate: {
		value: 360,
		duration: 1000,
		easing: 'easeInExpo'
	},
	scale: anime.stagger([0.7, 1.1], { from: 'center' }),
	delay: anime.stagger(10, { start: 1500 }),
	translateX: [-700, 0],
});
//* ---------------- Create a timeline with default parameters -----------------
export let timeLine = anime.timeline({
	duration: 1750,
	delay: anime.stagger(100)
});
timeLine
	.add({
		targets: '.hello-page__privet',
		opacity: 1,
		translateX: [-700, 0],
		delay: 1300,
	})
	.add({
		targets: '.hello-page__title',
		opacity: 1,
		translateX: [-700, 0],
	}, 1000)
	.add({
		targets: '.hello-page__text',
		opacity: 1,
		translateX: [-700, 0],
	}, 1100)
	.add({
		targets: '.hello-page__link',
		opacity: 1,
		translateX: [-700, 0],
	}, 1400)
	.add({
		targets: '.gutter-col',
		opacity: 1,
		translateX: [700, 0],
	}, 1000);

export let timeSlide = anime.timeline({
	duration: 2000,
	delay: anime.stagger(100)
});
timeSlide
	.add({
		targets: '.mainslide__body',
		opacity: 1,
		translateY: [-1700, 0],
	}, 500);
//* ----------------------------------------------------------------------------