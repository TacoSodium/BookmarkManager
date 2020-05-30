import {Bookmark, BookmarkDetails} from "./Bookmark";

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;
let bookmarkDetails = new BookmarkDetails("Prolific");
let newBookmark = new Bookmark(bookmarkDetails);

//create bookmark favourite = true

//take user input

//append title, node required

//append url, size contraints

//append bookmark
newBookmark.spawn(bookmarkContainer);


//remove bookmark favourite = false
newBookmark.remove(bookmarkContainer);

//set removal interval .5s

//toggle bookmark image, remove img, add img