import loaded from './modules/loading.js';
loaded('.preloader');

import dinamicAdaptive from './assets/move-elements.js';
dinamicAdaptive();

import mainSlede from './modules/main-slide.js';
mainSlede();

import modal from './modules/modal.js';
modal();

import { tm_Layout, sideBar, topMenu, parentMenu } from "./modules/lauots.js";
tm_Layout(); topMenu(); sideBar(); parentMenu();

