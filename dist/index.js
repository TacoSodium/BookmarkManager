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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Bookmark = exports.BookmarkDetails = void 0;\r\nclass BookmarkDetails {\r\n    constructor(title, url) {\r\n        this.Favourite = true;\r\n        this.Title = title;\r\n        this.URL = url;\r\n    }\r\n}\r\nexports.BookmarkDetails = BookmarkDetails;\r\nclass Bookmark {\r\n    constructor(newBookmark) {\r\n        this.Bookmark = newBookmark;\r\n        this.FavouriteButton = document.createElement(\"img\");\r\n        this.DivElement = document.createElement(\"div\");\r\n    }\r\n    //spawns new bookmark\r\n    Spawn(id) {\r\n        // creates elements\r\n        let toggleButton = document.createElement(\"button\");\r\n        this.FavouriteButton.src = \"./resources/bookmark-solid.png\";\r\n        let titleDiv = document.createElement(\"div\");\r\n        let urlDiv = document.createElement(\"div\");\r\n        let titleElement = document.createElement(\"h2\");\r\n        let urlElement = document.createElement(\"p\");\r\n        // adds classes\r\n        this.DivElement.classList.add(\"bookmark\", \"roundCorners\");\r\n        titleDiv.classList.add(\"bookmarkHeading\");\r\n        toggleButton.classList.add(\"toggleClass\");\r\n        titleElement.classList.add(\"title\");\r\n        urlDiv.classList.add(\"bookmarkURL\");\r\n        urlElement.classList.add(\"url\");\r\n        //appends toggle button\r\n        if (toggleButton !== null) {\r\n            toggleButton.appendChild(this.FavouriteButton);\r\n            this.DivElement.appendChild(toggleButton);\r\n        }\r\n        //appends title\r\n        if (titleElement !== null && titleDiv !== null) {\r\n            titleElement.appendChild(this.Bookmark.Title);\r\n            titleDiv.appendChild(titleElement);\r\n            this.DivElement.appendChild(titleDiv);\r\n        }\r\n        //appends url\r\n        if (urlElement !== null && urlDiv !== null) {\r\n            urlElement.appendChild(this.Bookmark.URL);\r\n            urlDiv.appendChild(urlElement);\r\n            this.DivElement.appendChild(urlDiv);\r\n        }\r\n        //append bookmark\r\n        id.appendChild(this.DivElement);\r\n    }\r\n    Remove() {\r\n        let bookmarkContainer = document.getElementById(\"bookmarkContainer\");\r\n        //removes new bookmark\r\n        if (this.Bookmark !== null) {\r\n            bookmarkContainer.removeChild(this.DivElement);\r\n        }\r\n    }\r\n    // sets and clears timer for removal of bookmark\r\n    Unfavourite() {\r\n        let timer;\r\n        //changes favourite to false and switches img\r\n        if (this.Bookmark.Favourite == true) {\r\n            this.Bookmark.Favourite = false;\r\n            this.FavouriteButton.src = \"./resources/bookmark-regular.png\";\r\n            //set removal interval .5s\r\n            timer = setTimeout(this.Remove, 5000);\r\n        }\r\n        else if (this.Bookmark.Favourite = false) {\r\n            this.Bookmark.Favourite = true;\r\n            this.FavouriteButton.src = \"./resources/bookmark-solid.png\";\r\n            clearTimeout(timer);\r\n        }\r\n    }\r\n}\r\nexports.Bookmark = Bookmark;\r\n\n\n//# sourceURL=webpack:///./src/Bookmark.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Bookmark_1 = __webpack_require__(/*! ./Bookmark */ \"./src/Bookmark.ts\");\r\nlet bookmarkContainer = document.getElementById(\"bookmarkContainer\");\r\nlet addBookmarkButton = document.getElementById(\"addBookmarkButton\");\r\naddBookmarkButton.addEventListener('click', () => {\r\n    //take user input\r\n    let titleInput = document.getElementById(\"titleInput\");\r\n    let bookmarkTitle = document.createTextNode(titleInput.value);\r\n    let urlInput = document.getElementById(\"urlInput\");\r\n    let bookmarkURL = document.createTextNode(urlInput.value);\r\n    let newBookmarkDetails = new Bookmark_1.BookmarkDetails(bookmarkTitle, bookmarkURL);\r\n    let newBookmark = new Bookmark_1.Bookmark(newBookmarkDetails);\r\n    //creates bookmark\r\n    if (addBookmarkButton !== null) {\r\n        newBookmark.Spawn(bookmarkContainer);\r\n    }\r\n    // removes bookmark\r\n    newBookmark.FavouriteButton.addEventListener('click', () => {\r\n        if (newBookmark !== null) {\r\n            newBookmark.Unfavourite();\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ })));