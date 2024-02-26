export default function modal() {
	const mainSlides = document.querySelectorAll(".mainslide__slide");
	let modal = document.querySelector('.modal');
	mainSlides.forEach(mainSlide => {
		let img = mainSlide.querySelector("img");
		img.onclick = function (e) {
			let target = e.target;
			let sourse = target.closest('.content-mainslide__image').querySelector('source').srcset;
			let ahref = target.closest('.content-mainslide').querySelector('.content-mainslide__link').href;
			if (!target.closest('.mainslide__slide').classList.contains('swiper-slide-active')) {
				e.preventDefault();
			} else {
				let modalImg = modal.querySelector('.modal__image');
				let _buttons = document.querySelectorAll('.modal__button');
				modal.classList.add('_show');
				modal.style.zIndex = '9';
				modalImg.src = this.src;
				modal.querySelector('.modal__link').href = ahref;
				modal.querySelector('source').srcset = sourse;
				for (let i = 0; i < _buttons.length; i++) {
					const _button = _buttons[i];
					_button.addEventListener('click', () => {
						modal.classList.remove('_show');
						window.setTimeout(
							function removethis() {
								modal.style.display = "none";
								modal.style.zIndex = '1';
								modal.style.display = null;
							}, 500
						);
					});
				}
			}
		};
	});
}