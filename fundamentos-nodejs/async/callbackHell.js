function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000);
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

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

// --

console.log("Iniciando proceso...");

hola('Luis', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');
    });
});

// hola('Luis', function(nombre) {
//     adios(nombre, function() {
//         console.log('Terminamos...');
//     });
// });

// hola('Luis', function(nombre) {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 adios(nombre, function(nombre) {
//                     console.log("Terminando proceso...");
//                 });  
//             });  
//         });
//     });
// });
