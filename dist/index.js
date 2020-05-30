(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bookmark.ts":
/*!*************************!*\
  !*** ./src/Bookmark.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Bookmark = exports.BookmarkDetails = void 0;\r\nclass BookmarkDetails {\r\n    constructor(title) {\r\n        this.Icon = \"\";\r\n        this.Favourite = true;\r\n        this.Title = title;\r\n    }\r\n    SetURL(url) {\r\n        //sets url\r\n    }\r\n    GetURL() {\r\n        //opens new tab        \r\n    }\r\n}\r\nexports.BookmarkDetails = BookmarkDetails;\r\nclass Bookmark {\r\n    constructor(newBookmark) {\r\n        this.Bookmark = newBookmark;\r\n        this.Element = document.createElement(\"div\");\r\n    }\r\n    spawn(id) {\r\n        //spawns new bookmark\r\n        this.Element.appendChild(document.createTextNode(this.Bookmark.Title));\r\n        id.appendChild(this.Element);\r\n    }\r\n    remove(id) {\r\n        //removes new bookmark\r\n        if (this.Bookmark == null)\r\n            return;\r\n        id.removeChild(this.Element);\r\n    }\r\n}\r\nexports.Bookmark = Bookmark;\r\n\n\n//# sourceURL=webpack:///./src/Bookmark.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Bookmark_1 = __webpack_require__(/*! ./Bookmark */ \"./src/Bookmark.ts\");\r\nlet bookmarkContainer = document.getElementById(\"bookmarkContainer\");\r\nlet bookmarkDetails = new Bookmark_1.BookmarkDetails(\"Prolific\");\r\nlet newBookmark = new Bookmark_1.Bookmark(bookmarkDetails);\r\n//create bookmark favourite = true\r\n//take user input\r\n//append title, node required\r\n//append url, size contraints\r\n//append bookmark\r\nnewBookmark.spawn(bookmarkContainer);\r\n//remove bookmark favourite = false\r\nnewBookmark.remove(bookmarkContainer);\r\n//set removal interval .5s\r\n//toggle bookmark image, remove img, add img\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ })));