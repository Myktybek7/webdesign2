const imgElement = document.querySelector("img");

const img1URL = "..\my-first-site\img\alatoo-icon.png";
const img2URL = "..\my-first-site\img\klipartz.com.png";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src", img2URL);
    }
    else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;