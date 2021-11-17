function newFunction(name, age, country) {
    var name = name || 'Luis';
    var age = age || 23;
    var country = country || 'ES';

    console.log(name, age, country);
}

// ES6 Inicialización -----------------------------------------------------------------------
function newFunctionES6(name = 'Luis', age = 23, country = 'ES') {
    console.log(name, age, country);
}

newFunctionES6();
newFunctionES6('José', '24', 'USA');

// ---------------------------------------------------------------------------
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ES6 Concatenación -----------------------------------------------------------------------
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ---------------------------------------------------------------------------
let lorem = "Aquí estoy poniendo lo que estoy pensando  \n" + "en este momento \n";
console.log(lorem);
// ES6 Multilínea ----------------------------------------------------------------------- 
let lorem2 = `Aquí estoy escribiendo lo nuevo
Y esto está con enter`;
console.log(lorem2);

// ES6 Desestructuración -----------------------------------------------------------------------
let person = {
    'name': "Luis",
    'age': 23,
    'country': 'ES'
}
console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);

// ES6 Spread Operator -----------------------------------------------------------------------
let team1 = ['Luis', 'Clark', 'Stark', 'Karen'];
let team2 = ['Clark', 'Eliza', 'Jasmin', 'Carlos'];

let education = ['David', ...team1, ...team2];
console.log(education);

let education2 = [...new Set(['Sofia', ...team1, ...team2])];
console.log(education2);

// ES6 Let y Const -----------------------------------------------------------------------
{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global Let";
}
console.log(globalVar);
console.log(globalLet);

const a = 'b';
a = 'a';

let name = 'Luis';
let age = 23;

// ES5 -----------------------------------------------------------------------
obj = { name: name, age: age };
console.log(obj);

// ES6 Parámetros en objetos -----------------------------------------------------------------------
obj2 = { name, age };
console.log(obj2);

// -----------------------------------------------------------------------
const names = [
    { name : 'Luis', age: 23 },
    { name: 'Karen', age: 22}
];

let listOfNames = names.map(function (item){
    console.log(item.name);
});

// ES6 Arrow Functions -----------------------------------------------------------------------
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  // type here ...  
};
const listOfNames4 = name => {
    // type here ...
};
const square = num => num * num;

// ES6 Promesas -----------------------------------------------------------------------
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Everything is ok');
        } else {
            reject('Something is wrong');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello!'))
    .catch(error => console.log(error));

// ES6 Clases -----------------------------------------------------------------------
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

// ES6 Modulos -----------------------------------------------------------------------
//import { hello } from './module';
const hello = require('./module');
console.log(hello());

// ES6 Generadores -----------------------------------------------------------------------
function* helloWorld () {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

function* fibonacci(){
    let fn1 = 1;
    let fn2 = 1;
    while (true){  
        let actual = fn2;
        fn2 = fn1;
        fn1 = fn1 + actual;
        let reset = yield actual;
        if (reset){
            fn1 = 1;
            fn2 = 1;
        }
    }
}
  
let secuencia = fibonacci();
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3
console.log(secuencia.next().value);     // 5
console.log(secuencia.next().value);     // 8
console.log(secuencia.next().value);     // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3