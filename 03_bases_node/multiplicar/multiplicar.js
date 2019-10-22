const fs = require('fs');


let listarTabla = (base,limite =10) => {
  

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}\n`);
        }

       
   
}




let createFile = (base, limite =10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if(!Number(base)){
            reject(`El valor introducido "${ base }", No es un número`);
           return;
        }


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`./tabla/tabla-${base}-${limite}.txt`, data, (err) => {
           
            if (err) reject(err);

            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}


module.exports = {
    //createFile:createFile
    createFile,
    listarTabla
}


