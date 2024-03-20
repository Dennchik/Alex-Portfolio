import { menuKeyframes } from "./animetion.js";
import isMobile from "../assets/Js-devise.js";
// -----------------------------------------------------------------------------
const $ = {
	elTerminal: document.querySelector('.editor'),
	menuBody: document.querySelector('.menu__body'),
	openSide: document.querySelector('.move-content'),
	settingMenu: document.querySelector('.setting-menu'),
	menuParents: document.querySelectorAll('.menu__parent'),
	tabcontents: document.querySelectorAll('.editor__section'),
	tablinks: document.querySelectorAll('.menu-top__item-btn'),
	selectItems: document.querySelectorAll('.active-bar__item'),
	contact: document.querySelector('.header-content__item-btn'),
	sideBarSubItems: document.querySelectorAll('.active-bar__sub-item'),
	itemContact: document.querySelector('.header-content__item-contact'),
	bttns: document.querySelectorAll('.burger-bottom'),
	menuTitles: document.querySelectorAll('.parent-menu__title'),
	buttonTabs: document.querySelectorAll('.submenu-child'),
	bttn: document.querySelector('.burger-bottom'),
	progressValues: document.querySelectorAll('.languages__progress-value'),
	inlineValues: document.querySelectorAll('.d-inline__value'),
	dotValues: document.querySelectorAll('.d-inline__octicon-dot')
};
// -----------------------(isMobile - Side Bar Menu)----------------------------
if (isMobile.any()) {
	_loop($.bttns, 'burger-bottom', '_open');
}
_loop($.buttonTabs, '.submenu-child', '_open');
_loop($.menuTitles, '.parent-menu__list-item', '_open');
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
// --------------------------(Languages - Value)--------------------------------
function _progressValue() {
	for (const i in $.inlineValues) {
		if (Object.hasOwnProperty.call($.inlineValues, i)) {
			const inlineValue = $.inlineValues[i];
			const progressValue = $.progressValues[i];
			const dotValue = $.dotValues[i];
			console.log(inlineValue.innerHTML);
			progressValue.style.width = inlineValue.innerHTML;
			progressValue.style.background = dotValue.style.color;


		}
	}

}
// ----------------------------(Tabs - items)-----------------------------------
function topMenu() {
	for (const i in $.tablinks) {
		const tablink = $.tablinks[i];
		const tabcontent = $.tabcontents[i];
		if (Object.hasOwnProperty.call($.tabcontents, i)) {
			tablink.addEventListener('click', () => {
				_remove($.openSide, 'opened-menu');
				_remove($.bttn, '_open');
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
}
// -----------------------------(Side - bar)------------------------------------
function sideBar() {
	const actions = document.querySelectorAll('[data-action]');
	if (actions) {
		actions.forEach(action => {
			for (let i = 0; i < $.selectItems.length; i++) {
				const selectItem = $.selectItems[i];
				selectItem.addEventListener('click', () => {
					const select_item = action.querySelector('._select');
					$.settingMenu.classList.toggle('_open');
					if (selectItem.classList.contains('active-bar__item--control')) {
						menuKeyframes($.settingMenu);
					}
					document.addEventListener('click', function (e) {
						const target = e.target.classList;
						to_close(target, $.settingMenu, '_open');
					});
					_toggleItem(selectItem);
					if (select_item && select_item !== selectItem) {
						// animePaper(selectItem)
						_toggleItem(select_item);
					} else if (select_item && select_item === selectItem) {
						_toggleItem(selectItem);
					}
					for (let i = 0; i < $.menuParents.length; i++) {
						const menuParent = $.menuParents[i];
						_toggle(menuParent);
					}
				});
			}
			for (const i in $.sideBarSubItems) {
				const sideBarSubItem = $.sideBarSubItems[i];
				const menuParent = $.menuParents[i];
				if (Object.hasOwnProperty.call($.menuParents, i)) {
					sideBarSubItem.addEventListener('click', function () {
						let target = sideBarSubItem.classList;
						const select_item = action.querySelector('._select');
						const view_menu = action.querySelector('.menu__parent._select');
						openSwitch(target);
						_toggleItem(sideBarSubItem);
						_toggleOpenElem(select_item, sideBarSubItem);
						_toggleItem(menuParent);
						_toggleOpenElem(view_menu, menuParent);
					});
				}
			}
		});
	}
};
// ----------------------------(Parent - Menu)----------------------------------
function parentMenu() {
	const menuParents = document.querySelectorAll('.setting-menu__parent');
	for (let i = 0; i < menuParents.length; i++) {
		const menuParent = menuParents[i];
		menuParent.addEventListener('mouseenter', () => {
			const settingSubMenu = menuParent.querySelector('.setting-menu__sub-menu');
			menuParent.classList.add('_active');
			menuKeyframes(settingSubMenu);
		});
		menuParent.addEventListener('mouseleave', () => {
			menuParent.classList.remove('_active');
		});
	}
}
// -----------------------------------------------------------------------------
function _loop(els, elClosest, md) {
	for (let i = 0; i < els.length; i++) {
		let item = els[i];
		item.addEventListener('click', () => {
			switch (true) {
				case item.classList.contains(elClosest):
					item.classList.toggle(md);
					$.openSide.classList.toggle('opened-menu');
					break;
				default:
					item.closest(elClosest).classList.toggle(md);
					break;
			}
		});
	}
}
const _remove = (el, md) => {
	el.classList.remove(md);
};
const _toggleMenu = (el) => {
	if (el.classList.contains('_active')) {
		el.classList.remove('_active');
	} else {
		el.classList.add('_active');
	}
};
const _toggleOpenElem = (el, elm) => {
	if (el && el !== elm) {
		_toggleItem(el);
	}
};
const _toggleTerminal = (el) => {
	if (el.classList.contains('_open')) {
		el.classList.remove('_open');
	} else {
		el.classList.add('_open');
	}
};
const openSwitch = (target) => {
	switch (true) {
		case target.contains('_select'):
			$.menuBody.classList.remove('_open');
			break;
		default:
			$.menuBody.classList.add('_open');
			break;
	}
};
const to_close = (item, elm, md) => {
	switch (true) {
		case item.contains('icon-cogs-gear'):
			break;
		case item.contains('setting-menu__link--sub-link'):
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
// -----------------------------------------------------------------------------
export { tm_Layout, sideBar, topMenu, parentMenu, _progressValue };