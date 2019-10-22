const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base:{
            demand:true,
            alias:'b'
        },
        limite:{
            alias:'l',
            default:10
        }
    })
    .help()
    .argv;

const { createFile } = require('./multiplicar/multiplicar')

let argvThree = process.argv;
console.log(argv.base);
console.log("limite :",argv.limite);



// createFile(base)
// .then( archivo => { 
//     console.log(`Archivo creado ${archivo}`); 
// })
// .catch(err => {console.log(err);
// });
