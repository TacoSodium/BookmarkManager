export class BookmarkDetails {

    Favourite: boolean = true;
    Title: string;
    URL: string;

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
        titleElement.classList.add("title", "ellipses");
        urlDiv.classList.add("bookmarkURL");
        urlElement.classList.add("url", "ellipses");

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
    }

    //sets and clears timer for removal of bookmark
    Unfavourite() {
        let timer;

        //changes favourite to false and switches img
        if (this.Bookmark.Favourite == true) {
            this.Bookmark.Favourite = false;
            this.FavouriteButton.src = "./resources/bookmark-regular.png";

            //set removal timer
            timer = setTimeout(this.Remove, 5000);
        }
        else if (this.Bookmark.Favourite == false) {
            this.Bookmark.Favourite = true;
            this.FavouriteButton.src = "./resources/bookmark-solid.png";

            clearTimeout(timer);
        }
    }

    //removes bookmark
    private Remove() {
        this.DivElement.remove();
    }
}