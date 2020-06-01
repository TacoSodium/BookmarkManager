export class BookmarkDetails {

    Favourite: boolean = true;
    Title: string = "My Bookmark";
    URL: string = "";

    constructor(title: string, url: string) {
        this.Title = title;
        this.URL = url;
    }
}


export class Bookmark {

    Bookmark: BookmarkDetails;
    FavouriteButton: HTMLImageElement;
    DivElement: HTMLDivElement;

    constructor(newBookmark: BookmarkDetails) {
        this.Bookmark = newBookmark;
        this.FavouriteButton = document.createElement("img");
        this.DivElement = document.createElement("div");
    }

    //spawns new bookmark
    Spawn(id: HTMLDivElement) {
        //create bookmark favourite = true
        let toggleButton = document.createElement("button");
        this.FavouriteButton.src = "./resources/bookmark-solid.png";
        //appends toggle button
        toggleButton.appendChild(this.FavouriteButton);
        this.DivElement.appendChild(toggleButton);


        //appends title
        let titleDiv = document.createElement("div");
        let titleElement = document.createElement("h2");
        let bookmarkTitle = document.createTextNode(this.Bookmark.Title);
        titleElement.appendChild(bookmarkTitle);
        titleDiv.appendChild(titleElement);
        this.DivElement.appendChild(titleDiv);


        //appends url
        let urlDiv = document.createElement("div");
        let urlElement = document.createElement("p");
        let bookmarkURL = document.createTextNode(this.Bookmark.URL);
        urlElement.appendChild(bookmarkURL);
        urlDiv.appendChild(urlElement);
        this.DivElement.appendChild(urlDiv);


        //append bookmark
        id.appendChild(this.DivElement);
    }

    OpenBookmark() {
        //opens new tab
    }

    private Remove(id: HTMLDivElement) {
        //removes new bookmark
        if (this.Bookmark == null) {
            return;
        } else {
            id.removeChild(this.DivElement);
        }
    }

    // sets and clears timer for removal of bookmark
    Unfavourite() {
        let timer;

        if (this.Bookmark.Favourite == true) {

            this.Bookmark.Favourite = false;
            this.FavouriteButton.src = "./resources/bookmark-regular.png";

            //set removal interval .5s
            timer = setTimeout(this.Remove, 5000);
        }
        //remove bookmark favourite = false
        else if (this.Bookmark.Favourite = false) {
            this.Bookmark.Favourite = true;
            this.FavouriteButton.src = "./resources/bookmark-solid.png";

            clearTimeout(timer);
        }
    }
}