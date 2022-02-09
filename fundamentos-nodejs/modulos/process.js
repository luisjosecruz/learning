
process.on('beforeExit', () => {
    console.log('El proceso va a terminar.');
});

process.on('exit', () => {
    console.log('El proceso ha terminado.');
});

setTimeout(() => {
    console.log('Esto si se va a ver');
}, 10);

process.on('uncaughtException', (err, origen) => {
    console.log('Se nos ha olvidado capturar un error');
    console.log(err);
    setTimeout(() => {
        console.log('Esto viene desde la excepciones');
    }, 0);
});

// funcionQueNoExiste();

console.log('Esto si el error no se recoge no sale');


