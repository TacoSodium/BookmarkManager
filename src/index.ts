import { Bookmark } from "./Bookmark";
customElements.define("new-bookmark", Bookmark);

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;
let addBookmarkButton = document.getElementById("addBookmarkButton") as HTMLButtonElement;


// default bookmarks
const example1 = new Bookmark();
example1.bookmarktitle = "Pokemon Red";
example1.bookmarkurl = "https://www.playemulator.com/gb-online/pokemon-red/";
//removes bookmark
example1.RemoveBookmark = () => {
    bookmarkContainer.removeChild(example1);
    for (let i = 0; i < bookmarkList.length; i++) {
        if (bookmarkList[i] == example1) {
            bookmarkList.splice(i, 1);
            break;
        }
    }
}
bookmarkContainer.appendChild(example1);

const example2 = new Bookmark();
example2.bookmarktitle = "w3schools";
example2.bookmarkurl = "https://www.w3schools.com/css/default.asp";
//removes bookmark
example2.RemoveBookmark = () => {
    bookmarkContainer.removeChild(example2);
    for (let i = 0; i < bookmarkList.length; i++) {
        if (bookmarkList[i] == example2) {
            bookmarkList.splice(i, 1);
            break;
        }
    }
}
bookmarkContainer.appendChild(example2);

const example3 = new Bookmark();
example3.bookmarktitle = "Lebanese Garlic Paste";
example3.bookmarkurl = "https://www.broadsheet.com.au/national/food-and-drink/article/recipe-shane-delias-toum-lebanese-garlic-paste";
//removes bookmark
example3.RemoveBookmark = () => {
    bookmarkContainer.removeChild(example3);
    for (let i = 0; i < bookmarkList.length; i++) {
        if (bookmarkList[i] == example3) {
            bookmarkList.splice(i, 1);
            break;
        }
    }
}
bookmarkContainer.appendChild(example3);

var bookmarkList = [example1, example2, example3];

addBookmarkButton.onclick = () => {
    //take user input
    let titleInput = document.getElementById("titleInput") as HTMLInputElement;
    let urlInput = document.getElementById("urlInput") as HTMLInputElement;

    if (urlInput.value == "" || titleInput.value == "") {
        alert("Your bookmark is missing some details");
    } else {
        //creates bookmark
        const newBookmark = new Bookmark();
        newBookmark.bookmarktitle = titleInput.value;
        newBookmark.bookmarkurl = urlInput.value;

        //removes bookmark
        newBookmark.RemoveBookmark = () => {
            bookmarkContainer.removeChild(newBookmark);

            for (let i = 0; i < bookmarkList.length; i++) {
                if (bookmarkList[i] == newBookmark) {
                    bookmarkList.splice(i, 1);
                    break;
                }
            }
        }

        bookmarkContainer.appendChild(newBookmark);
        bookmarkList.push(newBookmark);

        //rest
        urlInput.value = "";
        titleInput.value = "";
    }
}
