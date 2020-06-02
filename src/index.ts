import { Bookmark, BookmarkDetails } from "./Bookmark.js";
let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;
let addBookmarkButton = document.getElementById("addBookmarkButton") as HTMLButtonElement;

//default bookmarks
let example1Details = new BookmarkDetails("Pokemon Red", "https://www.playemulator.com/gb-online/pokemon-red/");
let example1 = new Bookmark(example1Details);
example1.Spawn(bookmarkContainer);
let example2Details = new BookmarkDetails("w3schools", "https://www.w3schools.com/css/default.asp");
let example2 = new Bookmark(example2Details);
example2.Spawn(bookmarkContainer);
let example3Details = new BookmarkDetails("Down Dog", "https://www.downdogapp.com/web");
let example3 = new Bookmark(example3Details);
example3.Spawn(bookmarkContainer);

var bookmarkList = new Array(example1Details.URL, example2Details.URL, example1Details.URL);

addBookmarkButton.onclick = () => {
    //take user input
    let titleInput = document.getElementById("titleInput") as HTMLInputElement;
    let urlInput = document.getElementById("urlInput") as HTMLInputElement;

    if (urlInput.value == "" || titleInput.value == "") {
        alert("Your bookmark is missing some details");
    } else {
        //creates bookmark
        let newBookmarkDetails = new BookmarkDetails(titleInput.value, urlInput.value);
        let newBookmark = new Bookmark(newBookmarkDetails);
        newBookmark.Spawn(bookmarkContainer);

        bookmarkList.push(newBookmark.Bookmark.URL);

        //rest
        urlInput.value = "";
        titleInput.value = "";
    }
};

// removes bookmark
// toggleButton.onclick = () => {

// }