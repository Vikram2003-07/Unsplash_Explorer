const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMorebtn = document.getElementById("more-btn");
const accesskey = "NEj7xt9G8s5axEmenkRIt64VhUftfIcnWjG_cDg4Qyc";
const traverseBack = document.getElementById("traverse-back");

let keyword = '';
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page == 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {                         //displaing images in our website
        const img = document.createElement('img');
        img.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(img);// appending image to anchor tag
        searchResult.appendChild(imageLink);//append the images in our website

        showMorebtn.style.display = "block";
        traverseBack.style.display = "block";
    })
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();//prevent default_feature of form
    page = 1;
    searchImage();
});

showMorebtn.addEventListener('click', () => {
    page++;
    searchImage();
})
