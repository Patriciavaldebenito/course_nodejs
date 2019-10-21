const fs = require('fs');



let createFile = (base) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if(!Number(base)){
            reject(`El valor introducido "${ base }", No es un número`);
           return;
        }


        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`../tabla/tabla-${base}.txt`, data, (err) => {
           
            if (err) reject(err);

            resolve(`tabla-${base}.txt`);
        });
    });
}


module.exports = {
    //createFile:createFile
    createFile
}


