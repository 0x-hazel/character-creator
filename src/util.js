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
            result = result[segment];
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
