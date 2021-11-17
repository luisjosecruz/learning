a = 2;  
var a;
console.log(a);

console.log(a);
var a = 2;

nameOfCat('Cat');

function nameOfCat(name) {
    console.log(name);
}

// -----------------------------------------------

var Christmas = "Arbolito";

function December() {
    Christmas();
    return;

    function Christmas() {
        console.log(typeof Christmas);
    }
}

December();