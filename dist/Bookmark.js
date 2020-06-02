export class BookmarkDetails {
    constructor(title, url) {
        this.Favourite = true;
        this.Title = title;
        this.URL = url;
    }
    CutTitle() {
        if (this.Title.length > 16) {
            this.Title.slice(-12);
            this.Title += "...";
        }
    }
    CutURL() {
        if (this.URL.length > 24) {
            this.URL.slice(-21);
            this.URL += "...";
        }
    }
}
export class Bookmark {
    constructor(newBookmark) {
        this.Bookmark = newBookmark;
        this.FavouriteButton = document.createElement("img");
        this.DivElement = document.createElement("div");
    }
    //spawns new bookmark
    Spawn(id) {
        // creates elements
        let toggleButton = document.createElement("button");
        this.FavouriteButton.src = "./resources/bookmark-solid.png";
        let titleDiv = document.createElement("div");
        let urlDiv = document.createElement("div");
        let titleElement = document.createElement("h2");
        let urlElement = document.createElement("p");
        // adds classes
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
        if (titleElement !== null && titleDiv !== null) {
            let bookmarkTitle = document.createTextNode(this.Bookmark.Title);
            titleElement.appendChild(bookmarkTitle);
            titleDiv.appendChild(titleElement);
            this.DivElement.appendChild(titleDiv);
        }
        //appends url
        if (urlElement !== null && urlDiv !== null) {
            let bookmarkURL = document.createTextNode(this.Bookmark.URL);
            urlElement.appendChild(bookmarkURL);
            urlDiv.appendChild(urlElement);
            this.DivElement.appendChild(urlDiv);
        }
        //append bookmark
        id.appendChild(this.DivElement);
        this.Bookmark.CutTitle();
        this.Bookmark.CutURL();
    }
    Remove() {
        let bookmarkContainer = document.getElementById("bookmarkContainer");
        //removes new bookmark
        if (this.Bookmark !== null) {
            bookmarkContainer.removeChild(this.DivElement);
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
        else {
            this.Bookmark.Favourite = true;
            this.FavouriteButton.src = "./resources/bookmark-solid.png";
            clearTimeout(timer);
        }
    }
}
