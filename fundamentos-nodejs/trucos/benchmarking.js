console.time('todo');

let suma = 0;
console.time('bucle 1');
for (let i = 0; i < 100000; i++) {
    suma += 1;
}
console.timeEnd('bucle 1');

let suma2 = 0;
console.time('bucle 2');
for (let j = 0; j < 100000000; j++) {
    suma2 += 1;
}
console.timeEnd('bucle 2');

console.time('asíncrono');
console.log('Empieza el proceso asíncrono');
asincroma()
    .then(() => {
        console.timeEnd('asíncrono');
    });

console.timeEnd('todo');

function asincroma() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termina el proceso asíncrono');
            resolve();
        });
    });
}

