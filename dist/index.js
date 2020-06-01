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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Bookmark = exports.BookmarkDetails = void 0;\r\nclass BookmarkDetails {\r\n    constructor(title, url) {\r\n        this.Favourite = true;\r\n        this.Title = \"My Bookmark\";\r\n        this.URL = \"\";\r\n        this.Title = title;\r\n        this.URL = url;\r\n    }\r\n}\r\nexports.BookmarkDetails = BookmarkDetails;\r\nclass Bookmark {\r\n    constructor(newBookmark) {\r\n        this.Bookmark = newBookmark;\r\n        this.TitleDiv = document.createElement(\"div\");\r\n        this.URLDiv = document.createElement(\"div\");\r\n    }\r\n    //spawns new bookmark\r\n    Spawn(id) {\r\n        //appends title\r\n        let titleElement = document.createElement(\"h2\");\r\n        let bookmarkTitle = document.createTextNode(this.Bookmark.Title);\r\n        titleElement.appendChild(bookmarkTitle);\r\n        this.TitleDiv.appendChild(titleElement);\r\n        //appends url\r\n        let urlElement = document.createElement(\"p\");\r\n        let bookmarkURL = document.createTextNode(this.Bookmark.URL);\r\n        urlElement.appendChild;\r\n        this.URLDiv.appendChild(urlElement);\r\n        id.appendChild(newBookmark);\r\n    }\r\n    OpenBookmark() {\r\n        //opens new tab\r\n    }\r\n    Remove(id) {\r\n        var _a;\r\n        //removes new bookmark\r\n        if (this.Bookmark == null)\r\n            return;\r\n        id.removeChild(this.Element);\r\n        (_a = this.Element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.Element);\r\n    }\r\n    // sets and clears timer for removal of bookmark\r\n    Unfavourite() {\r\n        let timer;\r\n        //create bookmark favourite = true\r\n        if (this.Bookmark.Favourite == true) {\r\n            this.Bookmark.Favourite = false;\r\n            //set removal interval .5s\r\n            timer = setTimeout(this.Remove, 5000);\r\n        }\r\n        //remove bookmark favourite = false\r\n        else if (this.Bookmark.Favourite = false) {\r\n            this.Bookmark.Favourite = true;\r\n            clearTimeout(timer);\r\n        }\r\n    }\r\n}\r\nexports.Bookmark = Bookmark;\r\n\n\n//# sourceURL=webpack:///./src/Bookmark.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Bookmark_1 = __webpack_require__(/*! ./Bookmark */ \"./src/Bookmark.ts\");\r\nlet bookmarksList = [];\r\nlet bookmarkContainer = document.getElementById(\"bookmarkContainer\");\r\nlet addBookmarkButton = document.getElementById(\"addBookmarkButton\");\r\nlet titleInput = document.getElementById(\"titleInput\");\r\nlet urlInput = document.getElementById(\"urlInput\");\r\nconst addNewBookmark = () => {\r\n    //take user input\r\n    let newBookmarkDetails = new Bookmark_1.BookmarkDetails(titleInput.value, urlInput.value);\r\n    let newBookmark = new Bookmark_1.Bookmark(newBookmarkDetails);\r\n    let bookmarkTitle = document.createElement(\"h2\");\r\n    let bookmarkURL = document.createElement(\"p\");\r\n    //append bookmark\r\n    newBookmark.Spawn(bookmarkContainer);\r\n    bookmarksList.push(newBookmark);\r\n    //toggle bookmark image, remove img, add img\r\n    //button.onclick = () => this.Unfavourite();\r\n    newBookmark.Remove(bookmarkContainer);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ })));