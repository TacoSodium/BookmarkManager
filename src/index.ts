import { Bookmark, BookmarkDetails } from "./Bookmark";
let bookmarksList: Bookmark[] = [];

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;

//take user input
let titleInput = document.getElementById("titleInput") as HTMLInputElement;
let urlInput = document.getElementById("urlInput") as HTMLInputElement;
let newBookmarkDetails = new BookmarkDetails(titleInput.value, urlInput.value);
let newBookmark = new Bookmark(newBookmarkDetails);

const addNewBookmark = () => {

    //append bookmark
    newBookmark.Spawn(bookmarkContainer);
    bookmarksList.push(newBookmark);

    //toggle bookmark image, remove img, add img

    //button.onclick = () => this.Unfavourite();
    newBookmark.Unfavourite();
}