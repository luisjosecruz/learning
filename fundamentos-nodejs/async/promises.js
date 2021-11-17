function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Hola, ' + nombre);
            
        }, 1500);
    });
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

