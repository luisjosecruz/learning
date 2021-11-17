const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('We did it');
        } else {
            reject('Reject');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// --------------------------------------------------------

somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Error');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results ', response);
    })
    .catch(err => {
        console.error(err);
    })


