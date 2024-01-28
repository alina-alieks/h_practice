"use strict"

class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value = this.#value.padEnd(this.#value.length + str.length, str)
        // this.#value += str;
    }
    padStart(str) {
        this.#value = this.#value.padStart(this.#value.length + str.length, str)
        // this.#value = str + this.#value;
    }
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}


const builder = new StringBuilder("."); 
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


let anotherStr = "JavaScript";
let paddedAnotherStr = anotherStr.padStart(15);
console.log(paddedAnotherStr); // "     JavaScript"
