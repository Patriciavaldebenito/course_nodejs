/* Async - Await */

let getNameOne = () => {
    return 'Patricia';
}

//console.log(getNameOne);
console.log(getNameOne());

let getNameTwo = async() => {
    return 'Patricia';
}

//console.log(getNameTwo);
console.log(getNameTwo());

let getNameThree = () => {
    return new Promise((resolve, reject) => {
      resolve('Patricia');
    });
}

getNameThree()
.then(name => { 
    console.log(name);
})
