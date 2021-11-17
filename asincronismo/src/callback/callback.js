/**
 * Simulacion de asincronia en JavaScript (Funcion A).
 *
 * pararametro:  Array     list     Lista de numeros.
 * pararametro:  Function  callback Recibe la funcion B.
 */

const asincronia = (list, callback) => {
    //se valida que el parametro list sea un arreglo
    //y no este vacio
    if (list instanceof Array && list.length > 0) {
        let suma = list.map(valor => Math.pow(valor, 2));
        return callback(null, suma);
    }
    //si no se cumple la condicion se manda un error.
    else {
        let error = new Error("Error de ejecución . . . :( ");
        return callback(error, null);
    }
};
//========== Consiguiendo la respuesta correcta ==========//
asincronia([2, 3, 4, 5], (error, result) => (error) ? console.error(error) : console.log(result));

//========== Consiguiendo el error ==========//
asincronia([], (error, result) => (error) ? console.error(error) : console.log(result));
