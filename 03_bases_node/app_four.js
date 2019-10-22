const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'genera archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

    
const { createFile, listarTabla } = require('../multiplicar/multiplicar')

/* COMANDOS INDEPENDIENTES */

//console.log(argv);

//node app_four =>  { _: [], '$0': 'app_four' } 
//node app_four crear listar borrar comer => { _: [ 'crear', 'listar', 'borrar', 'comer' ], '$0': 'app_four' }

/************************************************************************************************************** */
let comando = argv._[0];
switch (comando) {
    case 'listar':
            listarTabla(argv.base,argv.limite);
            

    case 'crear':

        createFile(argv.base,argv.limite)
            .then(archivo => {
                console.log(`Archivo creado ${archivo}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('comando no reconocido');
}



