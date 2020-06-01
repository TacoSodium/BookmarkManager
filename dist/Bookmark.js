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
        let toggleButton = document.createElement("button");
        this.FavouriteButton.src = "./resources/bookmark-solid.png";
        let titleDiv = document.createElement("div");
        let urlDiv = document.createElement("div");
        let titleElement = document.createElement("h2");
        let urlElement = document.createElement("p");
        this.DivElement.classList.add("bookmark", "roundCorners");
        titleDiv.classList.add("bookmarkHeading");
        toggleButton.classList.add("toggleClass");
        titleElement.classList.add("title");
        urlDiv.classList.add("bookmarkURL");
        urlElement.classList.add("url");
        //appends toggle button
        if (toggleButton !== null) {
            toggleButton.appendChild(this.FavouriteButton);
            this.DivElement.appendChild(toggleButton);
        }
        //appends title
        let bookmarkTitle = document.createTextNode(this.Bookmark.Title);
        if (titleElement !== null && titleDiv !== null) {
            titleElement.appendChild(bookmarkTitle);
            titleDiv.appendChild(titleElement);
            this.DivElement.appendChild(titleDiv);
        }
        //appends url
        let bookmarkURL = document.createTextNode(this.Bookmark.URL);
        if (urlElement !== null && urlDiv !== null) {
            urlElement.appendChild(bookmarkURL);
            urlDiv.appendChild(urlElement);
            this.DivElement.appendChild(urlDiv);
        }
        //append bookmark
        id.appendChild(this.DivElement);
    }
    Remove(id) {
        //removes new bookmark
        if (this.Bookmark !== null) {
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
