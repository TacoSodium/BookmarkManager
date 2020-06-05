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
/*! exports provided: Bookmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bookmark\", function() { return Bookmark; });\nclass Bookmark extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        this.Favourite = true;\r\n        this.Title = \"\";\r\n        this.URL = \"\";\r\n        this.Timer = 0;\r\n        this.RemoveBookmark = null;\r\n        this.classList.add(\"bookmark\", \"roundCorners\");\r\n        //creates toggle button\r\n        this.ButtonImage = document.createElement(\"img\");\r\n        this.ButtonImage.src = \"./resources/bookmark-solid.png\";\r\n        this.ButtonImage.onclick = () => {\r\n            if (this.ButtonImage == null)\r\n                return;\r\n            this.Unfavourite();\r\n        };\r\n        let toggleButton = document.createElement(\"button\");\r\n        toggleButton.classList.add(\"toggleClass\");\r\n        //appends toggle button\r\n        if (toggleButton !== null) {\r\n            toggleButton.appendChild(this.ButtonImage);\r\n            this.appendChild(toggleButton);\r\n        }\r\n        //creates title\r\n        let titleDiv = document.createElement(\"div\");\r\n        titleDiv.classList.add(\"bookmarkHeading\");\r\n        let titleElement = document.createElement(\"h2\");\r\n        this._titleElement = titleElement;\r\n        titleElement.classList.add(\"title\", \"ellipses\");\r\n        //appends title\r\n        if (titleElement !== null && titleDiv !== null) {\r\n            let bookmarkTitle = document.createTextNode(this.Title);\r\n            titleElement.appendChild(bookmarkTitle);\r\n            titleDiv.appendChild(titleElement);\r\n            this.appendChild(titleDiv);\r\n        }\r\n        //creates url\r\n        let urlDiv = document.createElement(\"div\");\r\n        urlDiv.classList.add(\"bookmarkURL\");\r\n        let urlElement = document.createElement(\"p\");\r\n        this._urlElement = urlElement;\r\n        urlElement.classList.add(\"url\", \"ellipses\");\r\n        //appends url\r\n        if (urlElement !== null && urlDiv !== null) {\r\n            let bookmarkURL = document.createTextNode(this.URL);\r\n            urlElement.appendChild(bookmarkURL);\r\n            urlDiv.appendChild(urlElement);\r\n            this.appendChild(urlDiv);\r\n        }\r\n    }\r\n    set bookmarktitle(title) {\r\n        this.Title = title;\r\n    }\r\n    set bookmarkurl(url) {\r\n        this.URL = url;\r\n        this._updateRendering();\r\n    }\r\n    static get observedAttributes() { return [\"bookmarktitle\", \"bookmarkurl\"]; }\r\n    ;\r\n    attributeChangedCallback(name, newValue, oldValue) {\r\n        if (name == \"bookmarktitle\") {\r\n            this.bookmarktitle = newValue;\r\n        }\r\n        if (name == \"bookmarkurl\") {\r\n            this.bookmarkurl = newValue;\r\n        }\r\n        this._updateRendering();\r\n    }\r\n    connectedCallBack() {\r\n        this._updateRendering();\r\n    }\r\n    _updateRendering() {\r\n        if (this._titleElement == null)\r\n            return;\r\n        let bookmarkTitle = document.createTextNode(this.Title);\r\n        this._titleElement.appendChild(bookmarkTitle);\r\n        if (this._urlElement == null)\r\n            return;\r\n        let bookmarkURL = document.createTextNode(this.URL);\r\n        this._urlElement.appendChild(bookmarkURL);\r\n    }\r\n    //toggles image\r\n    Unfavourite() {\r\n        if (this.Favourite == true) {\r\n            this.Timer = setTimeout(() => {\r\n                if (this.RemoveBookmark == null)\r\n                    return;\r\n                this.RemoveBookmark();\r\n            }, 3000);\r\n            this.Favourite = false;\r\n            this.ButtonImage.src = \"./resources/bookmark-regular.png\";\r\n        }\r\n        else if (this.Favourite == false) {\r\n            clearTimeout(this.Timer);\r\n            this.Favourite = true;\r\n            this.ButtonImage.src = \"./resources/bookmark-solid.png\";\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Bookmark.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Bookmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bookmark */ \"./src/Bookmark.ts\");\n\r\ncustomElements.define(\"new-bookmark\", _Bookmark__WEBPACK_IMPORTED_MODULE_0__[\"Bookmark\"]);\r\nlet bookmarkContainer = document.getElementById(\"bookmarkContainer\");\r\nlet addBookmarkButton = document.getElementById(\"addBookmarkButton\");\r\n// default bookmarks\r\nconst example1 = new _Bookmark__WEBPACK_IMPORTED_MODULE_0__[\"Bookmark\"]();\r\nexample1.bookmarktitle = \"Pokemon Red\";\r\nexample1.bookmarkurl = \"https://www.playemulator.com/gb-online/pokemon-red/\";\r\n//removes bookmark\r\nexample1.RemoveBookmark = () => {\r\n    bookmarkContainer.removeChild(example1);\r\n    for (let i = 0; i < bookmarkList.length; i++) {\r\n        if (bookmarkList[i] == example1) {\r\n            bookmarkList.splice(i, 1);\r\n            break;\r\n        }\r\n    }\r\n};\r\nbookmarkContainer.appendChild(example1);\r\nconst example2 = new _Bookmark__WEBPACK_IMPORTED_MODULE_0__[\"Bookmark\"]();\r\nexample2.bookmarktitle = \"w3schools\";\r\nexample2.bookmarkurl = \"https://www.w3schools.com/css/default.asp\";\r\n//removes bookmark\r\nexample2.RemoveBookmark = () => {\r\n    bookmarkContainer.removeChild(example2);\r\n    for (let i = 0; i < bookmarkList.length; i++) {\r\n        if (bookmarkList[i] == example2) {\r\n            bookmarkList.splice(i, 1);\r\n            break;\r\n        }\r\n    }\r\n};\r\nbookmarkContainer.appendChild(example2);\r\nconst example3 = new _Bookmark__WEBPACK_IMPORTED_MODULE_0__[\"Bookmark\"]();\r\nexample3.bookmarktitle = \"Lebanese Garlic Paste\";\r\nexample3.bookmarkurl = \"https://www.broadsheet.com.au/national/food-and-drink/article/recipe-shane-delias-toum-lebanese-garlic-paste\";\r\n//removes bookmark\r\nexample3.RemoveBookmark = () => {\r\n    bookmarkContainer.removeChild(example3);\r\n    for (let i = 0; i < bookmarkList.length; i++) {\r\n        if (bookmarkList[i] == example3) {\r\n            bookmarkList.splice(i, 1);\r\n            break;\r\n        }\r\n    }\r\n};\r\nbookmarkContainer.appendChild(example3);\r\nvar bookmarkList = [example1, example2, example3];\r\naddBookmarkButton.onclick = () => {\r\n    //take user input\r\n    let titleInput = document.getElementById(\"titleInput\");\r\n    let urlInput = document.getElementById(\"urlInput\");\r\n    if (urlInput.value == \"\" || titleInput.value == \"\") {\r\n        alert(\"Your bookmark is missing some details\");\r\n    }\r\n    else {\r\n        //creates bookmark\r\n        const newBookmark = new _Bookmark__WEBPACK_IMPORTED_MODULE_0__[\"Bookmark\"]();\r\n        newBookmark.bookmarktitle = titleInput.value;\r\n        newBookmark.bookmarkurl = urlInput.value;\r\n        //removes bookmark\r\n        newBookmark.RemoveBookmark = () => {\r\n            bookmarkContainer.removeChild(newBookmark);\r\n            for (let i = 0; i < bookmarkList.length; i++) {\r\n                if (bookmarkList[i] == newBookmark) {\r\n                    bookmarkList.splice(i, 1);\r\n                    break;\r\n                }\r\n            }\r\n        };\r\n        bookmarkContainer.appendChild(newBookmark);\r\n        bookmarkList.push(newBookmark);\r\n        //rest\r\n        urlInput.value = \"\";\r\n        titleInput.value = \"\";\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ })));