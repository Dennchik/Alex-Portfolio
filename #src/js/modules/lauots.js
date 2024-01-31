import menuKeyframes from "./animetion.js";
import { myname, timeLine, timeSlide } from "./animetion.js";
// -----------------------------------------------------------------------------
const $ = {
	contact: document.querySelector('.header-content__item-btn'),
	// elTerminal: document.querySelector('.terminal'),
	elTerminal: document.querySelector('.editor'),
	menuBody: document.querySelector('.menu__body'),
	tablinks: document.querySelectorAll('.menu-top__item-btn'),
	tabcontents: document.querySelectorAll('.editor__section'),
	sideBarSubItems: document.querySelectorAll('.active-bar__sub-item'),
	menuParents: document.querySelectorAll('.menu__parent'),
	selectItems: document.querySelectorAll('.active-bar__item'),
	menuBody: document.querySelector('.menu__body'),
	settingMenu: document.querySelector('.setting-menu')
};
// -------------------------(Collapse - Terminal)-------------------------------
function tm_Layout() {
	$.contact.addEventListener('click', () => {
		$.contact.classList.toggle('_active');
		_toggleTerminal($.elTerminal);
	});
	document.querySelector('.terminal__close-btn').onclick = () => {
		$.contact.classList.remove('_active');
		_toggleTerminal($.elTerminal);
	};

}
// ----------------------------(Tabs - items)-----------------------------------
function topMenu() {
	for (const i in $.tablinks) {
		const tablink = $.tablinks[i];
		const tabcontent = $.tabcontents[i];
		if (Object.hasOwnProperty.call($.tabcontents, i)) {
			tablink.addEventListener('click', () => {
				let target = tablink.classList;
				switch (true) {
					case target.contains('_hello'):
						myname.play();
						timeLine.play();
						timeSlide.play();
						break;
					case target.contains('_scills'):
						// myname.play();
						// timeLine.play();
						break;
					case target.contains('_about'):
						// myname.play();
						// timeLine.play();
						break;
					default:
						break;
				}
				const view_tablink = document.querySelector('.menu-top__item-btn._active');
				const view_content = document.querySelector('.editor__section._active');
				_toggleMenu(view_tablink);
				if (view_tablink && view_tablink !== tabcontent) {
					_toggleMenu(tablink);
				}
				_toggleMenu(view_content);
				if (view_content && view_content !== tablink) {
					_toggleMenu(tabcontent);
				}
			});
		}
	}
	const _toggleMenu = (el) => {
		if (el.classList.contains('_active')) {
			el.classList.remove('_active');
		} else {
			el.classList.add('_active');
		}
	};
}
// -----------------------------(Side - bar)------------------------------------
function sideBar() {
	const actions = document.querySelectorAll('[data-action]');
	if (actions) {

		for (const i in $.sideBarSubItems) {
			const sideBarSubItem = $.sideBarSubItems[i];
			const menuParent = $.menuParents[i];
			if (Object.hasOwnProperty.call($.menuParents, i)) {
				sideBarSubItem.addEventListener('click', function () {
					let target = sideBarSubItem.classList;
					const select_item = document.querySelector('._select');
					const view_menu = document.querySelector('.menu__parent._select');
					openSwitch(target);
					_toggleItem(sideBarSubItem);
					_toggleOpenElem(select_item, sideBarSubItem);
					_toggleItem(menuParent);
					_toggleOpenElem(view_menu, menuParent);
				});
			}
		}

		for (let i = 0; i < $.selectItems.length; i++) {
			const selectItem = $.selectItems[i];
			selectItem.addEventListener('click', () => {
				const select_item = document.querySelector('._select');
				$.settingMenu.classList.toggle('_open');
				if ($.settingMenu.classList.contains('_open')) {
					menuKeyframes($.settingMenu);
				}
				document.addEventListener('click', function (e) {
					const target = e.target.classList;
					to_close(target, $.settingMenu, '_open');
				});
				_toggleItem(selectItem);
				if (select_item && select_item !== selectItem) {
					_toggleItem(select_item);
				} else if (select_item && select_item === selectItem) {
					_toggleItem(selectItem);
				}
				$.menuBody.style.width = "0";
				for (let i = 0; i < $.menuParents.length; i++) {
					const menuParent = $.menuParents[i];
					_toggle(menuParent);
				}
			});
		}
	}
};
// ----------------------------(Parent - MEnu)----------------------------------
function parentMenu() {
	const menuParents = document.querySelectorAll('.setting-menu__parent');
	for (let i = 0; i < menuParents.length; i++) {
		const menuParent = menuParents[i];
		menuParent.addEventListener('mouseenter', () => {
			const settingsubMenu = menuParent.querySelector('.setting-menu__sub-menu');
			menuParent.classList.add('_active');
			menuKeyframes(settingsubMenu);
		});
		menuParent.addEventListener('mouseleave', () => {
			menuParent.classList.remove('_active');
		});
	}
}
// ------------------------------(isMobile)-------------------------------------
import isMobile from "../assets/Js-devise.js";
if (isMobile.any()) {
	console.log('Все работает');
	const openSide = document.querySelector('.menu-top');
	const btns = document.querySelectorAll('.burger-bottom');
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', () => {
			openSide.classList.toggle('opened-menu');
			for (let i = 0; i < btns.length; i++) {
				btns[i].classList.toggle('_open');
			}
		});
	}
}
// -----------------------------------------------------------------------------
const _toggleTerminal = (el) => {
	if (el.classList.contains('_open')) {
		el.classList.remove('_open');
		// collapse.toggle();
	} else {
		el.classList.add('_open');
		// collapse.toggle();
	}
};

function openSwitch(target) {
	switch (true) {
		case target.contains('_select'):
			$.menuBody.style.width = "0";
			break;
		default:
			$.menuBody.style.width = "20rem";
			break;
	}
};

function to_close(target, elm, md) {
	switch (true) {
		case target.contains('icon-cogs-gear'):
			break;
		case target.contains('setting-menu__link--sub-link'):
			break;
		default:
			elm.classList.remove(md);
			break;
	}
};

const _toggle = (el) => {
	if (el.classList.contains('_select')) {
		el.classList.toggle('_select');
	}
};

const _toggleItem = (el) => {
	if (el.classList.contains('_select')) {
		el.classList.remove('_select');
	} else {
		el.classList.add('_select');
	}
};

const _toggleOpenElem = (el, elm) => {
	if (el && el !== elm) {
		_toggleItem(el);
	}
};


// -----------------------------------------------------------------------------
export { tm_Layout, sideBar, topMenu, parentMenu };