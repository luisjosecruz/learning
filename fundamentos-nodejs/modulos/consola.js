// console.log('Something');
// console.info('Info');
// console.error('Error');
// console.warn('Warn');

let table = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'y'
    }
];
// console.group('Conversación');
// console.log('Hola');
// console.log('Bla bla bla');
// console.log('Adios');
// console.groupEnd('Conversación');
// console.log('------');
// console.log(table);
// console.table(table);

function  f1() {
    console.group('Funcion 1');
    console.log('Esto esde la funcion 1');
    console.log('Esto también');
    f2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('Funcion 1');
}

function  f2() {
    console.group('Funcion 2');
    console.log('Ahora estamos en la f2');
    console.groupEnd('Funcion 2');
}

// console.log('empezamos');
// f1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');