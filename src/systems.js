const SYSTEMS = {
    "dnd": {
        name: "D&D 5e",
        characterCreation() {
            let remote = new LocalDataFetcher({
                api: {
                    2014: {
                        "ability-scores": {
                            cha: {
                                "index": "cha",
                                "name": "CHA",
                                "full_name": "Charisma",
                                "desc": [
                                    "Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",
                                    "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks.",
                                ],
                                "skills": [{
                                    "name": "Deception",
                                    "index": "deception",
                                    "url": "/api/2014/skills/deception",
                                }, {
                                    "name": "Intimidation",
                                    "index": "intimidation",
                                    "url": "/api/2014/skills/intimidation",
                                }, {
                                    "name": "Performance",
                                    "index": "performance",
                                    "url": "/api/2014/skills/performance",
                                }, {
                                    "name": "Persuasion",
                                    "index": "persuasion",
                                    "url": "/api/2014/skills/persuasion",
                                }],
                                "url": "/api/2014/ability-scores/cha",
                                "updated_at": "2025-03-19T04:12:34.922Z",
                            },
                            "count": 6,
                            "results": [{
                                "index": "cha",
                                "name": "CHA",
                                "url": "/api/2014/ability-scores/cha",
                            }, {
                                "index": "con",
                                "name": "CON",
                                "url": "/api/2014/ability-scores/con",
                            }, {
                                "index": "dex",
                                "name": "DEX",
                                "url": "/api/2014/ability-scores/dex",
                            }, {
                                "index": "int",
                                "name": "INT",
                                "url": "/api/2014/ability-scores/int",
                            }, {
                                "index": "str",
                                "name": "STR",
                                "url": "/api/2014/ability-scores/str",
                            }, {
                                "index": "wis",
                                "name": "WIS",
                                "url": "/api/2014/ability-scores/wis",
                            }],
                        },
                        traits: {
                            "damage-resistance": {
                                "index": "damage-resistance",
                                "races": [{
                                    "index": "dragonborn",
                                    "name": "Dragonborn",
                                    "url": "/api/2014/races/dragonborn",
                                }],
                                "subraces": [],
                                "name": "Damage Resistance",
                                "desc": [
                                    "You have resistance to the damage type associated with your draconic ancestry.",
                                ],
                                "proficiencies": [],
                                "url": "/api/2014/traits/damage-resistance",
                                "updated_at": "2025-03-19T04:12:50.889Z",
                            },
                            "breath-weapon": {
                                "index": "breath-weapon",
                                "races": [{
                                    "index": "dragonborn",
                                    "name": "Dragonborn",
                                    "url": "/api/2014/races/dragonborn",
                                }],
                                "subraces": [],
                                "name": "Breath Weapon",
                                "desc": [
                                    "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.",
                                    "When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.",
                                    "After you use your breath weapon, you cannot use it again until you complete a short or long rest.",
                                ],
                                "proficiencies": [],
                                "url": "/api/2014/traits/breath-weapon",
                                "updated_at": "2025-03-19T04:12:50.889Z",
                            },
                            "draconic-ancestry": {
                                "index": "draconic-ancestry",
                                "races": [{
                                    "index": "dragonborn",
                                    "name": "Dragonborn",
                                    "url": "/api/2014/races/dragonborn",
                                }],
                                "subraces": [],
                                "name": "Draconic Ancestry",
                                "desc": [
                                    "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
                                ],
                                "proficiencies": [],
                                "trait_specific": {
                                    "subtrait_options": {
                                        "choose": 1,
                                        "from": {
                                            "option_set_type": "options_array",
                                            "options": [{
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-black",
                                                    "name":
                                                        "Draconic Ancestry (Black)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-black",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-blue",
                                                    "name":
                                                        "Draconic Ancestry (Blue)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-blue",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-brass",
                                                    "name":
                                                        "Draconic Ancestry (Brass)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-brass",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-bronze",
                                                    "name":
                                                        "Draconic Ancestry (Bronze)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-bronze",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-copper",
                                                    "name":
                                                        "Draconic Ancestry (Copper)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-copper",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-gold",
                                                    "name":
                                                        "Draconic Ancestry (Gold)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-gold",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-green",
                                                    "name":
                                                        "Draconic Ancestry (Green)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-green",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-red",
                                                    "name":
                                                        "Draconic Ancestry (Red)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-red",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-silver",
                                                    "name":
                                                        "Draconic Ancestry (Silver)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-silver",
                                                },
                                            }, {
                                                "option_type": "reference",
                                                "item": {
                                                    "index":
                                                        "draconic-ancestry-white",
                                                    "name":
                                                        "Draconic Ancestry (White)",
                                                    "url":
                                                        "/api/2014/traits/draconic-ancestry-white",
                                                },
                                            }],
                                        },
                                        "type": "trait",
                                    },
                                },
                                "url": "/api/2014/traits/draconic-ancestry",
                                "updated_at": "2025-03-19T04:12:50.889Z",
                            },
                        },
                        races: {
                            "count": 9,
                            "results": [{
                                "index": "dragonborn",
                                "name": "Dragonborn",
                                "url": "/api/2014/races/dragonborn",
                            }, {
                                "index": "dwarf",
                                "name": "Dwarf",
                                "url": "/api/2014/races/dwarf",
                            }, {
                                "index": "elf",
                                "name": "Elf",
                                "url": "/api/2014/races/elf",
                            }, {
                                "index": "gnome",
                                "name": "Gnome",
                                "url": "/api/2014/races/gnome",
                            }, {
                                "index": "half-elf",
                                "name": "Half-Elf",
                                "url": "/api/2014/races/half-elf",
                            }, {
                                "index": "half-orc",
                                "name": "Half-Orc",
                                "url": "/api/2014/races/half-orc",
                            }, {
                                "index": "halfling",
                                "name": "Halfling",
                                "url": "/api/2014/races/halfling",
                            }, {
                                "index": "human",
                                "name": "Human",
                                "url": "/api/2014/races/human",
                            }, {
                                "index": "tiefling",
                                "name": "Tiefling",
                                "url": "/api/2014/races/tiefling",
                            }],
                            dragonborn: {
                                "index": "dragonborn",
                                "name": "Dragonborn",
                                "speed": 30,
                                "ability_bonuses": [{
                                    "ability_score": {
                                        "index": "str",
                                        "name": "STR",
                                        "url": "/api/2014/ability-scores/str",
                                    },
                                    "bonus": 2,
                                }, {
                                    "ability_score": {
                                        "index": "cha",
                                        "name": "CHA",
                                        "url": "/api/2014/ability-scores/cha",
                                    },
                                    "bonus": 1,
                                }],
                                "alignment":
                                    "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
                                "age":
                                    "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
                                "size": "Medium",
                                "size_description":
                                    "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
                                "starting_proficiencies": [],
                                "languages": [{
                                    "index": "common",
                                    "name": "Common",
                                    "url": "/api/2014/languages/common",
                                }, {
                                    "index": "draconic",
                                    "name": "Draconic",
                                    "url": "/api/2014/languages/draconic",
                                }],
                                "language_desc":
                                    "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
                                "traits": [{
                                    "index": "draconic-ancestry",
                                    "name": "Draconic Ancestry",
                                    "url": "/api/2014/traits/draconic-ancestry",
                                }, {
                                    "index": "breath-weapon",
                                    "name": "Breath Weapon",
                                    "url": "/api/2014/traits/breath-weapon",
                                }, {
                                    "index": "damage-resistance",
                                    "name": "Damage Resistance",
                                    "url": "/api/2014/traits/damage-resistance",
                                }],
                                "subraces": [],
                                "url": "/api/2014/races/dragonborn",
                                "updated_at": "2025-03-19T04:12:47.371Z",
                            },
                        },
                        classes: {
                            "count": 12,
                            "results": [{
                                "index": "barbarian",
                                "name": "Barbarian",
                                "url": "/api/2014/classes/barbarian",
                            }, {
                                "index": "bard",
                                "name": "Bard",
                                "url": "/api/2014/classes/bard",
                            }, {
                                "index": "cleric",
                                "name": "Cleric",
                                "url": "/api/2014/classes/cleric",
                            }, {
                                "index": "druid",
                                "name": "Druid",
                                "url": "/api/2014/classes/druid",
                            }, {
                                "index": "fighter",
                                "name": "Fighter",
                                "url": "/api/2014/classes/fighter",
                            }, {
                                "index": "monk",
                                "name": "Monk",
                                "url": "/api/2014/classes/monk",
                            }, {
                                "index": "paladin",
                                "name": "Paladin",
                                "url": "/api/2014/classes/paladin",
                            }, {
                                "index": "ranger",
                                "name": "Ranger",
                                "url": "/api/2014/classes/ranger",
                            }, {
                                "index": "rogue",
                                "name": "Rogue",
                                "url": "/api/2014/classes/rogue",
                            }, {
                                "index": "sorcerer",
                                "name": "Sorcerer",
                                "url": "/api/2014/classes/sorcerer",
                            }, {
                                "index": "warlock",
                                "name": "Warlock",
                                "url": "/api/2014/classes/warlock",
                            }, {
                                "index": "wizard",
                                "name": "Wizard",
                                "url": "/api/2014/classes/wizard",
                            }],
                            barbarian: {
                                "index": "barbarian",
                                "name": "Barbarian",
                                "hit_die": 12,
                                "proficiency_choices": [{
                                    "desc":
                                        "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
                                    "choose": 2,
                                    "type": "proficiencies",
                                    "from": {
                                        "option_set_type": "options_array",
                                        "options": [{
                                            "option_type": "reference",
                                            "item": {
                                                "index":
                                                    "skill-animal-handling",
                                                "name":
                                                    "Skill: Animal Handling",
                                                "url":
                                                    "/api/2014/proficiencies/skill-animal-handling",
                                            },
                                        }, {
                                            "option_type": "reference",
                                            "item": {
                                                "index": "skill-athletics",
                                                "name": "Skill: Athletics",
                                                "url":
                                                    "/api/2014/proficiencies/skill-athletics",
                                            },
                                        }, {
                                            "option_type": "reference",
                                            "item": {
                                                "index": "skill-intimidation",
                                                "name": "Skill: Intimidation",
                                                "url":
                                                    "/api/2014/proficiencies/skill-intimidation",
                                            },
                                        }, {
                                            "option_type": "reference",
                                            "item": {
                                                "index": "skill-nature",
                                                "name": "Skill: Nature",
                                                "url":
                                                    "/api/2014/proficiencies/skill-nature",
                                            },
                                        }, {
                                            "option_type": "reference",
                                            "item": {
                                                "index": "skill-perception",
                                                "name": "Skill: Perception",
                                                "url":
                                                    "/api/2014/proficiencies/skill-perception",
                                            },
                                        }, {
                                            "option_type": "reference",
                                            "item": {
                                                "index": "skill-survival",
                                                "name": "Skill: Survival",
                                                "url":
                                                    "/api/2014/proficiencies/skill-survival",
                                            },
                                        }],
                                    },
                                }],
                                "proficiencies": [{
                                    "index": "light-armor",
                                    "name": "Light Armor",
                                    "url":
                                        "/api/2014/proficiencies/light-armor",
                                }, {
                                    "index": "medium-armor",
                                    "name": "Medium Armor",
                                    "url":
                                        "/api/2014/proficiencies/medium-armor",
                                }, {
                                    "index": "shields",
                                    "name": "Shields",
                                    "url": "/api/2014/proficiencies/shields",
                                }, {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url":
                                        "/api/2014/proficiencies/simple-weapons",
                                }, {
                                    "index": "martial-weapons",
                                    "name": "Martial Weapons",
                                    "url":
                                        "/api/2014/proficiencies/martial-weapons",
                                }, {
                                    "index": "saving-throw-str",
                                    "name": "Saving Throw: STR",
                                    "url":
                                        "/api/2014/proficiencies/saving-throw-str",
                                }, {
                                    "index": "saving-throw-con",
                                    "name": "Saving Throw: CON",
                                    "url":
                                        "/api/2014/proficiencies/saving-throw-con",
                                }],
                                "saving_throws": [{
                                    "index": "str",
                                    "name": "STR",
                                    "url": "/api/2014/ability-scores/str",
                                }, {
                                    "index": "con",
                                    "name": "CON",
                                    "url": "/api/2014/ability-scores/con",
                                }],
                                "starting_equipment": [{
                                    "equipment": {
                                        "index": "explorers-pack",
                                        "name": "Explorer's Pack",
                                        "url":
                                            "/api/2014/equipment/explorers-pack",
                                    },
                                    "quantity": 1,
                                }, {
                                    "equipment": {
                                        "index": "javelin",
                                        "name": "Javelin",
                                        "url": "/api/2014/equipment/javelin",
                                    },
                                    "quantity": 4,
                                }],
                                "starting_equipment_options": [{
                                    "desc":
                                        "(a) a greataxe or (b) any martial melee weapon",
                                    "choose": 1,
                                    "type": "equipment",
                                    "from": {
                                        "option_set_type": "options_array",
                                        "options": [{
                                            "option_type": "counted_reference",
                                            "count": 1,
                                            "of": {
                                                "index": "greataxe",
                                                "name": "Greataxe",
                                                "url":
                                                    "/api/2014/equipment/greataxe",
                                            },
                                        }, {
                                            "option_type": "choice",
                                            "choice": {
                                                "desc":
                                                    "any martial melee weapon",
                                                "choose": 1,
                                                "type": "equipment",
                                                "from": {
                                                    "option_set_type":
                                                        "equipment_category",
                                                    "equipment_category": {
                                                        "index":
                                                            "martial-melee-weapons",
                                                        "name":
                                                            "Martial Melee Weapons",
                                                        "url":
                                                            "/api/2014/equipment-categories/martial-melee-weapons",
                                                    },
                                                },
                                            },
                                        }],
                                    },
                                }, {
                                    "desc":
                                        "(a) two handaxes or (b) any simple weapon",
                                    "choose": 1,
                                    "type": "equipment",
                                    "from": {
                                        "option_set_type": "options_array",
                                        "options": [{
                                            "option_type": "counted_reference",
                                            "count": 2,
                                            "of": {
                                                "index": "handaxe",
                                                "name": "Handaxe",
                                                "url":
                                                    "/api/2014/equipment/handaxe",
                                            },
                                        }, {
                                            "option_type": "choice",
                                            "choice": {
                                                "desc": "any simple weapon",
                                                "choose": 1,
                                                "type": "equipment",
                                                "from": {
                                                    "option_set_type":
                                                        "equipment_category",
                                                    "equipment_category": {
                                                        "index":
                                                            "simple-weapons",
                                                        "name":
                                                            "Simple Weapons",
                                                        "url":
                                                            "/api/2014/equipment-categories/simple-weapons",
                                                    },
                                                },
                                            },
                                        }],
                                    },
                                }],
                                "class_levels":
                                    "/api/2014/classes/barbarian/levels",
                                "multi_classing": {
                                    "prerequisites": [{
                                        "ability_score": {
                                            "index": "str",
                                            "name": "STR",
                                            "url":
                                                "/api/2014/ability-scores/str",
                                        },
                                        "minimum_score": 13,
                                    }],
                                    "proficiencies": [{
                                        "index": "shields",
                                        "name": "Shields",
                                        "url":
                                            "/api/2014/proficiencies/shields",
                                    }, {
                                        "index": "simple-weapons",
                                        "name": "Simple Weapons",
                                        "url":
                                            "/api/2014/proficiencies/simple-weapons",
                                    }, {
                                        "index": "martial-weapons",
                                        "name": "Martial Weapons",
                                        "url":
                                            "/api/2014/proficiencies/martial-weapons",
                                    }],
                                },
                                "subclasses": [{
                                    "index": "berserker",
                                    "name": "Berserker",
                                    "url": "/api/2014/subclasses/berserker",
                                }],
                                "url": "/api/2014/classes/barbarian",
                                "updated_at": "2025-03-19T04:12:35.969Z",
                            },
                        },
                    },
                },
            }); //new RemoteDataFetcher("https://www.dnd5eapi.co");
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
            let name = document.createElement("h2");
            name.innerText = character["Name"];
            let details = document.createElement("h3");
            details.innerText = `Level ${character["Level"]}`;
            return col(
                blankCard(row(
                    icon(character["avatar"]),
                    col(name, details),
                    spacer(),
                    col(
                        p(character["Race"]),
                        row(
                            ...Object.keys(character["Class"]).map((x) =>
                                p(`Level ${character["Class"][x]} ${x}`)
                            ),
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
                    ),
                    flexCol(
                        p("two"),
                    ),
                    flexCol(
                        p("three"),
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
