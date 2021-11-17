// Spread Operator

const obj = {
    name: 'Luis',
    age: 23,
    country: 'SV'
}

let { country, ...all } = obj;

console.log(country, all);

// Propiedades de propagación

const obj1 = {
    name: 'Luis',
    age: 23,
}

const obj2 = {
    ...obj1,
    country: 'SV'
}

console.log(obj2);

// Promise Finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 2000)
            : reject(new Error("Test Error"))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Finally");
    });


// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-10-05');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
