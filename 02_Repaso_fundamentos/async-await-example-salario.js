console.log("iniciando .js");
let empleados = [{
    id: 1,
    nombre: 'Patricia'
}, {
    id: 2,
    nombre: 'Miguel'
}, {
    id: 3,
    nombre: 'kiki'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = async (id) => {

    // se busca en el array de empleado al empleado con el id ingresado
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    });

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    }
    else {
        return empleadoDB;
    }

}

let getSalario = async (empleado) => {

    // se busca en el array de empleado al empleado con el id ingresado
    let salarioDB = salarios.find(salario => { return salario.id === empleado.id; });

    //console.log(empleadoDB);
    if (!salarioDB) {
        throw new Error(`No existe un salario para ${empleado.nombre}`);
    }
    else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }

}

let getInformation = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
}

getInformation(2)
    .then(mje => { console.log(mje); })
    .catch(err => { console.log(err); });