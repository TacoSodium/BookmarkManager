export class Bookmark extends HTMLElement {

    Favourite: boolean = true;
    Title: string = "";
    URL: string = "";

    set bookmarktitle(title: string) {
        this.Title = title;
        this._updateRendering();
    }

    set bookmarkurl(url: string) {
        this.URL = url;
        this._updateRendering();
    }

    ButtonImage: HTMLImageElement;
    private _titleElement: HTMLHeadingElement | null;
    private _urlElement: HTMLParagraphElement | null;
    
    constructor() {
        super();
        console.log("Created Bookmark")
        //creates encompasing div
        this.classList.add("bookmark", "roundCorners");

        //creates toggle button
        this.ButtonImage = document.createElement("img");
        this.ButtonImage.src = "./resources/bookmark-solid.png";
        let toggleButton = document.createElement("button");
        toggleButton.classList.add("toggleClass");

        //appends toggle button
        if (toggleButton !== null) {
            toggleButton.appendChild(this.ButtonImage);
            this.appendChild(toggleButton);
        }

        //creates title
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("bookmarkHeading");
        let titleElement = document.createElement("h2");
        this._titleElement = titleElement;
        titleElement.classList.add("title", "ellipses");

        //appends title
        if (titleElement !== null && titleDiv !== null) {
            let bookmarkTitle = document.createTextNode(this.Title);
            titleElement.appendChild(bookmarkTitle);
            titleDiv.appendChild(titleElement);
            this.appendChild(titleDiv);
        }

        //creates url
        let urlDiv = document.createElement("div");
        urlDiv.classList.add("bookmarkURL");
        let urlElement = document.createElement("p");
        this._urlElement = urlElement;
        urlElement.classList.add("url", "ellipses");

        //appends url
        if (urlElement !== null && urlDiv !== null) {
            let bookmarkURL = document.createTextNode(this.URL);
            urlElement.appendChild(bookmarkURL);
            urlDiv.appendChild(urlElement);
            this.appendChild(urlDiv);
        }
    }

    static get observedAttributes() { return ["bookmarktitle", "bookmarkurl"]; };

    attributeChangedCallback(name: string, newValue: string, oldValue: string) {

        if (name == "bookmarktitle") {
            this.bookmarktitle = newValue;
        }

        if (name == "bookmarkurl") {
            this.bookmarkurl = newValue;
        }

        this._updateRendering();
    }

    connectedCallBack() {
        this._updateRendering();
    }

    _updateRendering() {
        if (this._titleElement == null)return;
        let bookmarkTitle = document.createTextNode(this.Title);
        this._titleElement.appendChild(bookmarkTitle);
        
        if(this._urlElement == null) return;
        let bookmarkURL = document.createTextNode(this.URL);
        this._urlElement.appendChild(bookmarkURL);
    }

    //toggles image
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