console.log("Hola mundo desde el subproceso (fork)");

process.on("message", (msg) => {
    console.log(msg);
});