const bcrypt = require('bcrypt');

const password = '1234secure!';

bcrypt.hash(password, 5, (errm, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, (err, result) => {
        console.log(result);
    });
});

