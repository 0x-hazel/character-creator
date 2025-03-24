const SYSTEMS = {
    "dnd": {
        name: "D&D 5e",
        characterCreation() {
            let remote = new RemoteDataFetcher("https://www.dnd5eapi.co");
            addTextLine("Name", "Your Character's Name");
            addRange(
                "Character Level",
                1,
                20,
                1,
                (lv) => CHARACTER["Level"] = lv,
            );
            addEnum("Race", remote, "/api/2014/races", async (value) => {
                let name = document.createElement("h5");
                name.setAttribute("class", "card-title no-margin");
                name.innerText = value.name;
                let traits = await Promise.all(
                    value.traits.map(async (trait) =>
                        await quickTrait(remote, trait.url)
                    ),
                );
                console.log(traits);
                return enumCard(
                    value.index,
                    [name],
                    [
                        document.createElement("hr"),
                        quickTable(
                            "Ability Bonuses",
                            value.ability_bonuses.map(
                                (
                                    x,
                                ) => [
                                    x.ability_score.name,
                                    (x.bonus > 0) ? `+${x.bonus}` : x.bonus,
                                ],
                            ),
                        ),
                        ...traits,
                        quickStat("Speed", value.speed),
                        quickSection("Age", value.age),
                        quickSection("Size", value.size_description),
                        quickSection("Language", value.language_desc),
                    ],
                    false,
                    () => {
                        CHARACTER["Race"] = value.name;
                        CHARACTER["Race Bonuses"] = new Object(null);
                        CHARACTER["Languages"] = value.languages.map((x) =>
                            x.name
                        );
                        value.ability_bonuses.forEach(
                            (x) =>
                                CHARACTER["Race Bonuses"][
                                    x.ability_score.name
                                ] = x.bonus,
                        );
                        CHARACTER["Size"] = value.size;
                        CHARACTER["Speed"] = value.speed;
                        Promise.all(
                            value.traits.map(async (trait) =>
                                remote.fetch(trait.url)
                            ),
                        ).then((x) => {
                            CHARACTER["Traits"] = x.map((value) => ({
                                name: value.name,
                                desc: value.desc[0],
                            }));
                        });
                        updateCharacterPreviews();
                    },
                );
            });
            CHARACTER["Class"] = new Object(null);
            addEnum("Class", remote, "/api/2014/classes", async (value) => {
                let name = document.createElement("h5");
                name.setAttribute("class", "card-title no-margin class-title");
                name.innerText = value.name;
                let icon = document.createElement("img");
                icon.classList.add("class-icon");
                icon.setAttribute(
                    "src",
                    `asset/DnD5E_ClassSymb_${value.name}.webp`,
                );
                icon.setAttribute("test", "test");
                return enumCard(
                    value.index,
                    [icon, name],
                    [
                        document.createElement("hr"),
                        quickStat("Hit Die", `d${value.hit_die}`),
                        quickSection(
                            "Skill Proficiencies",
                            value.proficiency_choices[0].desc,
                        ),
                        quickList(
                            "Proficiencies",
                            value.proficiencies.map((x) => x.name),
                        ),
                        quickList(
                            "Starting Equipment",
                            [
                                ...value.starting_equipment.map((x) =>
                                    x.equipment.name
                                ),
                                value.starting_equipment_options[0].desc,
                            ],
                        ),
                    ],
                    true,
                    () => {
                        if (Object.hasOwn(CHARACTER["Class"], value.name)) {
                            delete CHARACTER["Class"][value.name];
                            if (CHARACTER["Class"].length === 0) {
                                delete CHARACTER["Hit Die"];
                            }
                            for (
                                let entry of value.proficiencies.map((x) =>
                                    x.name
                                )
                            ) {
                                CHARACTER["Proficiencies"] = removeFrom(
                                    CHARACTER["Proficiencies"],
                                    entry,
                                );
                            }
                            for (
                                let entry of value.starting_equipment.map((x) =>
                                    x.equipment.name
                                )
                            ) {
                                CHARACTER["Equipment"] = removeFrom(
                                    CHARACTER["Equipment"],
                                    entry,
                                );
                            }
                            destroySection(`${value.name} Level`);
                        } else {
                            CHARACTER["Class"][value.name] = 1;
                            addRange(
                                `${value.name} Level`,
                                1,
                                20,
                                1,
                                (lv) => CHARACTER["Class"][value.name] = lv,
                            );
                            CHARACTER["Hit Die"] = CHARACTER["Hit Die"] ||
                                value.hit_die;
                            CHARACTER["Proficiencies"] =
                                (CHARACTER["Proficiencies"] || []).concat(
                                    value.proficiencies
                                        .map((x) => x.name),
                                );
                            CHARACTER["Equipment"] =
                                (CHARACTER["Equipment"] || []).concat(
                                    value.starting_equipment
                                        .map((x) => x.equipment.name),
                                );
                        }
                        updateCharacterPreviews();
                    },
                );
            });
            addStatPicker(
                "Ability Scores",
                remote,
                "/api/2014/ability-scores",
                { num: 4, sides: 6, keep: 3 },
            );
        },
        indexCard(character, card) {
            card.querySelector(".logo").setAttribute(
                "src",
                `asset/${character.system}-logo.png`,
            );
            card.querySelector(".card-title").innerText = character["Name"];
            if (Object.hasOwn(character, "avatar")) {
                card.querySelector(".character-icon").setAttribute(
                    "src",
                    character["avatar"],
                );
            }
            card.querySelector(".card-subtitle").innerText = `Level ${
                character["Level"]
            } ${character["Race"]} ${Object.keys(character["Class"])[0]}`;
            card.querySelector(".stretched-link").setAttribute(
                "href",
                `character-sheet.html#${character["Name"]}`,
            );
        },
        characterPreview() {
            return basicPreview(
                CHARACTER["Name"] || "Unnamed Character",
                `Level ${CHARACTER["Level"]}`,
            );
        },
        validateCharacter() {
            let result = [];
            if (CHARACTER["Name"].trim().length === 0) {
                result.push("Character needs a name");
            }
            if (CHARACTER["Race"] === undefined) {
                result.push("Character doesn't have a race");
            }
            if (Object.keys(CHARACTER["Class"]).length === 0) {
                result.push("Character doesn't have a class");
            }
            if (
                Object.keys(CHARACTER["Class"]).reduce(
                    (prev, curr) => prev + CHARACTER["Class"][curr],
                    0,
                ) > CHARACTER["Level"]
            ) {
                result.push(
                    "Character has more class levels than character levels",
                );
            }
            for (let stat of ["STR", "DEX", "CON", "INT", "WIS", "CHA"]) {
                let data = CHARACTER["Ability Scores"][stat];
                if (data === undefined) {
                    result.push(`Character has no ${stat} stat`);
                }
            }
            return result;
        },
        characterDetails() {
            let result = document.createElement("div");
            let race = document.createElement("p");
            race.innerText = CHARACTER["Race"] || "";
            result.appendChild(race);
            let classes = document.createElement("p");
            classes.innerText = Object.keys(CHARACTER["Class"]).map((x) =>
                `${x} Level ${CHARACTER["Class"][x]}`
            ).join(", ");
            result.appendChild(classes);
            if (CHARACTER["Ability Scores"] !== undefined) {
                let stats = document.createElement("ul");
                for (let stat of ["STR", "DEX", "CON", "INT", "WIS", "CHA"]) {
                    let data = CHARACTER["Ability Scores"][stat];
                    if (data !== undefined) {
                        let item = document.createElement("li");
                        let name = document.createElement("b");
                        name.innerText = `${data.name}: `;
                        item.appendChild(name);
                        let value = data.value.toString();
                        if (
                            CHARACTER["Race Bonuses"] !== undefined &&
                            CHARACTER["Race Bonuses"][stat] !== undefined
                        ) {
                            value += ` + ${CHARACTER["Race Bonuses"][stat]}`;
                        }
                        item.appendChild(document.createTextNode(value));
                        stats.appendChild(item);
                    }
                }
                result.appendChild(stats);
            }
            return result;
        },
        characterSheet(character) {
            let name = document.createElement("h3");
            name.innerText = character["Name"];
            let details = document.createElement("h4");
            details.innerText = `Level ${character["Level"]}`;
            return col(
                blankCard(row(
                    icon(character["avatar"]),
                    col(name, details),
                    vr(),
                    col(
                        h(4, character["Race"]),
                        h(
                            5,
                            Object.keys(character["Class"]).map((x) =>
                                `Level ${character["Class"][x]} ${x}`
                            ).join(", "),
                        ),
                    ),
                    spacer(),
                    col(
                        button(
                            "Main Page",
                            "secondary",
                            () => {
                                document.location.href = "./index.html";
                            },
                        ),
                        button(
                            "Delete",
                            "danger",
                            () => {
                                getStorage().removeItem(character["Name"]);
                                document.location.href = "./index.html";
                            },
                        ),
                    ),
                )),
                row(
                    flexCol(
                        titleCard(
                            "Stats",
                            quickTable(
                                undefined,
                                Object.entries(character["Ability Scores"]).map(
                                    (
                                        [key, x],
                                    ) => [
                                        x.name,
                                        `${
                                            x.value +
                                            (character["Race Bonuses"][key] ||
                                                0)
                                        } (${
                                            calcAbilityModifier(
                                                x.value +
                                                    (character["Race Bonuses"][
                                                        key
                                                    ] || 0),
                                            )
                                        })`,
                                    ],
                                ),
                            ),
                        ),
                        blankCard(
                            quickStat(
                                "Passive Perception",
                                10 +
                                    Number(
                                        calcAbilityModifier(
                                            character["Ability Scores"]["WIS"]
                                                .value +
                                                (character["Race Bonuses"][
                                                    "WIS"
                                                ] || 0),
                                        ),
                                    ),
                            ),
                        ),
                    ),
                    flexCol(
                        blankCard(
                            quickStat(
                                "Hit Points",
                                character["Hit Die"] + Number(
                                    calcAbilityModifier(
                                        character["Ability Scores"]["CON"]
                                            .value +
                                            (character["Race Bonuses"][
                                                "CON"
                                            ] || 0),
                                    ),
                                ),
                            ),
                            quickStat("Speed", `${character.Speed} ft`),
                        ),
                        titleCard(
                            "Proficiencies",
                            quickList(undefined, character["Proficiencies"]),
                        ),
                        titleCard(
                            "Equipment",
                            quickList(undefined, character["Equipment"]),
                        ),
                    ),
                    flexCol(
                        titleCard(
                            "Traits",
                            ...(character["Traits"].map((x) =>
                                quickSection(x.name, x.desc)
                            )),
                        ),
                    ),
                ),
            );
        },
    },
};

function calcAbilityModifier(stat) {
    if (stat <= 3) {
        return "-4";
    } else if (stat <= 5) {
        return "-3";
    } else if (stat <= 7) {
        return "-2";
    } else if (stat <= 9) {
        return "-1";
    } else if (stat <= 11) {
        return "0";
    } else if (stat <= 13) {
        return "+1";
    } else if (stat < 15) {
        return "+2";
    } else if (stat < 17) {
        return "+3";
    } else if (stat < 19) {
        return "+4";
    } else {
        return "+5";
    }
}
