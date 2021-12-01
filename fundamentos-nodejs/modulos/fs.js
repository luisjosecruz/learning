const fs = require('fs');

function  read(path, callback) {
    fs.readFile(path, (err, data) => {
        callback(data.toString());
    });
}

function write(path, content, callback) {
    fs.writeFile(path, content, (err)  => {
        if (err) {
            console.error('No pude escribir', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function deleteFile(path, callback) {
    fs.unlink(path, callback);
}

// read(__dirname + '/file.txt', console.log);

// write(__dirname + '/file01.txt', 'I am a new file', console.log);

// deleteFile(__dirname + '/file01.txt', console.log);