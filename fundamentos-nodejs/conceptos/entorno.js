let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'Sin sitio web';

console.log('Hola ' + nombre);
console.log('Mi sitio web es ' + web);

// NOMBRE=Luis WEB=luisjosecruz.com node entorno.js