const data = {
    frontend: 'Luis',
    backend: 'José',
    design: 'Cruz',
    admin: 'Martínez'
}

// se agregó el objeto entries conviete un objeto en un array

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

// el metodo values devuelve un arreglo con los valores del objeto

const data = {
    frontend: 'Luis',
    backend: 'José',
    design: 'Cruz',
}

const values = Object.values(data);

console.log(values);
console.log(values.length);

// padding

const string = 'Hello';

console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(12, ' ----- '));
console.log('food'.padEnd(12, '  ----- '));

// se puede dejar la coma al final del objeto para hacer más facil agregar más elementos al objeto

const obj = {
    name: 'Luis',
    lastname: 'Cruz',
}

// Async y Await
// ----------------------------------------------------------------------

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 2000)
            : reject(new Error("Test Error"));
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();

// ----------------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));

// -----------------------------------------------------------------------

function randomDelayed(max = 10, expected = 5, delay =  1000) {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * max);

        setTimeout(
            () => { number > expected
                ? resolve(number)
                : reject(new Error('número menor al esperado'));
            delay
            });
    });
}

randomDelayed(100, 75, 2500)
    .then(number => console.log(number))
    .catch(error => console.error(error));


// ----------------------------------------------------------------------

// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero


