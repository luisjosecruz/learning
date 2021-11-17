// ----------------------------------------------------------------------------
// Replace

const string = "I am learning Javascript and I like Javascript";

const replacedString = string.replace("Javascript", "Pyton");

console.log(replacedString);

const replacedString2 = string.replaceAll("Javascript", "Java");

console.log(replacedString2);

// ----------------------------------------------------------------------------
// Metodos privados #

class Message {
    #show(val) {
        console.log(val);
    };
    get #add(val) {

    }
}

const message = new Message();
message.show("Hola");

// ----------------------------------------------------------------------------
// Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))


// ----------------------------------------------------------------------------
// WeakRef(element) evitar que un elemento no sea recogido por el garbage collector

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}

// ----------------------------------------------------------------------------
// Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);

