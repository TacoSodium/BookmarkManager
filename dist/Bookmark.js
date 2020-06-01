"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmark = exports.BookmarkDetails = void 0;
class BookmarkDetails {
    constructor(title, url) {
        this.Favourite = true;
        this.Title = "My Bookmark";
        this.URL = "";
        this.Title = title;
        this.URL = url;
    }
}
exports.BookmarkDetails = BookmarkDetails;
class Bookmark {
    constructor(newBookmark) {
        this.Bookmark = newBookmark;
        this.FavouriteButton = document.createElement("img");
        this.DivElement = document.createElement("div");
    }
    //spawns new bookmark
    Spawn(id) {
        this.DivElement.classList.add("bookmark", "roundCorners");
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("bookmarkHeading");
        //create bookmark favourite = true
        let toggleButton = document.createElement("button");
        toggleButton.classList.add("toggleClass");
        this.FavouriteButton.src = "./resources/bookmark-solid.png";
        //appends toggle button
        toggleButton.appendChild(this.FavouriteButton);
        this.DivElement.appendChild(toggleButton);
        let titleElement = document.createElement("h2");
        titleElement.classList.add("title");
        //appends title
        let bookmarkTitle = document.createTextNode(this.Bookmark.Title);
        titleElement.appendChild(bookmarkTitle);
        titleDiv.appendChild(titleElement);
        this.DivElement.appendChild(titleDiv);
        let urlDiv = document.createElement("div");
        urlDiv.classList.add("bookmarkURL");
        let urlElement = document.createElement("p");
        urlElement.classList.add("url");
        //appends url
        let bookmarkURL = document.createTextNode(this.Bookmark.URL);
        urlElement.appendChild(bookmarkURL);
        urlDiv.appendChild(urlElement);
        this.DivElement.appendChild(urlDiv);
        //append bookmark
        id.appendChild(this.DivElement);
    }
    Remove(id) {
        //removes new bookmark
        if (this.Bookmark == null) {
            return;
        }
        else {
            id.removeChild(this.DivElement);
        }
    }
    // sets and clears timer for removal of bookmark
    Unfavourite() {
        let timer;
        //changes favourite to false and switches img
        if (this.Bookmark.Favourite == true) {
            this.Bookmark.Favourite = false;
            this.FavouriteButton.src = "./resources/bookmark-regular.png";
            //set removal interval .5s
            timer = setTimeout(this.Remove, 5000);
        }
        else if (this.Bookmark.Favourite = false) {
            this.Bookmark.Favourite = true;
            this.FavouriteButton.src = "./resources/bookmark-solid.png";
            clearTimeout(timer);
        }
    }
}
exports.Bookmark = Bookmark;
