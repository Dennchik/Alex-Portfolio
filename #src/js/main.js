import loaded from './modules/loading.js';
loaded('.preloader');
import mainSlede from './modules/main-slide.js';
mainSlede(
	'.mainslide__body', //- init slide 
	'.hello-page__pagination-number', //- pagination  
	//- navigation: nextEl
	//- navigation: prevEl
	//- scrollbar
);

import modal from './modules/modal.js';
modal();

import { tm_Layout, sideBar, topMenu, parentMenu } from "./modules/lauots.js";
tm_Layout(); sideBar(); topMenu(); parentMenu();

import ItcMoveEl from './assets/move-elements.js';
ItcMoveEl();

// export default function matchMediaQuery() {
// 	const mediaQuery = window.matchMedia('(max-width: 690px)');
// 	if (mediaQuery.matches) {
// 		console.log(mediaQuery);
// 		alert(mediaQuery.matches);
// 	} else {
// 		// console.log(window.matchMedia(mediaQueryString));
// 		alert(mediaQuery.matches);
// 	}
// };
// matchMediaQuery();
// -----------------------------------------------------------------------------
