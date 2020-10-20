const fs = require('fs');

const colors = require('colors');


let listarTabla = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`)
    }
}

let multiplicar = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El dato a multiplicar no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla_${ base }-al-${ limite }.txt`);

        });
    });
}

module.exports = {
    multiplicar,
    listarTabla
}