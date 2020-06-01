"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bookmark_1 = require("./Bookmark");
let bookmarkContainer = document.getElementById("bookmarkContainer");
let addBookmarkButton = document.getElementById("addBookmarkButton");
//take user input
let titleInput = document.getElementById("titleInput");
let urlInput = document.getElementById("urlInput");
let newBookmarkDetails = new Bookmark_1.BookmarkDetails(titleInput.value, urlInput.value);
let newBookmark = new Bookmark_1.Bookmark(newBookmarkDetails);
console.log(newBookmarkDetails.Title + newBookmarkDetails.URL);
//creates bookmark
const addNewBookmark = () => {
    if (addBookmarkButton != null) {
        newBookmark.Spawn(bookmarkContainer);
    }
    // removes bookmark
    newBookmark.FavouriteButton.addEventListener('click', () => {
        newBookmark.Unfavourite();
    });
};
