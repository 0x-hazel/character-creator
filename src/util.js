class DataFetcher {
    constructor() {
        if (this.constructor == DataFetcher) {
            throw new Error("Abstract classes can't be instantiated");
        }
    }
    async fetch(path) {
        throw new Error("Method 'fetch(path)' must be implemented.");
    }
}

function splitPath(path) {
    return path.split("/").filter((seg) => seg.length !== 0);
}

class LocalDataFetcher extends DataFetcher {
    constructor(obj) {
        super();
        this.object = obj;
    }
    async fetch(path) {
        let result = this.object;
        for (let segment of splitPath(path)) {
            try {
                result = result[segment];
            } catch (e) {
                return undefined;
            }
        }
        return result;
    }
}

// let y = await new LocalDataFetcher({ the: { quick: { brown: "fox" } } }).fetch(
//     "/the/quick/brown",
// );
// console.log(y);

class RemoteDataFetcher extends DataFetcher {
    constructor(host) {
        super();
        this.host = host;
    }
    async fetch(path) {
        try {
            let response = await fetch(`${this.host}${path}`);
            if (!response.ok) {
                throw new Error(`Server response: ${response.status}`);
            }
            let data = await response.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    }
}

// let x = await new RemoteDataFetcher("https://www.dnd5eapi.co").fetch(
//     "/api/2014/classes/barbarian",
// );
// console.log(x);

function getStorage() {
    return sessionStorage; // make localStorage once development is stable
}

function removeFrom(list, value) {
    return list.filter((el) =>
        !Object.entries(value).reduce(
            (prev, [k, v]) => prev && (el[k] === v),
            true,
        )
    );
}

// console.log(
//     removeFrom([{ test: 1 }, { test: 5 }, { test: 1341 }, { test: 7 }], {
//         test: 1341,
//     }),
// );

function quickTable(name, values) {
    let result = document.createElement("div");
    if (name) {
        let title = document.createElement("b");
        title.innerText = name;
        result.appendChild(title);
    }
    let list = document.createElement("ul");
    for (let element of values) {
        let el = document.createElement("li");
        let b = document.createElement("b");
        b.innerText = `${element[0]}: `;
        el.appendChild(b);
        el.appendChild(document.createTextNode(element[1]));
        list.appendChild(el);
    }
    result.appendChild(list);
    return result;
}
