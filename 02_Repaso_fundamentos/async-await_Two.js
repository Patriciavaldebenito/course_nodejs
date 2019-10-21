let getName = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('paty');
        }, 3000);

    });
}

// await debe estar dentro de una fx con async (parametro)
let saludo = async() => {

    let nombre = await getName();

    return `Hola ${ nombre }`;
}

saludo().then(mje => {
    console.log(mje)
});