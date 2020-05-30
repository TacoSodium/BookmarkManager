import {Bookmark, BookmarkDetails} from "./Bookmark";

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;
let bookmarkDetails = new BookmarkDetails("Prolific");
let newBookmark = new Bookmark(bookmarkDetails);

let bookmarksList: Bookmark[] = [];

//create bookmark favourite = true

//take user input

//append title, node required

//append url, size contraints

//append bookmark
newBookmark.spawn(bookmarkContainer);
bookmarksList.push(newBookmark);

//remove bookmark favourite = false
newBookmark.remove(bookmarkContainer);