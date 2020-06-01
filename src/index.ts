import { Bookmark, BookmarkDetails } from "./Bookmark";

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;
let addBookmarkButton = document.getElementById("addBookmarkButton") as HTMLButtonElement;

//take user input
let titleInput = document.getElementById("titleInput") as HTMLInputElement;
let urlInput = document.getElementById("urlInput") as HTMLInputElement;
let newBookmarkDetails = new BookmarkDetails(titleInput.value, urlInput.value);
let newBookmark = new Bookmark(newBookmarkDetails);

console.log(newBookmarkDetails.Title + newBookmarkDetails.URL);

//creates bookmark
const addNewBookmark = () => {
    if (addBookmarkButton != null) {
        newBookmark.Spawn(bookmarkContainer);
    }

    // removes bookmark
    newBookmark.FavouriteButton.addEventListener('click', () => {
        newBookmark.Unfavourite();
    })
}