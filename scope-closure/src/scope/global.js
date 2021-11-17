/*
    Es una mala práctica usar var para varaibles globales
    porque las agrega al objeto window del navegador
    y porque permiten ser reasignadas. Lo mejor para usar 
    varibles globales es que sean declaradas con let o const.
*/
var hello = 'Hello';
var hello = 'Hello +';
let world = 'World';
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

/*
    Es una mala práctica declarar varibles globales dentro de una función.
*/
const helloWorld = () => {
    globalVar = 'I am global';
}

helloWorld();

console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'I AM GLOBAL';
}

anotherFunction();

console.log(globalVar);