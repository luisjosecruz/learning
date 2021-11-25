async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            resolve(nombre);
            // reject('Hay un error');
        }, 1000);
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    })
}

async function main() {
    let nombre = await hola('Luis');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminando proceso...');
}

console.log('Comenzando proceso...');
main();
console.log('Segunda instrucción');