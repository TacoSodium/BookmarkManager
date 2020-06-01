"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bookmark_1 = require("./Bookmark");
let bookmarksList = [];
let bookmarkContainer = document.getElementById("bookmarkContainer");
//take user input
let titleInput = document.getElementById("titleInput");
let urlInput = document.getElementById("urlInput");
let addBookmarkButton = document.getElementById("addBookmarkButton");
let newBookmarkDetails = new Bookmark_1.BookmarkDetails(titleInput.value, urlInput.value);
let newBookmark = new Bookmark_1.Bookmark(newBookmarkDetails);
//creates bookmark
addBookmarkButton.onclick = () => {
    newBookmark.Spawn(bookmarkContainer);
    bookmarksList.push(newBookmark);
};
// removes bookmark
newBookmark.FavouriteButton.addEventListener('click', () => {
    newBookmark.Unfavourite();
});
