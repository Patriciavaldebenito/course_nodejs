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



let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {

        // se busca en el array de empleado al empleado con el id ingresado
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        });

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        }
        else {
            resolve(empleadoDB);
        }
    });
}


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        // se busca en el array de empleado al empleado con el id ingresado
        let salarioDB = salarios.find(salario => { return salario.id === empleado.id; });

        //console.log(empleadoDB);
        if (!salarioDB) {
            reject(`No existe un salario para ${empleado.nombre}`);
        }
        else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}


getEmpleado(1)
    .then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}$`);
    })
    .catch(err => {
        console.log(err);
    })