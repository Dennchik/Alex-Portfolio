export default function modal() {
	const mainSlides = document.querySelectorAll(".mainslide__slide");
	let modal = document.querySelector('.modal');
	mainSlides.forEach(mainSlide => {
		let img = mainSlide.querySelector("img");
		img.onclick = function (e) {
			let target = e.target;
			let sourse = target.closest('.content-mainslide__image').querySelector('source').srcset;
			let modalImg = modal.querySelector("#image");
			modal.classList.add('_show');
			modalImg.src = this.src;
			modal.querySelector('source').srcset = sourse;
			var span = modal.querySelector("span");
			span.onclick = function () {
				modal.classList.remove('_show');
			};
		};
	});
}
