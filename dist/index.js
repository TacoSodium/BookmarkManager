import { Bookmark, BookmarkDetails } from "./Bookmark.js";
let bookmarkContainer = document.getElementById("bookmarkContainer");
let addBookmarkButton = document.getElementById("addBookmarkButton");
addBookmarkButton.addEventListener('click', () => {
    //take user input
    let titleInput = document.getElementById("titleInput");
    let bookmarkTitle = document.createTextNode(titleInput.value);
    let urlInput = document.getElementById("urlInput");
    let bookmarkURL = document.createTextNode(urlInput.value);
    if (bookmarkURL.nodeValue == "") {
        alert("Your bookmark has no address");
    }
    else {
        let newBookmarkDetails = new BookmarkDetails(bookmarkTitle, bookmarkURL);
        let newBookmark = new Bookmark(newBookmarkDetails);
        //creates bookmark
        newBookmark.Spawn(bookmarkContainer);
        // removes bookmark
        newBookmark.FavouriteButton.addEventListener('click', () => {
            if (newBookmark !== null) {
                newBookmark.Unfavourite();
            }
        });
    }
});
