const SECTION_TEMPLATE = document.getElementById("accordion-section");
const ACCORDION = document.getElementById("accordion");
const SPINNER = document.getElementById("loading-spinner");

const CHARACTER = new Object(null);
const CHAR_PREVIEW = document.getElementById("char-preview");
const CHAR_DETAILS = document.getElementById("char-details");

function to_id(name) {
    return name.replaceAll(" ", "-").toLowerCase();
}

/* This should really be a react app */

function createSection(name, contents) {
    let section = SECTION_TEMPLATE.content.cloneNode(true);
    let item = section.querySelector(".accordion-item");
    item.innerHTML = item.innerHTML.replaceAll("!NAME!", name).replaceAll(
        "!ID!",
        to_id(name),
    );
    section.querySelector(".accordion-body").appendChild(contents);
    ACCORDION.appendChild(section);
}

function addTextLine(name, placeholder) {
    CHARACTER[name] = "";
    let id = `textline-${to_id(name)}`;
    let label = document.createElement("label");
    label.classList.add("d-block");
    label.setAttribute("for", id);
    label.innerText = name;
    let input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", placeholder);
    input.addEventListener("input", function () {
        CHARACTER[name] = this.value;
        updateCharacterPreviews();
    });
    let div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(input);
    createSection(name, div);
}

function addRange(name, min, max, initial) {
    CHARACTER[name] = initial;
    let id = `range-${to_id(name)}`;
    let label = document.createElement("label");
    label.classList.add("d-block");
    label.setAttribute("for", id);
    label.innerText = name;
    let range = document.createElement("input");
    range.setAttribute("id", id);
    range.setAttribute("type", "range");
    range.setAttribute("min", min);
    range.setAttribute("max", max);
    range.value = initial;
    let span = document.createElement("span");
    span.setAttribute("id", `${id}-display`);
    span.innerText = initial;
    range.addEventListener("input", function () {
        span.innerText = this.value;
        CHARACTER[name] = this.value;
        updateCharacterPreviews();
    });
    let div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(range);
    div.appendChild(span);
    createSection(name, div);
}

function addEnum(name, path, transformer) {
    let spinner = SPINNER.content.cloneNode(true);
    let content = document.createElement("div");
    content.appendChild(spinner);
    createSection(name, content);
    path.then(async (value) => {
        let grid = document.createElement("div");
        grid.setAttribute("class", "row g-3 p-3");
        for (let val of value.results) {
            let entry = transformer(val);
            let gridEntry = document.createElement("div");
            gridEntry.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
            gridEntry.appendChild(entry);
            grid.appendChild(gridEntry);
        }
        content.innerHTML = "";
        content.appendChild(grid);
    });
}

// https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
const toBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

function characterIcon() {
    let icon = document.createElement("img");
    icon.classList.add("icon");
    icon.setAttribute("src", CHARACTER.avatar || "asset/icon.svg");
    icon.addEventListener("click", () => {
        let inputElement = document.createElement("input");
        inputElement.type = "file";
        inputElement.accept = "image/*";
        inputElement.addEventListener("change", function () {
            toBase64(this.files[0]).then((value) => {
                CHARACTER.avatar = value;
                updateCharacterPreviews();
            });
        });
        inputElement.dispatchEvent(new MouseEvent("click"));
    });
    return icon;
}

function basicPreview(title, subtitle) {
    let main = document.createElement("div");
    main.setAttribute(
        "class",
        "d-flex flex-row g-2 p-2 gap-3 align-items-center",
    );
    main.appendChild(characterIcon());
    let text = document.createElement("div");
    text.setAttribute("flex", 1);
    let title_element = document.createElement("h2");
    title_element.innerText = title;
    let subtitle_element = document.createElement("h3");
    subtitle_element.innerText = subtitle;
    text.appendChild(title_element);
    text.appendChild(subtitle_element);
    main.appendChild(text);
    return main;
}

function updateCharacterPreviews() {
    CHAR_PREVIEW.innerHTML = "";
    CHAR_PREVIEW.appendChild(SYSTEMS[SYS].characterPreview());
    CHAR_DETAILS.innerHTML = "";
    CHAR_DETAILS.appendChild(SYSTEMS[SYS].characterDetails());
}

const SYS = document.location.hash.substring(1) || "dnd";

SYSTEMS[SYS].characterCreation();
updateCharacterPreviews();
