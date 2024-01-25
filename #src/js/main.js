import loaded from './modules/loading.js';
loaded('.preloader');
import mainSlede from './modules/main-slide.js';
mainSlede();
import { tm_Layout, sideBar, topMenu, parentMenu } from "./modules/lauots.js";
tm_Layout(); sideBar(); topMenu(); parentMenu();