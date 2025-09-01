// Clases y Constructor

class person {
    name;
    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hola, Soy ${this.name}`);
    }
}

const gil = new person("Gil");

gil.introduceSelf(); // Hola, soy Gil