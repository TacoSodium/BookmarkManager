export class Bookmark extends HTMLElement {

    Favourite: boolean = true;
    Title: string = "";
    URL: string = "";

    ButtonImage: HTMLImageElement;
    Bookmark: HTMLDivElement;

    constructor(title: string, url: string) {
        super();
        //creates encompasing div
        this.Bookmark = document.createElement("div");
        this.Bookmark.classList.add("bookmark", "roundCorners");

        //creates toggle button
        this.ButtonImage = document.createElement("img");
        this.ButtonImage.src = "./resources/bookmark-solid.png";
        let toggleButton = document.createElement("button");
        toggleButton.classList.add("toggleClass");

        //appends toggle button
        if (toggleButton !== null) {
            toggleButton.appendChild(this.ButtonImage);
            this.Bookmark.appendChild(toggleButton);
        }

        //creates title
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("bookmarkHeading");
        let titleElement = document.createElement("h2");
        titleElement.classList.add("title", "ellipses");

        //appends title
        if (titleElement !== null && titleDiv !== null) {
            let bookmarkTitle = document.createTextNode(this.Title);
            titleElement.appendChild(bookmarkTitle);
            titleDiv.appendChild(titleElement);
            this.Bookmark.appendChild(titleDiv);
        }

        //creates url
        let urlDiv = document.createElement("div");
        urlDiv.classList.add("bookmarkURL");
        let urlElement = document.createElement("p");
        urlElement.classList.add("url", "ellipses");

        //appends url
        if (urlElement !== null && urlDiv !== null) {
            let bookmarkURL = document.createTextNode(this.URL);
            urlElement.appendChild(bookmarkURL);
            urlDiv.appendChild(urlElement);
            this.Bookmark.appendChild(urlDiv);
        }
    }

    static get observedAttributes() { return []; };

    attributeChangedCallback(name: string, newValue: string, oldValue: string) {

        this._updateRendering();
    }

    connectedCallBack() {
        this._updateRendering();
    }

    _updateRendering() {

    }

    //toggles favourite
    Unfavourite() {
        if (this.Favourite == true) {
            this.Favourite = false;
            this.ButtonImage.src = "./resources/bookmark-regular.png";
        }
        else if (this.Favourite == false) {
            this.Favourite = true;
            this.ButtonImage.src = "./resources/bookmark-solid.png";
        }
    }
}