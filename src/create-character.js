const SECTION_TEMPLATE = document.getElementById("accordion-section");
const ACCORDION = document.getElementById("accordion");
const SPINNER = document.getElementById("loading-spinner");
const ENUM_CARD = document.getElementById("enum-card");

const CHARACTER = new Object(null);
CHARACTER.isCharacter = true;
const CHAR_PREVIEW = document.getElementById("char-preview");
const CHAR_DETAILS = document.getElementById("char-details");

function to_id(name) {
    return name.replaceAll(" ", "-").toLowerCase();
}

/* This should really be a react app */

function createSection(name, contents) {
    let section = SECTION_TEMPLATE.content.cloneNode(true);
    let item = section.querySelector(".accordion-item");
    item.outerHTML = item.outerHTML.replaceAll("!NAME!", name).replaceAll(
        "!ID!",
        to_id(name),
    );
    section.querySelector(".accordion-body").appendChild(contents);
    ACCORDION.appendChild(section);
}

function destroySection(name) {
    document.getElementById(`section-${to_id(name)}`).remove();
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

function addRange(name, min, max, initial, callback) {
    callback(initial);
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
        callback(this.value);
        //CHARACTER[name] = this.value;
        updateCharacterPreviews();
    });
    let div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(range);
    div.appendChild(span);
    createSection(name, div);
}

function addEnum(name, remote, path, transformer) {
    let spinner = SPINNER.content.cloneNode(true);
    let content = document.createElement("div");
    content.appendChild(spinner);
    createSection(name, content);
    remote.fetch(path).then(async (value) => {
        let grid = document.createElement("div");
        grid.setAttribute("class", "row g-3 p-3");
        for (let val of value.results) {
            let data = await remote.fetch(val["url"]);
            if (data === undefined) {
                // hopefully shouldn't happen on live api but my local copy doesn't need to contain the entire database
                continue;
            }
            let entry = await transformer(data);
            let gridEntry = document.createElement("div");
            gridEntry.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
            try {
                gridEntry.appendChild(entry);
            } catch (e) {
                console.error(e);
            }

            grid.appendChild(gridEntry);
        }
        content.innerHTML = "";
        content.appendChild(grid);
    });
}

function addStatPicker(name, remote, path, { num, sides, keep }) {
    CHARACTER[name] = CHARACTER[name] || new Object(null);
    function roll() {
        let results = [];
        for (let i = 0; i < num; i++) {
            results.push(Math.floor(Math.random() * sides) + 1);
        }
        results.sort((a, b) => b - a);
        results.length = keep;
        return results.reduce((p, c) => p + c, 0);
    }
    let spinner = SPINNER.content.cloneNode(true);
    let content = document.createElement("div");
    content.appendChild(spinner);
    createSection(name, content);
    remote.fetch(path).then(async (value) => {
        let grid = document.createElement("div");
        grid.setAttribute("class", "row g-3 p-3");
        console.log(value);
        for (let val of value.results) {
            let data = await remote.fetch(val["url"]);
            if (data === undefined) {
                continue;
            }
            let entry = ENUM_CARD.content.cloneNode(true);
            entry.querySelector(".stretched-link").remove();

            let title = document.createElement("h5");
            title.className = "card-title no-margin";
            title.innerText = data.full_name;
            entry.querySelector(".card-body").appendChild(title);
            entry.querySelector(".card-body").appendChild(
                document.createElement("hr"),
            );
            let text = document.createElement("p");
            text.innerText = data.desc[0];
            entry.querySelector(".card-body").appendChild(text);
            let number = document.createElement("h4");
            number.className = "no-margin text-center";
            entry.querySelector(".card-body").appendChild(number);
            let button = document.createElement("button");
            button.innerText = "Roll";
            button.setAttribute("type", "button");
            button.className = "btn btn-primary";
            button.addEventListener("click", () => {
                let result = roll();
                number.innerText = result.toString();
                CHARACTER[name][data.name] = {
                    name: data.full_name,
                    value: result,
                };
                updateCharacterPreviews();
            });
            entry.querySelector(".card").appendChild(button);

            let gridEntry = document.createElement("div");
            gridEntry.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
            try {
                gridEntry.appendChild(entry);
            } catch (e) {
                console.error(e);
            }
            grid.appendChild(gridEntry);
        }
        content.innerHTML = "";
        content.appendChild(grid);
    });
}

function enumCard(id, shown, expanded, isMulti = false, select = () => {
    console.log("click");
}) {
    let template = ENUM_CARD.content.cloneNode(true);
    let result = template.querySelector(".card-body");
    id = `enum-${id}-content`;
    for (let item of shown) {
        result.appendChild(item);
    }
    let content = document.createElement("div");
    content.setAttribute("id", id);
    content.classList.add("collapse");
    console.log(expanded);
    for (let item of expanded) {
        content.appendChild(item);
    }
    let button = document.createElement("button");
    button.innerText = "Select";
    button.setAttribute("type", "button");
    button.className = "btn btn-outline-primary";
    if (isMulti) {
        button.setAttribute("data-bs-toggle", "button");
    }
    button.addEventListener("click", select);
    template.querySelector(".card").appendChild(button);
    result.appendChild(content);
    result.innerHTML = result.innerHTML.replaceAll("!ID!", id);
    return template;
}

async function quickTrait(remote, path) {
    let content = document.createElement("div");
    let value = await remote.fetch(path);
    if (value !== undefined) {
        content.appendChild(quickSection(value.name, value.desc[0]));
    }
    return content;
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

function saveCharacter() {
    CHARACTER["system"] = SYS;
    let issues = SYSTEMS[SYS].validateCharacter();
    if (issues.length === 0) {
        getStorage().setItem(CHARACTER["Name"], JSON.stringify(CHARACTER));
        window.location.href = `./character-sheet.html#${
            encodeURIComponent(CHARACTER["Name"])
        }`;
    } else {
        let issue_list = document.getElementById("save-fail-reasons");
        issue_list.innerHTML = "";
        for (let issue of issues) {
            let el = document.createElement("li");
            el.innerText = issue;
            issue_list.appendChild(el);
        }
        new bootstrap.Modal(document.getElementById("issuesModal")).show();
    }
}

const SYS = document.location.hash.substring(1) || "dnd";

SYSTEMS[SYS].characterCreation();
updateCharacterPreviews();
