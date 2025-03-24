function row(...elements) {
    let div = document.createElement("div");
    div.className = "d-flex flex-row gap-3";
    for (let el of elements) {
        div.appendChild(el);
    }
    return div;
}
function col(...elements) {
    let div = document.createElement("div");
    div.className = "d-flex flex-column gap-3";
    for (let el of elements) {
        div.appendChild(el);
    }
    return div;
}
function flexCol(...elements) {
    let result = col(...elements);
    result.classList.add("flex-1");
    return result;
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
function vr() {
    let result = document.createElement("div");
    result.classList.add("vr");
    return result;
}
function h(num, content) {
    let result = document.createElement(`h${num}`);
    result.innerText = content;
    return result;
}
function button(text, appearance, callback) {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("btn");
    button.classList.add(`btn-${appearance}`);
    button.innerText = text;
    button.addEventListener("click", callback);
    return button;
}

const TEMPLATE = document.getElementById("card-template");
const container = document.getElementById("container");

function blankCard(...contents) {
    let template = TEMPLATE.content.cloneNode(true);
    let body = template.querySelector(".card-body");
    for (let el of contents) {
        body.appendChild(el);
    }
    return template;
}
function titleCard(title, ...contents) {
    let title_el = document.createElement("h5");
    title_el.classList.add("card-title");
    title_el.innerText = title;
    return blankCard(title_el, ...contents);
}

let character = decodeURIComponent(document.location.hash).substring(1);
try {
    character = JSON.parse(getStorage().getItem(character));
    container.appendChild(SYSTEMS[character.system].characterSheet(character));
} catch (e) {
    console.error(e);
    document.location.href = "./index.html";
}
