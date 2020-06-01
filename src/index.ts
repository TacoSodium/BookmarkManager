import { Bookmark, BookmarkDetails } from "./Bookmark";
let bookmarksList: Bookmark[] = [];

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;

//take user input
let titleInput = document.getElementById("titleInput") as HTMLInputElement;
let urlInput = document.getElementById("urlInput") as HTMLInputElement;
let addBookmarkButton = document.getElementById("addBookmarkButton") as HTMLButtonElement;
let newBookmarkDetails = new BookmarkDetails(titleInput.value, urlInput.value);
let newBookmark = new Bookmark(newBookmarkDetails);

//creates bookmark
addBookmarkButton.onclick = () => {
    newBookmark.Spawn(bookmarkContainer);
    bookmarksList.push(newBookmark);
}

// removes bookmark
newBookmark.FavouriteButton.addEventListener('click', () => {
    newBookmark.Unfavourite();
    bookmarksList.slice
})