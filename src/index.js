const cardList = document.getElementById("card-list");
const TEMPLATE = document.getElementById("card-template");

for (let i = 0; i < getStorage().length; i++) {
    try {
        let data = JSON.parse(getStorage().getItem(getStorage().key(i)));
        if (!data.isCharacter) {
            throw new Error("Non-character data in storage");
        }
        let template = TEMPLATE.content.cloneNode(true);
        SYSTEMS[data.system].indexCard(data, template);
        cardList.insertBefore(template, cardList.firstChild);
    } catch (e) {
        console.warn(e);
        // I have at least one extension that stores things in storage so I'm not going to worry too much
        // about non-character data in the storage
    }
}
