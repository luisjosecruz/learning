function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function  seRompeAsincrona(callback) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en función asíncrona');
            callback(callback);
        }
    }, 2000);
}

try {
    // otraFuncion();
    seRompeAsincrona((error) => {
        console.log('Hay un error');
        console.log(error);
    });
} catch (err) {
    console.error('Error -> ' + err);
    // console.log(err);
}

console.log('Final');

