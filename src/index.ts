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
let example3Details = new BookmarkDetails("Labanese Garlic Paste", "https://www.broadsheet.com.au/national/food-and-drink/article/recipe-shane-delias-toum-lebanese-garlic-paste");
let example3 = new Bookmark(example3Details);
example3.Spawn(bookmarkContainer);

var bookmarkList = new Array(example1, example2, example3);

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

        bookmarkList.push(newBookmark);

        //rest
        urlInput.value = "";
        titleInput.value = "";
    }
};

// removes bookmark
for (let i = 0; i < bookmarkList.length; i++) {

    bookmarkList[i].FavouriteButton.onclick = () => {
        let intendedBookmark = bookmarkList[i];
        let timer;

        intendedBookmark.Unfavourite();

        //sets and clears timer for removal of bookmark
        if (intendedBookmark.Bookmark.Favourite == false) {
            timer = setTimeout(() => {
                intendedBookmark.DivElement.style.display = "none";
                bookmarkList.splice(i, 1);
            }, 5000);
        } else if (intendedBookmark.Bookmark.Favourite == true) {
            clearTimeout(timer);
        }
    }
}