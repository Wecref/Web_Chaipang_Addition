import * as nav from './JS/Project/Nav.js'
import * as lang from './JS/Module/Language.js'

nav.InitMenu(document.querySelectorAll('#nav-contents-menu li:nth-child(-n+4)'));
nav.InitMenuIcon(document.querySelector('nav #nav_menu_icon'), document.querySelector('#nav-contents'));
nav.InitLanguageMenu(document.querySelectorAll('#nav-contents-lang li:not(:nth-child(2))'));