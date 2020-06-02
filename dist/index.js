import { Bookmark, BookmarkDetails } from "./Bookmark.js";
let bookmarkContainer = document.getElementById("bookmarkContainer");
let addBookmarkButton = document.getElementById("addBookmarkButton");
addBookmarkButton.addEventListener('click', () => {
    //take user input
    console.log("test test");
    let titleInput = document.getElementById("titleInput");
    let bookmarkTitle = document.createTextNode(titleInput.value);
    let urlInput = document.getElementById("urlInput");
    let bookmarkURL = document.createTextNode(urlInput.value);
    let newBookmarkDetails = new BookmarkDetails(bookmarkTitle, bookmarkURL);
    let newBookmark = new Bookmark(newBookmarkDetails);
    //creates bookmark
    if (addBookmarkButton !== null) {
        newBookmark.Spawn(bookmarkContainer);
    }
    // removes bookmark
    newBookmark.FavouriteButton.addEventListener('click', () => {
        if (newBookmark !== null) {
            newBookmark.Unfavourite();
        }
    });
});
