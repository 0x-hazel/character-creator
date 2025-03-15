const SYSTEMS = {
    "dnd": {
        name: "D&D 5e",
        characterCreation() {
            let remote = new RemoteDataFetcher("https://www.dnd5eapi.co");
            addTextLine("Name", "Your Character's Name");
            addRange("Character Level", 1, 20, 1);
            addEnum("Race", remote.fetch("/api/2014/races"), (value) => {
                let div = document.createElement("div");
                div.setAttribute("class", "card");
                let body = document.createElement("div");
                body.setAttribute("class", "card-body");
                div.appendChild(body);
                let name = document.createElement("h5");
                name.setAttribute("class", "card-title no-margin");
                name.innerText = value.name;
                body.appendChild(name);
                return div;
            });
            addEnum("Class", remote.fetch("/api/2014/classes"), (value) => {
                let div = document.createElement("div");
                div.setAttribute("class", "card");
                let body = document.createElement("div");
                body.setAttribute("class", "card-body");
                div.appendChild(body);
                let name = document.createElement("h5");
                name.setAttribute("class", "card-title no-margin");
                name.innerText = value.name;
                body.appendChild(name);
                return div;
            });
        },
        characterPreview() {
            return basicPreview(
                CHARACTER["Name"] || "Unnamed Character",
                `Level ${CHARACTER["Character Level"]}`,
            );
        },
        characterDetails() {
            return document.createElement("div");
        },
    },
};
