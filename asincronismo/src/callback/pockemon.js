/**
 * Referencia al objeto XMLHttpRequest.
 */
 let xhttp = new XMLHttpRequest();
 /**
  * Petmite indcar si la peticion ya se ejecuto.
  */
 const DONE   = 4;
 /**
  * Status que retorna el servidor
  */
 const STATUS = 200;
 /**
  * Ruta para la api de pokemons.
  */
 const API_POKEMON = "//pokeapi.co";
 
 //===========================================//
 
 /**
  * Consiguiendo las evoluciondes de charmander.
  *
  * String    ruta Url que se desea consultar. 
  * Function  callback Funcion ah ejecutar.
  */
 const usandoCallBacks = (ruta, callback) => {
     //se inica la peticion
     xhttp.onreadystatechange = () => {
         if (xhttp.readyState === DONE)
         {
             //en el caso de que la peticion se realize de manera exitosa.
             if (xhttp.status === STATUS) callback(null, JSON.parse(xhttp.responseText)); 
             //en caso de que se presente un error.
             else return callback(`Error al consultar => ${ruta}`);
         }//if (xhttp.readyState === DONE)
     };//xhttp.onreadystatechange
 
     xhttp.open("GET", ruta, true);
     xhttp.send();
 }//usandoCallBacks
 
 //=================== Consultando el api de pokemons :) ===================//
 
 //se realiza la primera petcion a la api de pokemons
 usandoCallBacks(`${API_POKEMON}/api/v1/pokemon/4/`, (error_1, data_1) => {
     //error
     if (error_1) return console.error(error_1);
         //se realiza la segunda peticion a la api de pokemons
         usandoCallBacks(`${API_POKEMON}${data_1.evolutions[0].resource_uri}`, (error_2, data_2) => {
             //error
             if (error_2) return console.error(error_2);
             //se realiza la tercera peticion a la api de pokemons
                 usandoCallBacks(`${API_POKEMON}${data_2.evolutions[0].resource_uri}`, (error_3, data_3) => {
                 //error
                 if (error_3) return console.error(error_3);
                     //se realiza la cuarta peticion a la api de pokemons
                     usandoCallBacks(`${API_POKEMON}${data_3.evolutions[0].resource_uri}`, (error_4, data_4) => {
                     //error
                     if (error_4) return console.error(error_4);
                         //Primera fase del pokemon
                         console.log(`Pokemon => ${data_1.name}`);
                         //Primera evolucion
                         console.log(`\tPrimera evolución => ${data_2.name}`);
                         //Segunda Evolucion
                         console.log(`\t\tSegunda evolución => ${data_3.name}`);
                         //Ultima evolucion
                         console.log(`\t\t\tUltima evolución => ${data_4.name}`);
                     });//cuarta llamada
                 });//tercera llamada
         });//Segunda llamada
 });//Primera llamada