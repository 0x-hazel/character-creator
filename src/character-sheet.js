function row(...elements) {
    let div = document.createElement("div");
    div.className = "d-flex flex-row";
    for (let el of elements) {
        div.appendChild(el);
    }
    return div;
}
function col(...elements) {
    let div = document.createElement("div");
    div.className = "d-flex flex-column";
    for (let el of elements) {
        div.appendChild(el);
    }
    return div;
}
function spacer() {
    let div = document.createElement("div");
    div.classList.add("flex-grow-1");
    return div;
}
function icon(avatar) {
    let img = document.createElement("img");
    img.classList.add("character-icon");
    img.setAttribute("src", avatar ? avatar : "asset/icon.svg");
    return img;
}
function p(text) {
    let p = document.createElement("p");
    p.innerText = text;
    return p;
}

const TEMPLATE = document.getElementById("card-template");
const container = document.getElementById("container");

function blankCard(...contents) {
    let template = TEMPLATE.content.cloneNode(true);
    let body = template.querySelector(".card-body");
    for (let el of contents) {
        body.appendChild(el);
    }
    container.appendChild(template);
}
function titleCard(title, ...contents) {
    let title_el = document.createElement("h5");
    title_el.classList.add("card-title");
    title_el.innerText = title;
    blankCard(title_el, ...contents);
}

let character = document.location.hash.substring(1);
try {
    character = JSON.parse(getStorage().getItem(character));
    SYSTEMS[character.system].characterSheet(character);
} catch (e) {
    console.error(e);
}
