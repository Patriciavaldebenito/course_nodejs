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

let getEmpleado = (id, callback) => {
    // se busca en el array de empleado al empleado con el id ingresado
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    });

    //console.log(empleadoDB);
    if (!empleadoDB) {
        callback(`No existe un empleado con Id ${id}`);

    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    // se busca en el array de empleado al empleado con el id ingresado
    let salarioDB = salarios.find(salario => {
        return salario.id === empleado.id;
    });

    //console.log(empleadoDB);
    if (!salarioDB) {
        callback(`No existe un salario para ${empleado.nombre}`);

    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}




getEmpleado(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    // console.log(empleado)

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
      console.log(`el salario de ${resp.nombre} es de ${resp.salario}$`);
    });


});
