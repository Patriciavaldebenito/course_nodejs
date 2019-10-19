console.log("init program");

setTimeout(function () {
    console.log("first Timeout ")

}, 3000);

setTimeout(function () {
    console.log("second Timeout ")

}, 0);

setTimeout(function () {
    console.log("third Timeout ")

}, 0);

console.log("FINISH program");


//orden de salida 
/* init program 
   FINISH program 
   second...
   third ...
   first 
*/