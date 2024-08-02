/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");


/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

window.axios = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nC:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\postcss.config.js:1\nexport default {\n^^^^^^\n\nSyntaxError: Unexpected token 'export'\n    at wrapSafe (node:internal/modules/cjs/loader:1281:20)\n    at Module._compile (node:internal/modules/cjs/loader:1321:27)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)\n    at Module.load (node:internal/modules/cjs/loader:1208:32)\n    at Module._load (node:internal/modules/cjs/loader:1024:12)\n    at Module.require (node:internal/modules/cjs/loader:1233:19)\n    at module.exports (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\import-fresh\\index.js:32:59)\n    at loadJs (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\loaders.js:16:18)\n    at Explorer.loadFileContent (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\Explorer.js:84:32)\n    at Explorer.createCosmiconfigResult (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\Explorer.js:89:36)\n    at Explorer.loadSearchPlace (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\Explorer.js:70:31)\n    at async Explorer.searchDirectory (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\Explorer.js:55:27)\n    at async run (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\Explorer.js:35:22)\n    at async cacheWrapper (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\cacheWrapper.js:16:18)\n    at async cacheWrapper (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\cacheWrapper.js:16:18)\n    at async cacheWrapper (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\cacheWrapper.js:16:18)\n    at async Explorer.search (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\cosmiconfig\\dist\\Explorer.js:27:20)\n    at async loadConfig (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\postcss-loader\\dist\\utils.js:68:16)\n    at async Object.loader (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\postcss-loader\\dist\\index.js:54:22)\n    at processResult (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\webpack\\lib\\NormalModule.js:841:19)\n    at C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\webpack\\lib\\NormalModule.js:971:5\n    at C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\loader-runner\\lib\\LoaderRunner.js:400:11\n    at C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\loader-runner\\lib\\LoaderRunner.js:252:18\n    at context.callback (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Object.loader (C:\\Users\\an.m\\Desktop\\Code\\laravel-tutorial-from-scratch\\firstproject\\node_modules\\postcss-loader\\dist\\index.js:56:7)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/js/app.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/scss/app.scss");
/******/ 	
/******/ })()
;