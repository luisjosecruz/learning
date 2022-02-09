const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            let saludo = hola();
            // res.write('Hola desde la ruta '+ req.url);
            res.write(saludo);
            res.end();
            break;
        default:
            res.write('Error 404');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' });

    // // escribir respuesta al usuario
    // res.write('Hola, ahora estoy usando http de node js');
    
    // res.end();
}

function hola() {
    return 'Hola desde la funcion /hola';
}

console.log('Escuchando http en el puerto 3000');

// start debugger
// node --inspect http.js