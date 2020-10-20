let empleados = [{
    id: 1,
    nombre: 'Pablo'
}, {
    id: 2,
    nombre: 'Felipe'
}];

let salarios = [{
    id: 1,
    salario: 1000
}];

let getempleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB);
        }

    });
}


// let getSalario = (empleado, callback) => {

//     let salarioDB = salarios.find(salario => salario.id === empleado.id);

//     if (!salarioDB) {
//         callback(`No se encontró un salario para el usuario ${ empleado.nombre }`);
//     } else {
//         callback(null, {
//             nombre: empleado.nombre,
//             salario: salarioDB.salario,
//             id: empleado.id
//         });
//     }

// }

getempleado(10).then(empleado => {
    console.log('empleado DB', empleado);
}, (err) => {
    console.log(err);
});