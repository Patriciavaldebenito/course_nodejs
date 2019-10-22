//const fs = require('fs');
//const fs = require('express'); // paquete que se instala 
//const fs = require('./xx'); // los que incorporamos , escritos en alguna ruta
const { createFile } = require('./multiplicar/multiplicar')
let base = 'y';

/*
let data ='';
for (let i = 1; i <= 10; i++) {
   data += `${base} * ${i} = ${base * i}\n`;
}
fs.writeFile(`../tabla/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`The file tabla-${ base }.txt has been saved!`);
});
*/


createFile(base)
.then( archivo => { 
    console.log(`Archivo creado ${archivo}`); 
})
.catch(err => {console.log(err);
});
