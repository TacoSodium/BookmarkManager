export class BookmarkDetails {

    Title: string;
    Icon: string = "";
    Favourite: boolean = true;

    constructor(title: string) {
        this.Title = title;
    }

    SetURL(url: string) {
        //sets url
    }

    GetURL() {
        //opens new tab        
    }
}

export class Bookmark {

    Bookmark: BookmarkDetails;
    Element: HTMLElement;


    constructor(newBookmark: BookmarkDetails) {
        this.Bookmark = newBookmark;
        this.Element = document.createElement("div");
    }

    spawn(id: HTMLDivElement) { 
        //spawns new bookmark
        this.Element.appendChild(document.createTextNode(this.Bookmark.Title));
        id.appendChild(this.Element);
    }

    remove(id: HTMLDivElement) {
        //removes new bookmark
        if (this.Bookmark == null) return;
        id.removeChild(this.Element);
    }
}