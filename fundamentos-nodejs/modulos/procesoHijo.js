const { exec, spawn, fork } = require('child_process');
// const exec = require('child_process');

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log('¿Está muerto?');
    console.log(process.killed);
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('El proceso terminó');
    console.log(proceso.killed);
});

// -------------------------------------------
// iniciar un nuevo subproceso de node js sin requerir el archivo
let sp1 = fork("modulos/subproceso.js");
let sp2 = fork("modulos/subproceso.js");
sp1.send({msg: "Hola desde el proceso padre"});
sp2.send("Hola desde padre en proceso 2");