import { Bookmark } from "./Bookmark.js";
customElements.define("new-bookmark", Bookmark);

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;
let addBookmarkButton = document.getElementById("addBookmarkButton") as HTMLButtonElement;

//default bookmarks
const example1 = new Bookmark("Pokemon Red" ,"https://www.playemulator.com/gb-online/pokemon-red/");
bookmarkContainer.appendChild(example1);
const example2 = new Bookmark("w3schools", "https://www.w3schools.com/css/default.asp");
bookmarkContainer.appendChild(example2);
const example3 = new Bookmark("Labanese Garlic Paste", "https://www.broadsheet.com.au/national/food-and-drink/article/recipe-shane-delias-toum-lebanese-garlic-paste");
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
        const newBookmark = new Bookmark(titleInput.value, urlInput.value);
        bookmarkContainer.appendChild(newBookmark);
        bookmarkList.push(newBookmark);

        //rest
        urlInput.value = "";
        titleInput.value = "";

        bookmarkList.forEach((bookmark) => {
            console.log(bookmark.Title)
        });
    }
}

// removes bookmark
for (let i = 0; i < bookmarkList.length; i++) {
    let intendedBookmark = bookmarkList[i];

    intendedBookmark.ButtonImage.onclick = () => {
        intendedBookmark.Unfavourite();

        //sets and clears timer for removal of bookmark
        let timer;
        
        if (intendedBookmark.Favourite == false) {
            timer = setTimeout(() => {
                intendedBookmark.Bookmark.style.display = "none";
                bookmarkList.splice(i, 1);
            }, 3000);
        }
        else if (intendedBookmark.Favourite == true) {
            clearTimeout(timer);
        }
    }
}
