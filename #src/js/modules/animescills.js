import anime from '../application/anime.js';
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
export function scills(el) {
	anime({
		targets: el,
		translateX: 900,
		direction: 'alternate',
		// loop: true,
		easing: 'linear'
	});
};
